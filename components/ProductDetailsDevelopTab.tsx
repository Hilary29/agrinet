import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ImageCaroussel from './ImageCaroussel'
import { FaHeart, FaThumbsUp, FaThumbsDown, FaMoneyBill, FaTruck, FaMapPin, FaCreditCard } from "react-icons/fa"
import { MessageSquare, Package, Clock, MapPin, CreditCard, DollarSign, ShoppingCart } from "lucide-react"

interface ProductDetailsDevelopProps {
  product: {
    name: string
    images: string[]
    stock: "in-stock" | "out-of-stock"
    category: string
    price: number
    quantity?: string
    description: string
    seller: string
    SalePoints: string[]
  }
}

export function ProductDetailsDevelopTab({ product }: ProductDetailsDevelopProps) {
  return (
    <div className="py-16">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5 font-inter text-paragraph-lg">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="price-details">Price details</TabsTrigger>
          <TabsTrigger value="selling-points">Selling Points</TabsTrigger>
          <TabsTrigger value="delivery-options">Delivery Options</TabsTrigger>
          <TabsTrigger value="payment-options">Payment options</TabsTrigger>
        </TabsList>

        <TabContent product={product} />
      </Tabs>
    </div>
  )
}

function TabContent({ product }: ProductDetailsDevelopProps) {
  return (
    <>
      <GeneralTab product={product} />
      <PriceDetailsTab product={product} />
      <SellingPointsTab product={product} />
      <DeliveryOptionsTab product={product} />
      <PaymentOptionsTab product={product} />
    </>
  )
}

function GeneralTab({ product }: ProductDetailsDevelopProps) {
  return (
    <TabsContent value="general">
      <div className="grid md:grid-cols-2 gap-8 pt-4 ">
        <ImageSection product={product} />
        <ProductInfo product={product} />
      </div>
    </TabsContent>
  )
}

function PriceDetailsTab({ product }: ProductDetailsDevelopProps) {
  return (
    <TabsContent value="price-details">
      <div className="grid md:grid-cols-2 gap-8 pt-4">
        <ImageSection product={product} />
        <div className="flex flex-col gap-6">
          <ProductHeader product={product} />
          <PriceBreakdownCard product={product} />
        </div>
      </div>
    </TabsContent>
  )
}

function SellingPointsTab({ product }: ProductDetailsDevelopProps) {
  return (
    <TabsContent value="selling-points">
      <div className="grid md:grid-cols-2 gap-8 pt-4">
        <ImageSection product={product} />
        <div className="flex flex-col gap-6">
          <ProductHeader product={product} />
          <SellingPointsCard product={product} />
        </div>
      </div>
    </TabsContent>
  )
}

function DeliveryOptionsTab({ product }: ProductDetailsDevelopProps) {
  return (
    <TabsContent value="delivery-options">
      <div className="grid md:grid-cols-2 gap-8 pt-4">
        <ImageSection product={product} />
        <div className="flex flex-col gap-6">
          <ProductHeader product={product} />
          <DeliveryOptionsCard />
        </div>
      </div>
    </TabsContent>
  )
}

function PaymentOptionsTab({ product }: ProductDetailsDevelopProps) {
  return (
    <TabsContent value="payment-options">
      <div className="grid md:grid-cols-2 gap-8 pt-4">
        <ImageSection product={product} />
        <div className="flex flex-col gap-6">
          <ProductHeader product={product} />
          <PaymentOptionsCard />
        </div>
      </div>
    </TabsContent>
  )
}

function ImageSection({ product }: ProductDetailsDevelopProps) {
  return (
    <div className="relative rounded-md max-w-[500px] h-[300px]">
      <ImageCaroussel images={product.images} alt={product.name} />
      <Badge variant={product.stock === "in-stock" ? "default" : "secondary"} className="absolute top-4 right-4">
        {product.stock === "in-stock" ? "In Stock" : "Out of Stock"}
      </Badge>
    </div>
  )
}

function ProductHeader({ product }: ProductDetailsDevelopProps) {
  return (
    <div className="flex items-start justify-between">
      <p className="text-3xl font-semibold font-satoshi text-secondary-800">{product.name}</p>
      <div className="flex gap-2">
        <ActionButton icon={FaHeart} tooltip="Favorite" color="text-red-700" />
        <ActionButton icon={FaThumbsUp} tooltip="Like" color="text-black-200" />
        <ActionButton icon={FaThumbsDown} tooltip="Dislike" color="text-black-200" />
        <ActionButton icon={MessageSquare} tooltip="Comment" color="text-blue-900" />
      </div>
    </div>
  )
}

function ActionButton({ icon: Icon, tooltip, color }: { icon: React.ElementType; tooltip: string; color: string }) {
  return (
    <div className="relative group">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white-50 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {tooltip}
      </div>
      <Button className="bg-white-50 shadow-md hover:bg-white-100 transition duration-200" size="icon">
        <Icon className={`h-5 w-5 ${color}`} />
      </Button>
    </div>
  )
}

function ProductInfo({ product }: ProductDetailsDevelopProps) {
  return (
    <div className="flex flex-col gap-6">
      <ProductHeader product={product} />
      <div className="space-y-2">
        <Badge variant="outline">{product.category}</Badge>
      </div>
      <div className="space-y-4">
        <p className="text-xl font-bold text-accent-700">{product.price.toLocaleString()} FCFA</p>
        {product.quantity && <p className="text-black-400">{product.quantity}</p>}
      </div>
      <div className="space-y-2">
        <h2 className="font-semibold text-lg">Description</h2>
        <p className="text-black-400 leading-relaxed">{product.description}</p>
      </div>
      <div className="space-y-2">
        <h2 className="font-semibold text-lg">Seller</h2>
        <p className="text-black-400">{product.seller}</p>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <Button size="lg" className="w-full" disabled={product.stock !== "in-stock"}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button variant="outline" size="lg" className="w-full">
          Contact Seller
        </Button>
      </div>
    </div>
  )
}

function PriceBreakdownCard({ product }: ProductDetailsDevelopProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaMoneyBill className="text-secondary-400" />
          Price Breakdown
        </CardTitle>
        <CardDescription>Detailed breakdown of the product price and associated costs</CardDescription>
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
  )
}

function SellingPointsCard({ product }: ProductDetailsDevelopProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaMapPin className="text-accent-700" />
          Key Selling Points
        </CardTitle>
        <CardDescription>Unique features and benefits of the product</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          {product.SalePoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-accent-100 rounded-full p-2">
                <Package className="h-5 w-5 text-accent-700" />
              </div>
              <p className="text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function DeliveryOptionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaTruck className="text-amber-900" />
          Delivery Options
        </CardTitle>
        <CardDescription>Available delivery methods and estimated times</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6">
          <div className="flex items-start gap-4">
            <Package className="h-5 w-5 text-muted-foreground mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Standard Delivery</h3>
              <p className="text-muted-foreground">Delivery within 2-4 business days to your specified address</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaTruck className="h-5 w-5 text-muted-foreground mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Express Delivery</h3>
              <p className="text-muted-foreground">Delivery within 1-2 business days to your specified address</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Pick-up at Store</h3>
              <p className="text-muted-foreground">Collect your order at our designated pick-up locations</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function PaymentOptionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaCreditCard className="text-yellow-600" />
          Payment Options
        </CardTitle>
        <CardDescription>Available payment methods and transaction information</CardDescription>
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
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Credit/Debit Card</p>
                  <p className="text-sm text-muted-foreground">Visa, MasterCard, and other major cards accepted</p>
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
  )
}

