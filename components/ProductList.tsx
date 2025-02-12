"use client";

import { useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { enUS } from "date-fns/locale";
import {
  Package2,
  Clock,
  Plus,
  Minus,
  ShoppingCartIcon,
  FileSearch,
} from "lucide-react";
import axios from "axios";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TraceabilityDialog, { TraceData } from "./TraceabilityDialog";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ressourcesRoutes } from "@/config/routes";

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

const traceabilityData: TraceData[] = [
  {
    identification: "9",
    creationTimestamp: 1706558000,
    creator: "742d35Cc6634C0532925a3b844Bc454e4438f44e",
    creationLocation: "Paris",
    location: "Paris",
    owner: "742d35Cc6634C0532925a3b844Bc454e4438f44e",
    timestamp: 1706558000,
    data: "",
  },
  {
    identification: " 9",
    creationTimestamp: 1706558000,
    creator: "742d35Cc6634C0532925a3b844Bc454e4438f44e",
    creationLocation: "Paris",
    location: "London",
    owner: "742d35Cc6634C0532925a3b844Bc454e4438f44e",
    timestamp: 1706559000,
    data: "",
  },
  {
    identification: "9",
    creationTimestamp: 1706558000,
    creator: "742d35Cc6634C0532925a3b844Bc454e4438f44e",
    creationLocation: "Paris",
    location: "Accra",
    owner: "700000000000000000",
    timestamp: 1706559000,
    data: "",
  },
];

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [showTraceability, setShowTraceability] = useState(false);

  const router=useRouter()

  const [traceData, setTraceData] = useState<TraceData[]>([]);

  const handleTraceabilityClick = async(id: string) => {
    console.log(id);
    
    await axios.get(`http://192.168.1.169:8080/api/v2/resource/states/${id}`)
    .then((response) => {
      console.log(response.data);
      setTraceData(response.data);
    })
    .catch((error) => {
      console.error(error);
      
    })
    
    
    setShowTraceability(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          ressourcesRoutes.ressourcesProductPost
         // "http://localhost:4000/api/v1/product_post"
        );
        setProducts(response.data);
        const initialQuantities = response.data.reduce((acc, product) => {
          acc[product.id] = 0;
          return acc;
        }, {} as { [key: string]: number });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const updateQuantity = (productId: string, change: number) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(
        0,
        Math.min(
          prev[productId] + change,
          products.find((p) => p.id === productId)?.quantity || 0
        )
      );
      return { ...prev, [productId]: newQuantity };
    });
  };

  const addToCart = async (product: Product) => {
    const quantity = quantities[product.id];
    if (quantity === 0) return;

    try {
      const response = await axios.post("/api/cart", {
        productId: product.id,
        quantity: quantity,
        unitPrice: product.basePrice,
      });

      if (response.status === 200) {
        console.log(
          `${quantity} ${product.name}(s) ont été ajoutés à votre panier.`
        );
        setQuantities((prev) => ({ ...prev, [product.id]: 0 }));
        // Vous pouvez ajouter ici une logique pour mettre à jour l'interface utilisateur
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout au panier:", error);
      // Vous pouvez ajouter ici une logique pour afficher une erreur à l'utilisateur
    }
  };

  const handlePreview=(id:string)=>{
    //localStorage.setItem("product",JSON.stringify(products.find((p) => p.id === id)))
    //router.push("/marketplace/products")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto pb-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          if (product.medias.length > 0) {
            return (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full max-h-44 overflow-hidden cursor-pointer rounded-md">
                  {primaryImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                    src={`http://localhost:4000/api/v1/media/download/${primaryImage.realName}/${primaryImage.name}`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
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
                      ? "Disponible"
                      : "Non disponible"}
                  </Badge>
                  <button
                    className="absolute top-2 left-2 bg-violet-900 hover:bg-purple-950 p-2 rounded-full opacity-100 group-hover:opacity-100 transition-opacity z-50"
                    onClick={() => handleTraceabilityClick(product.id)}
                  >
                    <FileSearch className="h-4 w-4 text-white-50" />
                  </button>
                </div>
                <div>
                <CardContent className="p-4 cursor-pointer" onClick={()=>{handlePreview(product.id)}}>
                      <div className="flex flex-row justify-between items-center">
                        <p className="font-semibold text-lg mb-2 line-clamp-1">
                          {product.name}
                        </p>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(product.id, -1)}
                            disabled={
                              quantities[product.id] === 0 ||
                              product.status !== "AVAILABLE"
                            }
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span>{quantities[product.id]}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(product.id, 1)}
                            disabled={
                              quantities[product.id] === product.quantity ||
                              product.status !== "AVAILABLE"
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Expire in {product.lifespan} days</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 text-accent-700">
                        <p>FCFA</p>
                        <span className="font-semibold">
                          {product.basePrice.toFixed(2)}
                        </span>
                      </div>
                      <Button
                        className="bg-accent-600 hover:bg-accent-700"
                        onClick={() => addToCart(product)}
                        disabled={
                          quantities[product.id] === 0 ||
                          product.status !== "AVAILABLE"
                        }
                      >
                        <ShoppingCartIcon />
                      </Button>
                    </CardFooter>
                  {/* Composant de traçabilité */}
                  <TraceabilityDialog
                    showTraceability={showTraceability}
                    setShowTraceability={setShowTraceability}
                    traceabilityData={traceData}
                  />
                </div>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}
