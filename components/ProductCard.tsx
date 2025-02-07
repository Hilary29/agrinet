import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, FileSearch } from "lucide-react";
//pour le backend
import { useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { enUS } from "date-fns/locale";
import { Package2, Clock, Weight, Euro } from "lucide-react";
import axios from "axios"; // Import axios

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import TraceabilityDialog from "@/components/TraceabilityDialog";

interface Media {
  id: string;
  targetId: string;
  name: string;
  realName: string;
  size: number;
  fileType: string;
  primary: boolean;
}

interface Product {
  id: string;
  marchandId: string | null;
  variationId: string | null;
  name: string;
  longDescription: string;
  shortDescription: string;
  categorieId: string;
  saleUnit: string;
  basePrice: number;
  weight: number;
  defaultCurrency: string | null;
  nextAvailableTime: string | null;
  lifespan: number;
  quantity: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
  medias: Media[];
}

//block a enlever
interface ProductCardProps extends Product {
  onAddToCart: (id: string) => void;
  href?: string; // Ajout d'une prop optionnelle pour le lien
}

const traceabilityData = {
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

export function ProductCard({
  id,
  marchandId,
  variationId,
  name,
  longDescription,
  shortDescription,
  categorieId,
  basePrice,
  saleUnit,
  weight,
  defaultCurrency,
  nextAvailableTime,
  lifespan,
  quantity,
  status,
  createdAt,
  updatedAt,
  expiresAt,
  medias,
  onAddToCart,
  href = `/products/${id}`, // Valeur par défaut si href n'est pas fourni
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

  //pour le backend
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:4000/api/v1/product_post"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      {products.map((product) => {
        const primaryImage =
          product.medias.find((media) => media.primary) || product.medias[0];
        const timeUntilExpiry = formatDistance(
          new Date(product.expiresAt),
          new Date(),
          {
            addSuffix: true,
            locale: enUS,
          }
        );

        return (
          <Card
            key={product.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square relative">
              {primaryImage ? (
                <img
                  src={`http://localhost:4000/api/v1/media?targetId=${primaryImage.targetId}`}
                  alt={product.name}
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <Package2 className="w-12 h-12 text-muted-foreground" />
                </div>
              )}
              <Badge
                variant={
                  product.status === "AVAILABLE" ? "default" : "secondary"
                }
                className="absolute top-2 right-2"
              >
                {product.status === "AVAILABLE"
                  ? "available"
                  : "Non-available"}
              </Badge>
            </div>
            <Link href={href}>
            <CardContent className="p-4">
              <div className="flex flex-row justify-between">
              <h2 className="font-semibold text-lg mb-2 line-clamp-1">
                {product.name}
              </h2>
              <Button
              onClick={handleAddToCart}
              disabled={isAdding || stock !== "in-stock"}
              className="bg-accent-700 p-2.5  sm:p-4"
            >
              {isAdding ? "Adding..." : ""}
              <ShoppingCart className="text-white-50" />
            </Button>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {product.shortDescription}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
{/*                   <Weight className="w-4 h-4" />
                  <span>
                    {product.weight} {product.saleUnit}
                  </span> */}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Expire {timeUntilExpiry}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between">
              <div className="flex items-center gap-2 text-accent-700">
                <p>FCFA</p>
                <span className="font-semibold">
                  {product.basePrice.toFixed(2)}
                </span>
              </div>
              <Badge variant="outline">Stock: {product.quantity}</Badge>
            </CardFooter>
            </Link>
            <TraceabilityDialog
          showTraceability={showTraceability}
          setShowTraceability={setShowTraceability}
          traceabilityData={traceabilityData}
        />
          </Card>
        );
      })}

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
          href={href}
          className="flex flex-col items-start gap-1 w-full px-2"
        >
          <div className="flex items-start justify-between w-full ">
            <p className="text-[#1E1E1E] my-auto font-semibold font-inter text-paragraph-lg">
              {name}
            </p>
            <Button
              onClick={handleAddToCart}
              disabled={isAdding || stock !== "in-stock"}
              className="bg-accent-700 p-2.5  sm:p-4"
            >
              {isAdding ? "Adding..." : ""}
              <ShoppingCart className="text-white-50" />
            </Button>
          </div>
          <p className="text-black-400 text-base line-clamp-2">{description}</p>
          {quantity && <p className="text-black-400 text-sm">{quantity}</p>}
          <p className="text-accent-700 font-bold mt-2">
            {price.toLocaleString()} FCFA
          </p>
        </Link>

        {/* Composant de traçabilité */}
        <TraceabilityDialog
          showTraceability={showTraceability}
          setShowTraceability={setShowTraceability}
          traceabilityData={traceabilityData}
        />
      </div>
    </>
  );
}
