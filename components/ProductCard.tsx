import Link from "next/link";
import Image from "next/image";
import { Product } from "@/public/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps extends Product {
  onAddToCart: (productId: string) => void;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  quantity,
  category,
  stock,
  image,
  onAddToCart,
}: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    setIsAdding(true);
    onAddToCart(id);
    setTimeout(() => setIsAdding(false), 1000); // Reset after 1 second
  };

  return (
    <Link
      className="group flex flex-col items-center justify-end p-2 gap-4 max-w-80 bg-white-50 shadow-6dp-v2 rounded-lg transition-all hover:shadow-lg"
      href={`/products/${id}`}
    >
      <div className="relative w-full max-h-44 overflow-hidden rounded-md">
        <Image
          src={image}
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
      <div className="flex flex-col items-start gap-1 w-full px-2">
        <div className="flex items-start justify-between w-full ">
          <h3 className="text-[#1E1E1E] my-auto font-semibold font-inter text-paragraph-lg">
            {name}
          </h3>
          <Button
            onClick={handleAddToCart}
            disabled={isAdding || stock !== "in-stock"}
            className=" bg-accent-700"
          >
            {isAdding ? "Adding..." : ""}
            <ShoppingCart className=" h-4 w-4" />
          </Button>
        </div>
        <p className="text-black-400 text-base line-clamp-2">{description}</p>
        {quantity && <p className="text-black-400 text-sm">{quantity}</p>}
        <p className="text-accent-700 font-bold mt-2">
          {price.toLocaleString()} FCFA
        </p>

      </div>
    </Link>
  );
}
