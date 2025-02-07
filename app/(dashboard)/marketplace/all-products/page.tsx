"use client"

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import IntroText from "@/components/IntroText";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const progress = (step / 3) * 100;

  return (
    <main className="container">
      <IntroText
        title="Marketplace"
        description="Buy farming supplies, sell your produce, and connect directly with buyers"
      />
      <div className="flex flex-col w-full py-6 sm:py-10 gap-6">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center  md:mt-[44px] ">
          <div className="relative flex-grow sm:flex-grow-0 md:w-[556px] ">
            <input
              type="text"
              placeholder="Search devices"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white-50 border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
          </div>
          <Button className="bg-[#2FB551] hover:bg-[#2FB551]/90">
            + Create new listing
          </Button>
        </div>
        <div className="flex justify-between mb-6 ">
          <p className="font-satoshi font-semibold text-heading-desktop-h6 mb-4">
            All Products
          </p>
          <div className="flex flex-row gap-4">
            <Select>
              <SelectTrigger className="w-full sm:w-[175px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category">Category</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="location">Location</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-[159px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

interface Product {
  id: number;
  name: string;
  price: number;
  location: string;
  image: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white-50 rounded-md overflow-hidden">
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={248}
        height={207}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium">
            FCFA {product.price.toLocaleString()}
          </span>
        </div>
        <h3 className="text-gray-700 text-base mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.location}</p>
      </div>
    </div>
  );
}

const products: Product[] = [
  {
    id: 1,
    name: "3 cans of freshly harvested tomatoes",
    price: 6000,
    location: "Yaoundé",
    image: "/images/tomato-product.jpg",
  },
  {
    id: 2,
    name: "3 cans of freshly harvested tomatoes",
    price: 6000,
    location: "Yaoundé",
    image: "/images/tomato-product3.jpg",
  },
  {
    id: 3,
    name: "3 cans of freshly harvested bananas",
    price: 6000,
    location: "Yaoundé",
    image: "/placeholder.svg?height=207&width=248",
  },
  {
    id: 4,
    name: "3 cans of freshly harvested peppers",
    price: 6000,
    location: "Yaoundé",
    image: "/placeholder.svg?height=207&width=248",
  },
  {
    id: 5,
    name: "3 cans of freshly harvested tomatoes",
    price: 6000,
    location: "Yaoundé",
    image: "/placeholder.svg?height=207&width=248",
  },
  {
    id: 6,
    name: "3 cans of freshly harvested tomatoes",
    price: 6000,
    location: "Yaoundé",
    image: "/placeholder.svg?height=207&width=248",
  },
  {
    id: 7,
    name: "3 cans of freshly harvested bananas",
    price: 6000,
    location: "Yaoundé",
    image: "/placeholder.svg?height=207&width=248",
  },
  {
    id: 8,
    name: "3 cans of freshly harvested peppers",
    price: 6000,
    location: "Yaoundé",
    image: "/placeholder.svg?height=207&width=248",
  },
];
