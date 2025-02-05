import Image from "next/image";
import { products } from "@/public/data/products";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  FaHeart,
  FaThumbsDown,
  FaThumbsUp,
  FaMapPin,
  FaTruck,
  FaMoneyBill,
  FaCreditCard,
} from "react-icons/fa";
import {
  ArrowLeft,
  MessageSquare,
  ShoppingCart,
  Heart,
  CreditCard,
  DollarSign,
  MapPin,
  Truck,
  Package,
  Clock,
} from "lucide-react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductDetailsTab } from "@/components/ProductDetailsTab";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white-50">
      <div className="max-w-6xl mx-auto  ">
        <Link
          href="/marketplace/all-products"
          className="inline-block mb-8 font-inter font-medium"
        >
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to MarketPlace
          </Button>
        </Link>
        <div className="container mx-auto px-4 ">
      <ProductDetailsTab product={product} />
    </div>
      </div>
    </main>
  );
}
