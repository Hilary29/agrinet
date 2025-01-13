export type UUID = string;

export enum DeliveryOption {
  AT_SALE_POINT = "AT_SALE_POINT",
  IN_TOWN = "IN_TOWN",
  OUT_TOWN = "OUT_TOWN",
  OTHER_LOCATION = "OTHER_LOCATION"
}

export enum SalePriceType {
  RETAIL = "RETAIL",
  WHOLESALE = "WHOLESALE",
  SEMI_WHOLESALE = "SEMI_WHOLESALE",
  SUPER_WHOLESALE = "SUPER_WHOLESALE",
  DELIVERY = "DELIVERY",
  PURCHASE = "PURCHASE",
  OTHER_PRICE = "OTHER_PRICE"
}

export interface SalePrice {
  sale_price_id: UUID;
  post_id: string;
  type: string;
  salePriceType: SalePriceType;
  minQuantity: number;
  maxQuantity: number;
  value: number;
  max_reduction: number;
  currency: string;
  is_negociable: boolean;
  validity_date: Date;
  notes?: string;
}

export interface DeliveryOptionType {
  delivery_option_id: UUID;
  post_id: string;
  min_quantity: number;
  max_quantity: number;
  delivery_option: DeliveryOption;
  delivery_cost: number;
  currency: string;
  is_negociable: boolean;
  contact_phone: string;
  validity_date: Date;
  notes?: string;
}

export interface ProductPost {
  postId: UUID;
  merchantId: UUID;
  productId: UUID;
  description: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  lifespan: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  images: string[];
  sale_prices: SalePrice[];
  delivery_prices: DeliveryOptionType[];
  payment_modes: PaymentMode[];
  available_at: SalePoint[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reviews: any;
}

export interface PaymentMode {
  payment_id: UUID;
  post_id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  notes?: string;
}

export interface SalePoint {
  agency_id: UUID;
  post_id: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  notes?: string;
}




const salePriceExample: SalePrice = {
    sale_price_id: "e64a0eaf-98d9-4e34-bb6e-254ad658edfe", 
    post_id: "90d1be72-0816-4754-9d6d-e70d2451f0d3",
    type: "PRODUCT",
    salePriceType: SalePriceType.RETAIL,
    minQuantity: 1,
    maxQuantity: 100,
    value: 15000,  // 15,000 FCFA
    max_reduction: 2000,  // Réduction max : 2000 FCFA
    currency: "FCFA",
    is_negociable: false,
    validity_date: new Date("2025-06-30T23:59:59"),
    notes: "Prix standard, non négociable"
  };
  
  const deliveryOptionExample: DeliveryOptionType = {
    delivery_option_id: "2a3e3c2b-39ae-4389-b9fd-ecd26ae48f12",
    post_id: "90d1be72-0816-4754-9d6d-e70d2451f0d3",
    min_quantity: 1,
    max_quantity: 100,
    delivery_option: DeliveryOption.IN_TOWN,
    delivery_cost: 5000,  // 5000 FCFA pour la livraison en ville
    currency: "FCFA",
    is_negociable: false,
    contact_phone: "+237 698765432",
    validity_date: new Date("2025-06-30T23:59:59"),
    notes: "Livraison en 24 heures"
  };
  
  const productPostExample: ProductPost = {
    postId: "90d1be72-0816-4754-9d6d-e70d2451f0d3",
    merchantId: "b987ecb3-89ad-48f7-9cf0-c9747f8ea223",
    productId: "a271b3e9-347f-472a-bc51-9fa0537261c3",
    description: "Légumes frais de la ferme, cultivés de manière biologique sans pesticides.",
    status: "PUBLISHED",
    lifespan: 7,  // Durée de vie : 7 jours
    quantity: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
    images: ["https://example.com/images/legumes.jpg", "https://example.com/images/legumes2.jpg"],
    sale_prices: [salePriceExample],  // Utilise l'exemple de SalePrice
    delivery_prices: [deliveryOptionExample],  // Utilise l'exemple de DeliveryOptionType
    payment_modes: [{
      payment_id: "be0c3a7e-ec6c-45b2-b7ec-37f2d07c18ab",
      post_id: "90d1be72-0816-4754-9d6d-e70d2451f0d3",
      value: "Mobile Money",
      notes: "Paiement par MTN Mobile Money ou Orange Money"
    }],
    available_at: [{
      agency_id: "a2d839bd-72ff-4b72-bdbd-bb5578277c0b",
      post_id: "90d1be72-0816-4754-9d6d-e70d2451f0d3",
      location: {
        latitude: 3.8487,
        longitude: 11.5021,
        address: "Douala, Cameroun, Rue de la Ferme"
      },
      notes: "Disponible au point de vente de Douala"
    }],
    reviews: [{
      user: "Jean123",
      rating: 4.5,
      comment: "Légumes très frais et bien emballés. Livraison rapide."
    }]
  };
  
  const paymentModeExample: PaymentMode = {
    payment_id: "be0c3a7e-ec6c-45b2-b7ec-37f2d07c18ab",
    post_id: "90d1be72-0816-4754-9d6d-e70d2451f0d3",
    value: "Mobile Money",
    notes: "Paiement par MTN Mobile Money ou Orange Money"
  };
  
  const salePointExample: SalePoint = {
    agency_id: "a2d839bd-72ff-4b72-bdbd-bb5578277c0b",
    post_id: "90d1be72-0816-4754-9d6d-e70d2451f0d3",
    location: {
      latitude: 3.8487,
      longitude: 11.5021,
      address: "Douala, Cameroun, Rue de la Ferme"
    },
    notes: "Disponible au point de vente de Douala"
  };
  