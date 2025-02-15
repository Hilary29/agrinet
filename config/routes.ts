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

export const RESSOURCES_SERVER = "http://localhost:4000/api";
export const ressourcesRoutes = {
  ressourcesCategorie: `${RESSOURCES_SERVER}/v1/categorie`,
  ressourcesCategorieCreate: `${RESSOURCES_SERVER}/v1/categorie/create`,

  ressourcesProductPost: `${RESSOURCES_SERVER}/product_post`,
  ressourceCreateProduct: `${RESSOURCES_SERVER}/v1/create-product`,
  ressourcesProductPostCreate: `${RESSOURCES_SERVER}/v1/product_post/create`,
  ressourcesProductPostClient: `${RESSOURCES_SERVER}/v1/product_post-client`,
  ressourcesMediaAddProduct: `${RESSOURCES_SERVER}/v1/media/add/product`,

  ressourceState: `${RESSOURCES_SERVER}/v2/resource/states`,
}

export const MEDIA_SERVER = `http://localhost:4000/api`;
export const mediaRoutes = {
  mediaDowload: `${MEDIA_SERVER}/v1/media/download`,
}


export const CART_SERVER = "http://localhost:4010/api";
export const cartRoutes = {
  cart: `${CART_SERVER}/cart`,
  cartItems: `${CART_SERVER}/cart/items`,
}

export const ORDERS_SERVER = "http://localhost:4002/api";
export const orderRoutes = {
  cartOrdersCheckout: `${ORDERS_SERVER}/orders/checkout`,
}

export const PAYMENTS_SERVER = "http://localhost:";
export const paymentsRoute = {
  payment: `${PAYMENTS_SERVER}/payment`,
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