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

export interface Product2 {
  id: string
  name: string
  description: string
  price: number
  quantity?: string
  category: string
  seller: string  
}

  
  export const products: Product[] = [
    {
      id: "1",
      name: "Tomatoes",
      description: "Fresh, ripe tomatoes perfect for salads and cooking. Grown locally with sustainable farming practices.",
      price: 6000,
      quantity: 3,
      category: "Vegetables",
      seller: "Farm Fresh Cooperative",
      SalePoints: ["Yaounde,Marche Madagascar"],
      images: ["/images/tomato-product.jpg","/images/tomato-product3.jpg"],
      stock: "in-stock"
    },
    {
      id: "2",
      name: "Tomatoes",
      description: "Fresh, ripe tomatoes perfect for salads and cooking. Grown locally with sustainable farming practices.",
      price: 6000,
      quantity: 3,
      category: "Vegetables",
      seller: "Farm Fresh Cooperative",
      SalePoints: ["Yaounde, Marche Mokolo"],
      images: ["/images/tomato-product3.jpg","/images/tomato-product2.jpg"],
      stock: "in-stock"
    },
    {
      id: "3",
      name: "Carrots",
      description: "Fresh and crispy carrots, perfect for salads and cooking.",
      price: 2500,
      quantity: 1 ,
      category: "Vegetables",
      seller: "Organic Roots",
      SalePoints: ["Douala, Marche Deido"],
      images: ["/images/carrot-product.jpg"],
      stock: "in-stock"
    },
    {
      id: "4",
      name: "Plantain",
      description: "Fresh plantains bunches, perfect for cooking or grilling.",
      price: 15000,
      quantity: 6,
      category: "Fruits",
      seller: "Tropical Harvest",
      SalePoints: ["Douala, Marche Dakar"],
      images: ["/images/plantain-product.jpg","/images/plantain-product2.png"],
      stock: "in-stock"
    },
    {
      id: "5",
      name: "Tomatoes",
      description: "Fresh, ripe tomatoes perfect for salads and cooking. Grown locally with sustainable farming practices.",
      price: 6000,
      quantity:2,
      category: "Vegetables",
      seller: "Farm Fresh Cooperative",
      SalePoints: ["Ebolowa, Quartier Haoussa"],
      images: ["/images/tomato-product.jpg"],
      stock: "out-of-stock"
    },
      {
        id: "6",
        name: "Plantain",
        description: "Fresh plantains, perfect for cooking or grilling.",
        price: 15000,
        quantity: 8,
        category: "Fruits",
        seller: "Tropical Harvest",
        SalePoints: ["Bafoussam, Marche A, B"],
        images: ["/images/plantain-product2.png","/images/plantain-product.jpg"],
        stock: "in-stock"
      },
      {
        id: "7",
        name: "Pepper",
        description: "Differents varieties of pepper. Grown locally with sustainable farming practices.",
        price: 9000,
        quantity: 3,
        category: "Vegetables",
        seller: "Farm Fresh Cooperative",
        SalePoints: ["Yaounde, Marche Madagascar"],
        images: ["/images/pepper-product3.jpg","/images/pepper-product2.jpg"],
        stock: "in-stock"
      },
      {
        id: "8",
        name: "Tomatoes",
        description: "Fresh, ripe tomatoes perfect for salads and cooking. Grown locally with sustainable farming practices.",
        price: 6000,
        quantity: 5,
        category: "Vegetables",
        seller: "Farm Fresh Cooperative",
        SalePoints: ["Yaounde,Marche Madagascar"],
        images: ["/images/tomato-product.jpg"],
        stock: "out-of-stock"
      },
  ]
  
  