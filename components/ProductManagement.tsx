"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Product = {
  id: string
  name: string
  stock: number
  price: number
}

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: "1", name: "Product A", stock: 50, price: 19.99 },
    { id: "2", name: "Product B", stock: 30, price: 29.99 },
  ])
  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({ name: "", stock: 0, price: 0 })

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: Date.now().toString() }])
    setNewProduct({ name: "", stock: 0, price: 0 })
  }

  return (
    <Card className="w-full my-2 hover:shadow-xl transition-shadow duration-300 ">
      <CardHeader>
        <CardTitle className="text-paragraph-lg font-semibold font-satoshi">Product Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex justify-between items-center">
              <span>{product.name}</span>
              <span>Stock: {product.stock}</span>
              <span>FCFA {product.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

      </CardContent>
    </Card>
  )
}

export default ProductManagement

