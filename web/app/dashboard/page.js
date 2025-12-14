"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import Button from "@/components/Button";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <ProtectedRoute>
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <Button onClick={handleLogout} variant="secondary">
            Déconnexion
          </Button>
        </header>

        <div className="dashboard-content">
          <div className="welcome-card">
            <h2>Bienvenue, {user?.name || user?.email} !</h2>
            <p>Vous êtes connecté avec succès.</p>
          </div>

          <div className="info-card">
            <h3>Informations du profil</h3>
            <div className="info-row">
              <span className="info-label">Nom :</span>
              <span className="info-value">{user?.name || "Non renseigné"}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email :</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Membre depuis :</span>
              <span className="info-value">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("fr-FR")
                  : "Inconnu"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
