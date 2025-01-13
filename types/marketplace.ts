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

