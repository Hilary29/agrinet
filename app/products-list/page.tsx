"use client"

import { useEffect, useState } from "react"
import { formatDistance } from "date-fns"
import { enUS } from "date-fns/locale"
import { Package2, Clock, Plus, Minus } from "lucide-react"
import axios from "axios"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Media {
  id: string
  targetId: string
  name: string
  realName: string
  size: number
  fileType: string
  primary: boolean
}

interface Product {
  id: string
  marchandId: string | null
  variationId: string | null
  name: string
  longDescription: string
  shortDescription: string
  categorieId: string
  saleUnit: string
  basePrice: number
  weight: number
  defaultCurrency: string | null
  nextAvailableTime: string | null
  lifespan: number
  quantity: number
  status: string
  createdAt: string
  updatedAt: string
  expiresAt: string
  medias: Media[]
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:4000/api/v1/product_post")
        setProducts(response.data)
        const initialQuantities = response.data.reduce(
          (acc, product) => {
            acc[product.id] = 0
            return acc
          },
          {} as { [key: string]: number },
        )
        setQuantities(initialQuantities)
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const updateQuantity = (productId: string, change: number) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(
        0,
        Math.min(prev[productId] + change, products.find((p) => p.id === productId)?.quantity || 0),
      )
      return { ...prev, [productId]: newQuantity }
    })
  }

  const addToCart = async (product: Product) => {
    const quantity = quantities[product.id]
    if (quantity === 0) return

    try {
      const response = await axios.post("/api/cart", {
        productId: product.id,
        quantity: quantity,
        unitPrice: product.basePrice,
      })

      if (response.status === 200) {
        console.log(`${quantity} ${product.name}(s) ont été ajoutés à votre panier.`)
        setQuantities((prev) => ({ ...prev, [product.id]: 0 }))
        // Vous pouvez ajouter ici une logique pour mettre à jour l'interface utilisateur
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout au panier:", error)
      // Vous pouvez ajouter ici une logique pour afficher une erreur à l'utilisateur
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => {
          const primaryImage = product.medias.find((media) => media.primary) || product.medias[0]
          const timeUntilExpiry = formatDistance(new Date(product.expiresAt), new Date(), {
            addSuffix: true,
            locale: enUS,
          }) 
          if (product.medias.length>0) {
            return (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  {primaryImage ? (
                    <img
                      src={`http://localhost:4000/api/v1/media/download/${primaryImage.realName}/${primaryImage.name}`}
                      alt={product.name}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Package2 className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
                  <Badge
                    variant={product.status === "AVAILABLE" ? "default" : "secondary"}
                    className="absolute top-2 right-2"
                  >
                    {product.status === "AVAILABLE" ? "Disponible" : "Non disponible"}
                  </Badge>
                </div>
                <div>
                  <CardContent className="p-4">
                    <div className="flex flex-row justify-between items-center">
                      <p className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</p>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => updateQuantity(product.id, -1)}
                          disabled={quantities[product.id] === 0 || product.status !== "AVAILABLE"}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span>{quantities[product.id]}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => updateQuantity(product.id, 1)}
                          disabled={quantities[product.id] === product.quantity || product.status !== "AVAILABLE"}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
  
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Expire {timeUntilExpiry}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-accent-700">
                      <p>FCFA</p>
                      <span className="font-semibold">{product.basePrice.toFixed(2)}</span>
                    </div>
                    <Button
                      variant="default"
                      onClick={() => addToCart(product)}
                      disabled={quantities[product.id] === 0 || product.status !== "AVAILABLE"}
                    >
                      Ajouter au panier
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            )
          }
        })}
      </div>
    </div>
  )
}

