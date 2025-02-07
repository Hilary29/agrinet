"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { type Product, products } from "@/public/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import router from "next/router";
import IntroText from "@/components/IntroText";
import Cart from "@/components/Cart";

interface CartItem extends Product {
  quantity: number;
}

// Données de test pour le panier
const testCartItems: CartItem[] = [
  { ...products[0], quantity: 2 },
  { ...products[2], quantity: 1 },
  { ...products[3], quantity: 3 },
  { ...products[6], quantity: 1 },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Charger les données de test
    setCartItems(testCartItems);
  }, []);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "XAF",
    }).format(price);
  };

  return (
    <div className="max-w-4xl">
      <IntroText
        title="Cart"
        description="Track and maintain all the products selected"
      />
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <ShoppingBag className="h-20 w-20 text-muted-foreground" />
          <h1 className="text-paragraph-lg font-inter font-medium">
            Your cart is empty
          </h1>
          <Link
            href="/marketplace/all-products"
            className="bg-primary-600 hover:bg-primary-700 text-white-50 font-semibold font-inter text-paragraph-md rounded-md py-2.5 px-4 sm:text-lg transition duration-300 "
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <Cart />
        </>
      )}
    </div>
  );
}
