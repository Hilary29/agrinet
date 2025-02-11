"use client"

import { useEffect, useState } from "react"
import { format, set } from "date-fns"
import { ShoppingCart, AlertCircle, Trash } from "lucide-react"
import { toast } from 'react-hot-toast';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import axios from "axios"
import { useRouter } from 'next/navigation';

interface CartItem {
    id: string
    productId: string
    quantity: number
    unitPrice: number
    subtotal: number
    addedAt: string
  }
  
interface Cart {
    id: string
    userId: string
    totalAmount: number
    createdAt: string
    updatedAt: string
    items: CartItem[]
  }

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null)
  const [productNames, setProductNames] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = useState(false);

  const router=useRouter()

  const handleCheckout=()=>{
    router.push("/marketplace/checkout")
  }

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Utilisation de la route API Next.js au lieu de l'API externe directement
        const response = await fetch("/api/cart", {

        })
      

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Failed to fetch cart")
        }

        const data = await response.json()
        setCart(data)
        
        
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchCart()
  }, [])

  useEffect(() => {
    const getProductNames = async () => {
        if (cart) {
            const names: { [key: string]: string } = {};
            const productRequests = cart.items.map(async (item) => {
                const response = await axios.get(`http://localhost:4000/api/v1/product_post/${item.productId}`);
                names[item.productId] = response.data.name;
            });

            await Promise.all(productRequests);
            setProductNames(names);
        }
    };

    getProductNames();
}, [cart]);

const handleDelete = async (id: string) => {
  
  try {
      const response = await fetch('/api/cart', {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productId: id }),
      });

      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error);
      }

      const data = await response.json();
      toast.success(data.message || "Item deleted successfully");
  } catch (error) {
      console.error(error);
      toast.error("Failed to delete item");
  }
};

  if (loading) {
    return (
      <div className="container mx-auto p-6 space-y-4">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-[400px] w-full" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-xl font-medium text-muted-foreground">Your cart is empty</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Shopping Cart</CardTitle>
            <div className="flex items-center justify-between">
              <div className="text-lg">Total: <b>{cart.totalAmount.toFixed(2)}</b> FCFA</div>
              <button className="bg-primary-600 hover:bg-primary-700 hover:text-white-50 text-white-50  py-2 px-4 rounded-md ml-5" onClick={handleCheckout}>Proceed to checkout</button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Unit Price</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
                <TableHead className="text-right">Added At</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart && cart.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{productNames[item.productId]}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">{item.unitPrice.toFixed(2)} FCFA</TableCell>
                  <TableCell className="text-right">{item.subtotal.toFixed(2)}FCFA</TableCell>
                  <TableCell className="text-right">{format(new Date(item.addedAt), "PPp")}</TableCell>
                  <TableCell className="text-right"><button className=" hover:bg-red-500 px-2 py-2 rounded-sm bg-white-50" onClick={() => handleDelete(item.id)}><Trash className="h-4 w-4 hover:text-white-50 font-bold text-red-500 hover:h-4.5 hover:w-4.5" /></button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-muted-foreground">Last updated: {format(new Date(cart.updatedAt), "PPp")}</div>
          
        </CardFooter>
      </Card>
      
    </div>
  )
}

