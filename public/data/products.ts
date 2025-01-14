export interface Product {
    id: string
    name: string
    description: string
    price: number
    quantity?: string
    category: string
    seller: string
    image: string
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
      quantity: "3 crates of tomatoes",
      category: "Vegetables",
      seller: "Farm Fresh Cooperative",
      image: "/images/tomato-product.jpg",
      stock: "out-of-stock"
    },
    {
      id: "2",
      name: "Mix of vegetables",
      description: "A fresh selection of mixed vegetables including tomatoes, potatoes, carrots and cucumbers.",
      price: 10000,
      quantity: "4 crates of mixed vegetables",
      category: "Vegetables",
      seller: "Green Valley Farms",
      image: "/images/mixed-product.jpg",
      stock: "in-stock"
    },
    {
      id: "3",
      name: "Carrots",
      description: "Fresh and crispy carrots, perfect for salads and cooking.",
      price: 2500,
      quantity: "1 crate of carrots",
      category: "Vegetables",
      seller: "Organic Roots",
      image: "/images/carrot-product.jpg",
      stock: "in-stock"
    },
    {
      id: "4",
      name: "Plantain",
      description: "Fresh plantains, perfect for cooking or grilling.",
      price: 15000,
      quantity: "5 plantain bunches",
      category: "Fruits",
      seller: "Tropical Harvest",
      image: "/images/plantain-product.jpg",
      stock: "in-stock"
    },
    {
        id: "5",
        name: "Plantain",
        description: "Fresh plantains, perfect for cooking or grilling.",
        price: 15000,
        quantity: "5 plantain bunches",
        category: "Fruits",
        seller: "Tropical Harvest",
        image: "/images/plantain-product.jpg",
        stock: "in-stock"
      },
      {
        id: "6",
        name: "Plantain",
        description: "Fresh plantains, perfect for cooking or grilling.",
        price: 15000,
        quantity: "5 plantain bunches",
        category: "Fruits",
        seller: "Tropical Harvest",
        image: "/images/plantain-product.jpg",
        stock: "in-stock"
      },
      {
        id: "7",
        name: "Plantain",
        description: "Fresh plantains, perfect for cooking or grilling.",
        price: 15000,
        quantity: "5 plantain bunches",
        category: "",
        seller: "Tropical Harvest",
        image: "/images/plantain-product.jpg",
        stock: "out-of-stock"
      }
  ]
  
  