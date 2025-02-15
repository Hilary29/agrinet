import { ressourcesRoutes } from "@/config/routes"
import type { Product } from "../../../types/products-post"

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(ressourcesRoutes.ressourcesProductPostClient, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data as Product[]
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

