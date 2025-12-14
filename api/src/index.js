import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import artworkRoutes from "./routes/artwork.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import anchorRoutes from "./routes/anchor.js";

// Charger les variables d'environnement
dotenv.config();

// Initialiser Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route racine
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API Arte - Bienvenue !",
    version: "1.0.0",
    endpoints: {
      auth: "/api/auth",
      users: "/api/users",
      artworks: "/api/artworks",
      upload: "/api/upload",
      anchors: "/api/anchors",
    },
  });
});

// Routes API
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/artworks", artworkRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/anchors", anchorRoutes);

// Gestion des routes non trouvées
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    error: "Route non trouvée",
  });
});

// Gestion globale des erreurs
app.use((err, req, res, next) => {
  console.error("Erreur serveur:", err);
  res.status(500).json({
    success: false,
    error: "Erreur interne du serveur",
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📚 Documentation API disponible sur http://localhost:${PORT}`);
});
