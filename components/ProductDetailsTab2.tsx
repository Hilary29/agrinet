import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ImageCaroussel from './ImageCaroussel'
import { FaHeart, FaThumbsUp, FaThumbsDown, FaMoneyBill, FaTruck, FaMapPin, FaCreditCard } from 'react-icons/fa'
import { MessageSquare, Package, Clock, MapPin, CreditCard, DollarSign } from 'lucide-react'
import { ProductDetailsDevelopTab } from './ProductDetailsDevelopTab'
import ProductRecommendations from './ProductRecommandations'

interface ProductDetailsProps {
  product: {
    name: string
    images: string[]
    stock: 'in-stock' | 'out-of-stock'
    category: string
    price: number
    quantity?: string
    description: string
    seller: string
    SalePoints: string[]
  }
}

export function ProductDetailsTab2({ product }: ProductDetailsProps) {
  return (
    <div className="pb-16">
      <Tabs defaultValue="product" className="w-full">
        <TabsList className="grid w-full grid-cols-5 ">
          <TabsTrigger value="product" className='font-inter font-semibold text-paragraph-lg text-black-400'>Product</TabsTrigger>
          <TabsTrigger value="price-details" className='font-inter font-semibold text-paragraph-lg text-black-400'>Price details</TabsTrigger>
          <TabsTrigger value="delivery" className='font-inter font-semibold text-paragraph-lg text-black-400'>Delivery</TabsTrigger>
          <TabsTrigger value="point-of-sale" className='font-inter font-semibold text-paragraph-lg text-black-400'>Point of Sale</TabsTrigger>
          <TabsTrigger value="payment" className='font-inter font-semibold text-paragraph-lg text-black-400'>Payment</TabsTrigger>
        </TabsList>
        <TabContent product={product} />
      </Tabs>
    </div>
  )
}

function TabContent({ product }: ProductDetailsProps) {
  return (
    <>
      <ProductTab product={product} />
      <PriceDetailsTab product={product} />
      <DeliveryTab product={product} />
      <PointOfSaleTab product={product} />
      <PaymentTab product={product} />
    </>
  )
}

function ProductTab({ product }: ProductDetailsProps) {
  return (
    <TabsContent value="product" className='pb-16'>
      <div className="grid md:grid-cols-2 gap-8 pt-4 ">
        <ImageSection product={product} />
        <ProductInfo product={product} />
      </div>
      <ProductRecommendations />


    </TabsContent>
  )
}

function PriceDetailsTab({ product }: ProductDetailsProps) {
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

function DeliveryTab({ product }: ProductDetailsProps) {
  return (
    <TabsContent value="delivery">
      <div className="grid md:grid-cols-2 gap-8 pt-4">
        <ImageSection product={product} />
        <div className="flex flex-col gap-6">
          <ProductHeader product={product} />
          <DeliveryInfoCard />
        </div>
      </div>
    </TabsContent>
  )
}

function PointOfSaleTab({ product }: ProductDetailsProps) {
  return (
    <TabsContent value="point-of-sale">
      <div className="grid md:grid-cols-2 gap-8 pt-4">
        <ImageSection product={product} />
        <div className="flex flex-col gap-6">
          <ProductHeader product={product} />
          <PointOfSaleCard product={product} />
        </div>
      </div>
    </TabsContent>
  )
}

function PaymentTab({ product }: ProductDetailsProps) {
  return (
    <TabsContent value="payment">
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

function ImageSection({ product }: ProductDetailsProps) {
  return (
    <div className="relative rounded-md max-w-[500px] h-[300px]">
      <ImageCaroussel images={product.images} alt={product.name} />
      <Badge
        variant={product.stock === "in-stock" ? "default" : "secondary"}
        className="absolute top-4 right-4"
      >
        {product.stock === "in-stock" ? "In Stock" : "Out of Stock"}
      </Badge>
    </div>
  )
}

function ProductHeader({ product }: ProductDetailsProps) {
  return (
    <div className="flex items-start justify-between">
      <p className="text-3xl font-semibold font-satoshi text-secondary-800">
        {product.name}
      </p>
      <div className="flex gap-2">
        <ActionButton icon={FaHeart} tooltip="Favorite" color="text-red-700" />
        <ActionButton icon={FaThumbsUp} tooltip="Like" color="text-black-200" />
        <ActionButton icon={FaThumbsDown} tooltip="Dislike" color="text-black-200" />
        <ActionButton icon={MessageSquare} tooltip="Comment" color="text-blue-900" />
      </div>
    </div>
  )
}

function ActionButton({ icon: Icon, tooltip, color }: { icon: React.ElementType, tooltip: string, color: string }) {
  return (
    <div className="relative group">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white-50 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {tooltip}
      </div>
      <Button
        className="bg-white-50 shadow-md hover:bg-white-100 transition duration-200"
        size="icon"
      >
        <Icon className={`h-5 w-5 ${color}`} />
      </Button>
    </div>
  )
}

function ProductInfo({ product }: ProductDetailsProps) {
  return (
    <div className=''>
      <div className="flex flex-col gap-6">
        <ProductHeader product={product} />
        <div className="space-y-2">
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
            <Package className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            Contact Seller
          </Button>
        </div>
      </div>
    </div>

  )
}

function PriceBreakdownCard({ product }: ProductDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaMoneyBill className='text-secondary-400' />
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
            <span className="font-semibold">
              {product.price.toLocaleString()} FCFA
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">
              Service Fee (2%)
            </span>
            <span className="font-semibold">
              {(product.price * 0.02).toLocaleString()} FCFA
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">
              Delivery Fee
            </span>
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

function DeliveryInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaTruck className="text-amber-900" />
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
              <h3 className="font-semibold mb-1">
                Standard Delivery
              </h3>
              <p className="text-muted-foreground">
                Delivery within 2-4 business days to your specified
                address
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="h-5 w-5 text-muted-foreground mt-1" />
            <div>
              <h3 className="font-semibold mb-1">
                Delivery Schedule
              </h3>
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
                Available in major cities and surrounding areas. Enter
                your location to check availability.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function PointOfSaleCard({ product }: ProductDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaMapPin className="text-accent-700" />
          Point of Sale Location
        </CardTitle>
        <CardDescription>
          Physical location where you can inspect and purchase the
          product
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
        <CardDescription>
          Available payment methods and transaction information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold">
              Accepted Payment Methods
            </h3>
            <div className="grid gap-4">
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Mobile Money</p>
                  <p className="text-sm text-muted-foreground">
                    MTN, Orange, or other mobile money services
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Cash on Delivery</p>
                  <p className="text-sm text-muted-foreground">
                    Pay when you receive your products
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Transaction Security</h3>
            <p className="text-muted-foreground">
              All transactions are secured and processed through our
              trusted payment partners
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}