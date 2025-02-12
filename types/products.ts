// Interface pour les données brutes de l'API
export interface ApiProduct {
  id: string
  marchandId: string | null
  variationId: string | null
  categorieId: string
  name: string
  longDescription: string
  shortDescription: string
  lifespan: number
  quantity: number
  saleUnit: string
  basePrice: number
  weight: number
  defaultCurrency: string | null
  nextAvailableTime: string | null
  status: "AVAILABLE" | "UNAVAILABLE"
  expiresAt: number[]
  createAt: string | null
  updateAt: string | null
}

// Interface Product modifiée
export interface Product {
  id: string
  name: string
  description: string
  price: number
  quantity: string
  category: string
  seller: string
  SalePoints: string[]
  images: string[]
  stock: "in-stock" | "out-of-stock"
  composition?: string
  storageInstructions?: string
  origin?: string
  sizeOptions?: string[]
  colorOptions?: string[]
  ratings?: number
  reviewCount?: number
  shippingDetails?: string
  tags?: string[]
}

// Fonction pour transformer les données de l'API en format Product
export function mapApiProductToProduct(apiProduct: ApiProduct): Product {
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    description: apiProduct.longDescription || apiProduct.shortDescription,
    price: apiProduct.basePrice,
    quantity: `${apiProduct.quantity} ${apiProduct.saleUnit}`,
    category: apiProduct.categorieId,
    seller: apiProduct.marchandId || "Unknown",
    SalePoints: [],
    images: [],
    stock: apiProduct.status === "AVAILABLE" ? "in-stock" : "out-of-stock",
    storageInstructions: `Durée de conservation: ${apiProduct.lifespan} jours`,
    tags: [apiProduct.saleUnit, `${apiProduct.weight}kg`],
  }
}

// Fonction pour récupérer les produits depuis l'API
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("http://localhost:4010/api/product_post-client")
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const apiProducts: ApiProduct[] = await response.json()
    return apiProducts.map(mapApiProductToProduct)
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

// Fonction pour récupérer un produit spécifique par son ID
export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`http://localhost:4010/api/product_post-client/${id}`)
    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error("Network response was not ok")
    }
    const apiProduct: ApiProduct = await response.json()
    return mapApiProductToProduct(apiProduct)
  } catch (error) {
    console.error("Error fetching product:", error)
    throw error
  }
}

