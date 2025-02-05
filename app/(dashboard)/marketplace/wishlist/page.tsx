"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { type Product, products } from "@/public/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import IntroText from "@/components/IntroText";

// Données de test pour la wishlist
const testWishlistItems: Product[] = [
  products[0],
  products[2],
  products[4], 
  products[6], 
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    // Charger les données de test
    setWishlistItems(testWishlistItems);
  }, []);

  const removeFromWishlist = (id: string) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast({
      title: "Produit retiré",
      description: "Le produit a été retiré de votre liste de souhaits.",
    });
  };

  const addToCart = (product: Product) => {
    // Ici, vous ajouteriez la logique pour ajouter le produit au panier
    // Par exemple, en utilisant un contexte global ou en appelant une API
    console.log(`Ajout au panier : ${product.name}`);
    toast({
      title: "Produit ajouté au panier",
      description: `${product.name} a été ajouté à votre panier.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "XAF",
    }).format(price);
  };

  return (
    <div className="">
      {wishlistItems.length === 0 ? (
        <IntroText title="Wishlist" description="Your Wishlist is empty" />
      ) : (
        <div>
          <IntroText title="Wishlist" description="Your Wishlist products" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex flex-col"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={item.images[0] || "/placeholder.svg"}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h2 className="font-semibold text-lg mb-2">{item.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                <p className="font-medium mb-2">{formatPrice(item.price)}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Seller: {item.seller}
                </p>
                <div className="mt-auto flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addToCart(item)}
                    disabled={item.stock === "out-of-stock"}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to cart
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
