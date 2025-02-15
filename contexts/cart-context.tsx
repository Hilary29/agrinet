"use client"
import { createContext, useContext, useState, type ReactNode } from "react"

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  maxQuantity: number
}

type CartContextType = {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  toggleCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (newItem: CartItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === newItem.id)
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: Math.min(item.quantity + newItem.quantity, item.maxQuantity) }
            : item,
        )
      }
      return [...currentItems, newItem]
    })
    setIsOpen(true)
  }

  const removeItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.min(Math.max(0, quantity), item.maxQuantity) } : item,
      ),
    )
  }

  const toggleCart = () => setIsOpen(!isOpen)

  return (
    <CartContext.Provider value={{ items, isOpen, addItem, removeItem, updateQuantity, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

