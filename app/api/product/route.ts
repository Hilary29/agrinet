import type { Product } from "../../../types/products-post"

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch("http://localhost:4010/api/product_post-client", {
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

