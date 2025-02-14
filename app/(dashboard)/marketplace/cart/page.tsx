"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { type Product, products } from "@/public/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import router from "next/router";
import IntroText from "@/components/IntroText";
import Cart from "@/components/Cart";

export default function CartPage() {
  return (
    <div className="max-w-4xl">
      <IntroText
        title="Cart"
        description="Track and maintain all the products selected"
      />
      <Cart />
    </div>
  );
}
