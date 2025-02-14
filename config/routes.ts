// Fichier : config/routes.ts

export const API_BASE_URL = "http://192.168.1.186:4010";

export const USER_MANAGEMENT = `http://192.168.1.146:8081/api/v1`;
export const AuthRoutes = {
  REGISTER: `${USER_MANAGEMENT}/users`, // Endpoint pour l'inscription?
  REGISTER_: `${USER_MANAGEMENT}/auth/`,
  REGISTER_GOOGLE: `${USER_MANAGEMENT}/auth/google/callback`,
  LOGIN: `${USER_MANAGEMENT}/auth/login`, // Endpoint pour la connexion
  LOGOUT: `${USER_MANAGEMENT} /auth/logout`, // Endpoint pour la déconnexion

};

export const NOTIFICATIONSERVER = `http://... `;
export const notificationsRoutes = {
  push_NOTIFY: `${NOTIFICATIONSERVER}/....`,
};

export const BUSINESS_ACTOR_SERVER = "http://localhost:4001/api/v1/business_actor";
export const businessActorRoutes = {
  createBusinessActor: `${BUSINESS_ACTOR_SERVER}/create`,
}

export const RESSOURCES_SERVER = "http://localhost:4000/api/v1";
export const ressourcesRoutes = {
  ressourcesCategorie: `${RESSOURCES_SERVER}/categorie`,
  ressourcesCategorieCreate: `${RESSOURCES_SERVER}/categorie/create`,
  ressourcesProductPostCreate: `${RESSOURCES_SERVER}/product_post/create`,
  ressourcesMediaAddProduct: `${RESSOURCES_SERVER}/media/add/product`
}



/*
export const UserRoutes = {
  PROFILE: `${ API_BASE_URL }/users/profile`, // Endpoint pour le profil utilisateur
  UPDATE_PROFILE: `${ API_BASE_URL } /users/update`, // Endpoint pour mettre à jour le profil
};

export const ProductRoutes = {
  GET_ALL_PRODUCTS: `${ API_BASE_URL } /products`, / / Endpoint pour récupérer tous les produits
GET_PRODUCT_BY_ID: (id: string) => `${API_BASE_URL}/products/${id}`, // Endpoint pour récupérer un produit par son ID
};

// Ajoutez d'autres routes au besoin*/