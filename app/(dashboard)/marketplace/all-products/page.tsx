"use client";

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
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/public/data/products";
import { useState, useEffect } from "react";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="container">
      <IntroText
        title="Marketplace"
        description="Buy farming supplies, sell your produce, and connect directly with buyers"
      />
      <div className="flex flex-col w-full py-24 sm:py-0 gap-6">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center  md:mt-[44px] ">
          <div className="relative flex-grow sm:flex-grow-0 md:w-[556px] ">
            <input
              type="text"
              placeholder="Search devices"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white-50 border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
          </div>
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
        <ProductList />
      </div>
    </main>  );
}
