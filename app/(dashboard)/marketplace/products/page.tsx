"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductDetailsTab } from "@/components/ProductDetailsTab";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";
const ProductPage = () => {

  const [product, setProduct] = useState<any>(null);

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