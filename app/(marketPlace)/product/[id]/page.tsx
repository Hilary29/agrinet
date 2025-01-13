import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ProductPost } from '@/types/marketplace'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

async function getProduct(id: string): Promise<ProductPost | null> {
  // Here you would fetch the product from your API
  return null
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={product.images[0] || '/placeholder.svg'}
              alt={product.description}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.slice(1).map((image, i) => (
              <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Product image ${i + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.description}</h1>
            <p className="text-muted-foreground">Product ID: {product.productId}</p>
          </div>

          <Tabs defaultValue="retail">
            <TabsList>
              {product.sale_prices.map((price) => (
                <TabsTrigger key={price.sale_price_id} value={price.salePriceType.toLowerCase()}>
                  {price.salePriceType}
                </TabsTrigger>
              ))}
            </TabsList>
            {product.sale_prices.map((price) => (
              <TabsContent key={price.sale_price_id} value={price.salePriceType.toLowerCase()}>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-2xl font-bold">
                          {price.value} {price.currency}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Min qty: {price.minQuantity} - Max qty: {price.maxQuantity}
                        </p>
                      </div>
                      <Button>Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Delivery Options</h3>
            <div className="grid gap-4">
              {product.delivery_prices.map((delivery) => (
                <Card key={delivery.delivery_option_id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{delivery.delivery_option}</p>
                        <p className="text-sm text-muted-foreground">
                          {delivery.delivery_cost} {delivery.currency}
                        </p>
                      </div>
                      <p className="text-sm">
                        {delivery.is_negociable ? 'Price negotiable' : 'Fixed price'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

