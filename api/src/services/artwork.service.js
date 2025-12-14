import prisma from "../config/database.js";

class ArtworkService {
  /**
   * Crée une nouvelle œuvre d'art
   * @param {string} userId - ID de l'utilisateur
   * @param {string} title - Titre de l'œuvre
   * @param {string} description - Description de l'œuvre
   * @returns {Promise<object>}
   */
  async create(userId, title, description) {
    // Vérifier que l'utilisateur existe
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }

    const artwork = await prisma.artworks.create({
      data: {
        title,
        description,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    return artwork;
  }

  /**
   * Récupère toutes les œuvres d'art avec pagination
   * @param {number} page - Numéro de page
   * @param {number} limit - Nombre d'éléments par page
   * @returns {Promise<{artworks: object[], total: number, page: number, totalPages: number}>}
   */
  async getAll(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [artworks, total] = await Promise.all([
      prisma.artworks.findMany({
        skip,
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.artworks.count(),
    ]);

    return {
      artworks,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  /**
   * Récupère une œuvre d'art par son ID
   * @param {string} id - ID de l'œuvre
   * @returns {Promise<object>}
   */
  async getById(id) {
    const artwork = await prisma.artworks.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    if (!artwork) {
      throw new Error("ARTWORK_NOT_FOUND");
    }

    return artwork;
  }

  /**
   * Récupère toutes les œuvres d'un utilisateur
   * @param {string} userId - ID de l'utilisateur
   * @returns {Promise<object[]>}
   */
  async getByUserId(userId) {
    const artworks = await prisma.artworks.findMany({
      where: { userId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return artworks;
  }

  /**
   * Met à jour une œuvre d'art
   * @param {string} id - ID de l'œuvre
   * @param {string} userId - ID de l'utilisateur (pour vérifier la propriété)
   * @param {object} data - Données à mettre à jour
   * @returns {Promise<object>}
   */
  async update(id, userId, data) {
    // Vérifier que l'œuvre existe
    const artwork = await prisma.artworks.findUnique({
      where: { id },
    });

    if (!artwork) {
      throw new Error("ARTWORK_NOT_FOUND");
    }

    // Vérifier que l'utilisateur est le propriétaire
    if (artwork.userId !== userId) {
      throw new Error("UNAUTHORIZED");
    }

    // Mettre à jour l'œuvre
    const updatedArtwork = await prisma.artworks.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    return updatedArtwork;
  }

  /**
   * Supprime une œuvre d'art
   * @param {string} id - ID de l'œuvre
   * @param {string} userId - ID de l'utilisateur (pour vérifier la propriété)
   * @returns {Promise<void>}
   */
  async delete(id, userId) {
    // Vérifier que l'œuvre existe
    const artwork = await prisma.artworks.findUnique({
      where: { id },
    });

    if (!artwork) {
      throw new Error("ARTWORK_NOT_FOUND");
    }

    // Vérifier que l'utilisateur est le propriétaire
    if (artwork.userId !== userId) {
      throw new Error("UNAUTHORIZED");
    }

    // Supprimer l'œuvre
    await prisma.artworks.delete({
      where: { id },
    });
  }
}

export default new ArtworkService();
