"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";
import Alert from "./Alert";
import artworkService from "@/lib/services/artworkService";

export default function ArtworkList({ refreshTrigger }) {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadArtworks();
  }, [refreshTrigger]);

  const loadArtworks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await artworkService.getAll();
      setArtworks(data.artworks || []);
    } catch (err) {
      setError(err.message || "Erreur lors du chargement");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette œuvre ?")) {
      return;
    }

    try {
      setDeletingId(id);
      await artworkService.delete(id);
      setArtworks((prev) => prev.filter((artwork) => artwork.id !== id));
    } catch (err) {
      alert(err.message || "Erreur lors de la suppression");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <LoadingSpinner size="medium" />
        <p>Chargement des artworks...</p>
      </div>
    );
  }

  if (error) {
    return <Alert type="error" message={error} />;
  }

  if (artworks.length === 0) {
    return (
      <div className="empty-state">
        <p>Aucune œuvre pour le moment.</p>
        <p>Créez votre première œuvre en utilisant le formulaire ci-dessus !</p>
      </div>
    );
  }

  return (
    <div className="artwork-list">
      <h2>Mes œuvres ({artworks.length})</h2>
      <div className="artwork-grid">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-card">
            <div className="artwork-header">
              <h3>{artwork.title}</h3>
              {artwork.user && (
                <span className="artwork-author">
                  Par {artwork.user.name || artwork.user.email}
                </span>
              )}
            </div>

            {artwork.description && (
              <p className="artwork-description">{artwork.description}</p>
            )}

            <div className="artwork-meta">
              <span className="artwork-date">
                Créé le {new Date(artwork.createdAt).toLocaleDateString("fr-FR")}
              </span>
            </div>

            <div className="artwork-actions">
              <a
                href={artwork.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Voir le modèle 3D
              </a>
              <Button
                variant="secondary"
                onClick={() => handleDelete(artwork.id)}
                disabled={deletingId === artwork.id}
              >
                {deletingId === artwork.id ? (
                  <LoadingSpinner size="small" />
                ) : (
                  "Supprimer"
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
