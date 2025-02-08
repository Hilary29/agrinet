import { ReactNode } from "react";

export interface Product {
    stockPercentage: number; // Changed to number for proper calculations
    revenue: number; // Changed to number
    performanceMetrics: ReactNode;
    id: string;
    name: string;
    description: string;
    price: number;
    quantity?: number;
    category: string;
    seller: string;
    images: string[];
    stock: "in-stock" | "out-of-stock";
    composition?: string;  // For example: 100% Bio
    storageInstructions?: string;  // For example: Store in a cool place
    origin?: string;  // Product origin (e.g., Local farm)
    sizeOptions?: string[];  // Available sizes, if applicable
    colorOptions?: string[];  // Available colors, if applicable
    ratings?: number;  // Average ratings (e.g., 4.5/5)
    reviewCount?: number;  // Number of reviews for the product
    shippingDetails?: string;  // Shipping details (e.g., free returns)
    tags?: string[];  // Keywords for the product (e.g., organic, local, etc.)
}

export const products: Product[] = [
  {
    id: "1",
    name: "Tomatoes",
    description: "Fresh, ripe tomatoes perfect for salads and cooking.",
    price: 6000,
    quantity: 3,
    category: "Vegetables",
    seller: "Farm Fresh Cooperative",
    images: ["/images/tomato-product.jpg"],
    stock: "in-stock",
    stockPercentage: 70, // Set a percentage value for testing
    revenue: 42000,
    performanceMetrics: undefined,
  },
  {
    id: "2",
    name: "Carrots",
    description: "Fresh and crispy carrots, perfect for salads and cooking.",
    price: 2500,
    quantity: 10,
    category: "Vegetables",
    seller: "Organic Roots",
    images: ["/images/carrot-product.jpg"],
    stock: "in-stock",
    stockPercentage: 50,
    revenue: 25000,
    performanceMetrics: undefined,
  },
  {
    id: "3",
    name: "Plantain",
    description: "Fresh plantains, perfect for cooking or grilling.",
    price: 15000,
    quantity: 6,
    category: "Fruits",
    seller: "Tropical Harvest",
    images: ["/images/plantain-product.jpg"],
    stock: "in-stock",
    stockPercentage: 30,
    revenue: 90000,
    performanceMetrics: undefined,
  },
  {
    id: "4",
    name: "Pepper",
    description: "Different varieties of peppers. Grown locally.",
    price: 9000,
    quantity: 3,
    category: "Vegetables",
    seller: "Farm Fresh Cooperative",
    images: ["/images/pepper-product.jpg"],
    stock: "in-stock",
    stockPercentage: 80,
    revenue: 27000,
    performanceMetrics: undefined,
  },
  {
    id: "5",
    name: "Eggplant",
    description: "Fresh eggplants ideal for grilling and baking.",
    price: 7000,
    quantity: 5,
    category: "Vegetables",
    seller: "Local Farmers Market",
    images: ["/images/eggplant-product.jpg"],
    stock: "out-of-stock",
    stockPercentage: 0,
    revenue: 0,
    performanceMetrics: undefined,
  },
  {
    id: "6",
    name: "Cucumbers",
    description: "Crisp cucumbers perfect for salads.",
    price: 2500,
    quantity: 8,
    category: "Vegetables",
    seller: "Organic Roots",
    images: ["/images/cucumber-product.jpg"],
    stock: "in-stock",
    stockPercentage: 60,
    revenue: 15000,
    performanceMetrics: undefined,
  },
  {
    id: "7",
    name: "Spinach",
    description: "Fresh spinach, great for salads and cooking.",
    price: 3000,
    quantity: 4,
    category: "Vegetables",
    seller: "Green Fields",
    images: ["/images/spinach-product.jpg"],
    stock: "in-stock",
    stockPercentage: 90,
    revenue: 12000,
    performanceMetrics: undefined,
  },
  {
    id: "8",
    name: "Bell Peppers",
    description: "Colorful bell peppers, perfect for cooking.",
    price: 5000,
    quantity: 7,
    category: "Vegetables",
    seller: "Farm Fresh Cooperative",
    images: ["/images/bellpepper-product.jpg"],
    stock: "in-stock",
    stockPercentage: 75,
    revenue: 35000,
    performanceMetrics: undefined,
  },
];