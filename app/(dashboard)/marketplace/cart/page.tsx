"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { type Product, products } from "@/public/data/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import Link from "next/link"
import router from "next/router"
import IntroText from "@/components/IntroText"

interface CartItem extends Product {
  quantity: number
}

// Données de test pour le panier
const testCartItems: CartItem[] = [
  { ...products[0], quantity: 2 }, 
  { ...products[2], quantity: 1 }, 
  { ...products[3], quantity: 3 }, 
  { ...products[6], quantity: 1 }, 
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // Charger les données de test
    setCartItems(testCartItems)
  }, [])

  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setTotal(newTotal)
  }, [cartItems])

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item)),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "XAF" }).format(price)
  }

  return (
    <div className="max-w-4xl">
      <IntroText title="Cart" description="Track and maintain all the products selected"/>
      {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
              <ShoppingBag className="h-20 w-20 text-muted-foreground" />
              <h1 className="text-paragraph-lg font-inter font-medium">Your cart is empty</h1>
              <Link href="/marketplace/all-products" className="bg-primary-600 hover:bg-primary-700 text-white-50 font-semibold font-inter text-paragraph-md rounded-md py-2.5 px-4 sm:text-lg transition duration-300 ">Continue Shopping</Link>
            </div>
      ) : (
        <>
          <div className="space-y-4  pt-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                <Image
                  src={item.images[0] || "/placeholder.svg"}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
                <div className="flex-grow">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="font-medium">{formatPrice(item.price)}</p>
                  <p className="text-sm text-gray-500">Vendeur: {item.seller}</p>
                  <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                    className="w-16 text-center"
                    min="1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    disabled={item.stock === "out-of-stock"}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">Total: {formatPrice(total)}</p>
              <p className="text-sm text-gray-500">
                Nombre d&apos;articles: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </p>
            </div>
            <Button size="lg" >
                <Link href="/marketplace/checkout">Go to Payment</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

