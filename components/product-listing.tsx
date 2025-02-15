"use client"

import { useEffect, useState } from "react"
import { ProductCard2 } from "@/components/ProductCard2"
import type { ProductPostResponse } from "@/types/products-post"

export default function ProductListing() {
  const [products, setProducts] = useState<ProductPostResponse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4010/api/product_post-client")
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        setError("Failed to load products")
        console.error("Error fetching products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleAddToCart = (productId: string) => {
    // Implement cart functionality here
    console.log(`Adding product ${productId} to cart`)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-700"></div>
      </div>
    )
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-[200px] text-red-500">{error}</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-4">
      {products.map((product) => (
        <ProductCard2
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.shortDescription}
              price={product.basePrice}
              quantity={product.quantity}
              category={product.categorieId}
              stock={product.status === "AVAILABLE" ? "in-stock" : "out-of-stock"}
              images={[`/placeholder.svg?height=209&width=358`]}
              onAddToCart={handleAddToCart} 
              seller={""} 
              SalePoints={[]}        />
      ))}
    </div>
  )
}

