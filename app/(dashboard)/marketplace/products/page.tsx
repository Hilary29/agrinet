"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductDetailsTab } from "@/components/ProductDetailsTab";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
<<<<<<< HEAD
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";
const ProductPage = () => {

  const [product, setProduct] = useState<any>(null);
=======

interface product {
  name: string
  images: string[]
  stock: 'in-stock' | 'out-of-stock'
  category: string
  price: number
  quantity?: number
  description: string
  seller: string
  SalePoints: string[]
}

const ProductPage = () => {
  
  const [product, setProduct] = useState<product | null>(null);
>>>>>>> 0956d8c440d208d6a31bc29174e7cc90d27f8924

  useEffect(() => {
    const productData = localStorage.getItem("product");
    if (productData) {
      setProduct(JSON.parse(productData)); // Analyser les données en tant qu'objet
    }
  }, []);

  if (!product) {
    return <div>Loading...</div>; // Affiche un message ou un loader pendant le chargement
  }

  return (
    <main className="bg-white-50">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/marketplace/all-products"
          className="inline-block mb-8 font-inter font-medium"
        >
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to MarketPlace
          </Button>
        </Link>
        <div className="container mx-auto px-4">
          <ProductDetailsTab product={product} />
        </div>
      </div>
    </main>
  );

};

export default ProductPage;