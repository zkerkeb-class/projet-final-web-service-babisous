import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "../generated/prisma/index.js";

// Charger les variables d'environnement
dotenv.config();

// Initialiser Prisma (se connecte directement à MongoDB)
const prisma = new PrismaClient();

// Initialiser Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "API is running!" });
});

// Exemple de route pour tester Prisma
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { email, name } = req.body;
    const user = await prisma.user.create({
      data: { email, name },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Gérer la fermeture propre
process.on("beforeExit", async () => {
  await prisma.$disconnect();
});
