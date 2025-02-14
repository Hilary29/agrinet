import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/products-post";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, FileSearch } from "lucide-react";
import { useState } from "react";
import TraceabilityDialog2 from "@/components/TraceabilityDialog2";


interface ProductCardProps extends Product {
  onAddToCart: (productId: string) => void;
}

const traceabilityData2 = {
  productId: "TMT-2025-001",
  name: "Tomate Bio",
  category: "Légumes",
  origin: "Ferme AgroTech - Cameroun",
  harvestDate: "2025-01-10",
  producer: {
    name: "Ferme AgroTech",
    location: "Yaoundé, Cameroun",
    farmingMethod: "Agriculture Biologique",
    certification: "AB (Agriculture Biologique)",
  },
  processing: {
    packagingCenter: "Centre d'emballage BioYa",
    packagingDate: "2025-01-12",
    storageTemperature: "4°C",
  },
  logistics: {
    transporter: "Green Logistics",
    batchNumber: "GL-2025-TMT-987",
    warehouse: "Entrepôt Yaoundé Nord",
  },
  sale: {
    buyerId: "CLT-4589",
    purchaseDate: "2025-01-15",
    deliveryMode: "Livraison à domicile",
    customerReview: "Produit frais et délicieux ! ⭐⭐⭐⭐⭐",
  },
};

export function ProductCard2({
  id,
  name,
  description,
  price,
  quantity,
  category,
  stock,
  images,
  onAddToCart,
}: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [showTraceability, setShowTraceability] = useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsAdding(true);
    onAddToCart(id);
    setTimeout(() => setIsAdding(false), 1000);
  };

  const handleTraceabilityClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    setShowTraceability(true);
  };

  return (
    <div className="group relative flex flex-col items-center justify-end p-2 gap-4 max-w-80 bg-white-50 shadow-6dp-v2 rounded-lg transition-all hover:shadow-lg z-0">
      <div className="relative w-full max-h-44 overflow-hidden rounded-md">
        <Image
          src={images[0] || "/placeholder.svg"}
          alt={name}
          width={358}
          height={209}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <Badge
          variant={stock === "in-stock" ? "default" : "secondary"}
          className="absolute top-2 right-2"
        >
          {stock === "in-stock" ? `In Stock : ${quantity}` : "Out of Stock"}
        </Badge>
      </div>
      <Link
        href={`/products/${id}`}
        className="flex flex-col items-start gap-1 w-full px-2"
      >
        <div className="flex items-start justify-between w-full ">
          <p className="text-[#1E1E1E] my-auto font-semibold font-inter text-paragraph-lg">
            {name}
          </p>
          <Button
            onClick={handleAddToCart}
            disabled={isAdding || stock !== "in-stock"}
            className="bg-accent-700 p-2  sm:p-4"
          >
            {isAdding ? "Adding..." : ""}
            <ShoppingCart className="text-white-50" />
          </Button>
        </div>
        <p className="text-black-400 text-base line-clamp-2">{description}</p>
{/*         {quantity && <p className="text-black-400 text-sm">{quantity}</p>} */}
        <p className="text-accent-700 font-semibold mt-2">
          {price.toLocaleString()} FCFA
        </p>
      </Link>


      {/* Composant de traçabilité */}
      <TraceabilityDialog2
        showTraceability={showTraceability}
        setShowTraceability={setShowTraceability}
        traceabilityData2={traceabilityData2}
      />
    </div>
   
  );
}