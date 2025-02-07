// Fichier : config/routes.ts

export const API_BASE_URL = "http://192.168.1.186:4010";

export const USER_MANAGEMENT = `http://192.168.1.185:8080/api/v1`;
export const AuthRoutes = {
  REGISTER: `${USER_MANAGEMENT}/users`, // Endpoint pour l'inscription?
  REGISTER_: `${USER_MANAGEMENT}/auth/`,
  LOGIN: `${USER_MANAGEMENT}/auth/login`, // Endpoint pour la connexion
  LOGOUT: `${USER_MANAGEMENT} /auth/logout`, // Endpoint pour la déconnexion

};

export const NOTIFICATIONSERVER = `http://... `;
export const notificationsRoutes = {
  push_NOTIFY: `${NOTIFICATIONSERVER}/....`,
};

/*
export const UserRoutes = {
  PROFILE: `${API_BASE_URL}/users/profile`, // Endpoint pour le profil utilisateur
  UPDATE_PROFILE: `${API_BASE_URL}/users/update`, // Endpoint pour mettre à jour le profil
};

export const ProductRoutes = {
  GET_ALL_PRODUCTS: `${API_BASE_URL}/products`, // Endpoint pour récupérer tous les produits
  GET_PRODUCT_BY_ID: (id: string) => `${API_BASE_URL}/products/${id}`, // Endpoint pour récupérer un produit par son ID
};

// Ajoutez d'autres routes au besoin*/