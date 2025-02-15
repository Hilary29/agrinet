import axios from "axios";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import type { ProductPostResponse } from "@/types/products-post";
import { ProductDetailsTab2 } from "@/components/ProductDetailsTab2";


export async function generateStaticParams() {
  const response = await axios.get(
    "http://localhost:4010/api/product_post-client"
  );
  const products = response.data;

  return products.map((product: { id: string }) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await axios.get(
    "http://localhost:4010/api/product_post-client"
  );
  const products = response.data;
  const product = products.find((p: ProductPostResponse) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
      <main className="bg-white-50">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-8 pt-24 ">
          <Link
            href="/marketplace"
            className="inline-block mb-8 font-inter font-medium"
          >
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to MarketPlace
            </Button>
          </Link>
          <div className="container mx-auto px-4 pb-16">
            <ProductDetailsTab2 product={product} />
          </div>
        </div>
        <Footer />
      </main>

  );
}
