import Image from "next/image"
import { products } from "@/public/data/products"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Heart, CreditCard, DollarSign, MapPin, Truck, Package, Clock } from 'lucide-react'
import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="bg-white-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 pt-24 ">
        <Link href="/marketplace" className="inline-block mb-8 font-inter font-medium">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to MarketPlace
          </Button>
        </Link>
        <div className="pb-16">
  <Tabs defaultValue="product" className="w-full">
    <TabsList className="grid w-full grid-cols-5 font-inter text-paragraph-lg">
      <TabsTrigger value="product">Product</TabsTrigger>
      <TabsTrigger value="price-details">Price details</TabsTrigger>
      <TabsTrigger value="delivery">Delivery</TabsTrigger>
      <TabsTrigger value="point-of-sale">Point of Sale</TabsTrigger>
      <TabsTrigger value="payment">Payment</TabsTrigger>
    </TabsList>

    <TabsContent value="product">
      <div className="grid md:grid-cols-2 gap-8">

            {/* Image Section */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <Badge 
                variant={product.stock === "in-stock" ? "default" : "secondary"}
                className="absolute top-4 right-4"
              >
                {product.stock === "in-stock" ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>
  
            {/* Product Info */}
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h1 className="text-3xl font-bold text-[#1E1E1E]">{product.name}</h1>
                  <Button variant="outline" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
                <Badge variant="outline">{product.category}</Badge>
              </div>
  
              <div className="space-y-4">
                <p className="text-xl font-bold text-accent-700">
                  {product.price.toLocaleString()} FCFA
                </p>
                {product.quantity && (
                  <p className="text-black-400">{product.quantity}</p>
                )}
              </div>
  
              <div className="space-y-2">
                <h2 className="font-semibold text-lg">Description</h2>
                <p className="text-black-400 leading-relaxed">
                  {product.description}
                </p>
              </div>
  
              <div className="space-y-2">
                <h2 className="font-semibold text-lg">Seller</h2>
                <p className="text-black-400">{product.seller}</p>
              </div>
  
              <div className="flex flex-col gap-3 mt-4">
                <Button 
                  size="lg" 
                  className="w-full"
                  disabled={product.stock !== "in-stock"}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Contact Seller
                </Button>
              </div>
            </div>
          </div>
      </TabsContent>

    {/* Price Details Tab */}
    <TabsContent value="price-details">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Price Breakdown
                </CardTitle>
                <CardDescription>
                  Detailed breakdown of the product price and associated costs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Base Price</span>
                    <span className="font-semibold">{product.price.toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Service Fee (2%)</span>
                    <span className="font-semibold">{(product.price * 0.02).toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className="font-semibold">1,500 FCFA</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="font-semibold">Total Price</span>
                    <span className="font-bold text-lg text-accent-700">
                      {(product.price * 1.02 + 1500).toLocaleString()} FCFA
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

    {/* Delivery Tab */}
    <TabsContent value="delivery">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Delivery Information
                </CardTitle>
                <CardDescription>
                  Estimated delivery times and shipping options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <Package className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Standard Delivery</h3>
                      <p className="text-muted-foreground">
                        Delivery within 2-4 business days to your specified address
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Delivery Schedule</h3>
                      <p className="text-muted-foreground">
                        Monday to Saturday, 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Delivery Areas</h3>
                      <p className="text-muted-foreground">
                        Available in major cities and surrounding areas. Enter your location to check availability.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="point-of-sale">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Point of Sale Location
                </CardTitle>
                <CardDescription>
                  Physical location where you can inspect and purchase the product
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Market Location</h3>
                    <p className="text-muted-foreground">
                      {product.seller} - Central Market
                    </p>
                    <p className="text-muted-foreground">
                      Stand B12, Agricultural Products Section
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Opening Hours</h3>
                    <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                      <span>Monday - Friday:</span>
                      <span>7:00 AM - 6:00 PM</span>
                      <span>Saturday:</span>
                      <span>7:00 AM - 4:00 PM</span>
                      <span>Sunday:</span>
                      <span>8:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Contact Information</h3>
                    <p className="text-muted-foreground">
                      Tel: +237 6XX XXX XXX
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Payment Options
                </CardTitle>
                <CardDescription>
                  Available payment methods and transaction information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Accepted Payment Methods</h3>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Mobile Money</p>
                          <p className="text-sm text-muted-foreground">MTN, Orange, or other mobile money services</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <DollarSign className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Cash on Delivery</p>
                          <p className="text-sm text-muted-foreground">Pay when you receive your products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Transaction Security</h3>
                    <p className="text-muted-foreground">
                      All transactions are secured and processed through our trusted payment partners
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

  </Tabs>
</div>





      </div>
      <Footer />
    </main>
  )
}

