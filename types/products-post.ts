export interface ProductPostResponse {
  id: string;
  marchandId: string;
  variationId: string;
  categorieId: string;
  name: string;
  longDescription: string;
  shortDescription: string;
  lifespan: number;
  quantity: number;
  saleUnit: 'KG' | 'CARTON' | 'PIECE' | 'METER';
  basePrice: number;
  weight: number;
  defaultCurrency: number;
  nextAvailableTime: number;
  status: 'AVAILABLE' | 'UNAVAILABLE';
  expiresAt: string; // ISO 8601 date-time format
  createAt: string;  // ISO 8601 date-time format
  updateAt: string;  // ISO 8601 date-time format
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  quantity?: number
  category: string
  seller: string
  SalePoints: string[]
  images: string[]
  stock: "in-stock" | "out-of-stock"
  composition?: string;  // Par exemple : 100% Bio
  storageInstructions?: string;  // Par exemple : Conserver dans un endroit frais
  origin?: string;  // L'origine du produit (ex. Ferme locale)
  sizeOptions?: string[];  // Tailles disponibles, si applicable
  colorOptions?: string[];  // Couleurs disponibles, si applicable
  ratings?: number;  // Moyenne des évaluations (par exemple : 4.5/5)
  reviewCount?: number;  // Nombre d'avis sur le produit
  shippingDetails?: string;  // Détails de livraison (par exemple : retour gratuit)
  tags?: string[];  // Mots-clés pour le produit (par exemple : bio, local, etc.)

}
