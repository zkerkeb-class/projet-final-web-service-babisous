"use client";

import { useEffect, useState } from "react";
import { APIProvider, Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import anchorService from "@/lib/services/anchorService";
import "./map.css";

export default function MapPage() {
  const [anchors, setAnchors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnchor, setSelectedAnchor] = useState(null);
  const [center, setCenter] = useState({ lat: 48.8566, lng: 2.3522 }); // Paris par défaut

  useEffect(() => {
    loadAnchors();
  }, []);

  const loadAnchors = async () => {
    try {
      setLoading(true);
      const anchorsData = await anchorService.getAll();
      setAnchors(anchorsData);

      // Centrer la carte sur le premier anchor si disponible
      if (anchorsData && anchorsData.length > 0) {
        const firstAnchor = anchorsData[0];
        setCenter({
          lat: firstAnchor.latitude,
          lng: firstAnchor.longitude,
        });
      }

      setError(null);
    } catch (err) {
      console.error("Erreur lors du chargement des anchors:", err);
      setError("Impossible de charger les anchors");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="map-container">
        <div className="map-loading">
          <p>Chargement de la carte...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="map-container">
        <div className="map-error">
          <p>{error}</p>
          <button onClick={loadAnchors} className="retry-button">
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="map-container">
      <div className="map-header">
        <h1>Carte des Artworks</h1>
        <p className="map-info">
          {anchors.length} artwork{anchors.length > 1 ? "s" : ""} géolocalisé{anchors.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className="map-wrapper">
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <Map
            defaultCenter={center}
            defaultZoom={12}
            mapId="artwork-map"
            style={{ width: "100%", height: "100%" }}
          >
            {anchors.map((anchor) => (
              <AdvancedMarker
                key={anchor.id}
                position={{
                  lat: anchor.latitude,
                  lng: anchor.longitude,
                }}
                onClick={() => setSelectedAnchor(anchor)}
              >
                <div className="custom-marker">
                  <div className="marker-pin"></div>
                </div>
              </AdvancedMarker>
            ))}

            {selectedAnchor && (
              <InfoWindow
                position={{
                  lat: selectedAnchor.latitude,
                  lng: selectedAnchor.longitude,
                }}
                onCloseClick={() => setSelectedAnchor(null)}
              >
                <div className="info-window">
                  <h3>{selectedAnchor.artwork?.title || "Sans titre"}</h3>
                  <p className="artwork-description">
                    {selectedAnchor.artwork?.description || "Pas de description"}
                  </p>
                  {selectedAnchor.artwork?.imageUrl && (
                    <img
                      src={selectedAnchor.artwork.imageUrl}
                      alt={selectedAnchor.artwork.title}
                      className="artwork-preview"
                    />
                  )}
                  <div className="artwork-details">
                    <p>
                      <strong>Artiste:</strong> {selectedAnchor.artwork?.user?.name || selectedAnchor.artwork?.user?.email}
                    </p>
                    <p>
                      <strong>Position:</strong> {selectedAnchor.latitude.toFixed(6)}, {selectedAnchor.longitude.toFixed(6)}
                    </p>
                    {selectedAnchor.altitude && (
                      <p>
                        <strong>Altitude:</strong> {selectedAnchor.altitude.toFixed(2)}m
                      </p>
                    )}
                  </div>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </div>
    </div>
  );
}
