import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/public/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, FileSearch } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductCardProps extends Product {
  onAddToCart: (productId: string) => void;
}

// Fictional traceability data
const traceabilityData = [
  { location: "Manufacture Plant, Dakar", date: "2023-05-15" },
  { location: "Distribution Center, Thiès", date: "2023-05-20" },
  { location: "Regional Warehouse, Saint-Louis", date: "2023-05-25" },
  { location: "Local Store, Dakar", date: "2023-05-30" },
];

export function ProductCard({
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
          {stock === "in-stock" ? "In Stock" : "Out of Stock"}
        </Badge>
      </div>
      <Link
        href={`/products/${id}`}
        className="flex flex-col items-start gap-1 w-full px-2"
      >
        <div className="flex items-start justify-between w-full ">
          <h3 className="text-[#1E1E1E] my-auto font-semibold font-inter text-paragraph-lg">
            {name}
          </h3>
          <Button
            onClick={handleAddToCart}
            disabled={isAdding || stock !== "in-stock"}
            className="bg-accent-700"
          >
            {isAdding ? "Adding..." : ""}
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-black-400 text-base line-clamp-2">{description}</p>
        {quantity && <p className="text-black-400 text-sm">{quantity}</p>}
        <p className="text-accent-700 font-bold mt-2">
          {price.toLocaleString()} FCFA
        </p>
      </Link>
      <Dialog open={showTraceability} onOpenChange={setShowTraceability}>
        <DialogTrigger asChild>
          <button
            className="absolute top-2 left-2 bg-violet-900 hover:bg-purple-950 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-50"
            onClick={handleTraceabilityClick}
          >
            <FileSearch className="h-4 w-4 text-white-50" />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-satoshi">Product Traceability</DialogTitle>
          </DialogHeader>
          <div className="mt-4 font-inter">
            <h4 className="font-semibold mb-2">Traceability History:</h4>
            <ul className="space-y-4">
              {traceabilityData.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.location}</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
