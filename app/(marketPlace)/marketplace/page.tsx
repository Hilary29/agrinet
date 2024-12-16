"use client";

import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
/* import { ModeToggle } from "@/components/ModeToggle"; */ //Changement de theme Dark light
import * as React from "react";
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <main className=" ">
      <Header />
      <div className="space-y-[100px]">
      <section className=" bg-[url('/images/marketplace-font.png')] bg-cover bg-center bg-no-repeat  ">
<div className=" flex flex-col items-start bg-[#ebf9eed2] w-full px-4 sm:px-6 md:px-8 lg:px-32 py-16 sm:pt-20 md:pt-24 lg:pt-32">
<div className="flex flex-col items-center w-full max-w-[1186px] mx-auto gap-8 ">
        <div className="flex flex-col items-center max-w-2xl lg:max-w-3xl text-center ">
          <p className="text-3xl  md:text-3xl lg:text-4xl font-semibold font-satoshi text-heading-desktop-h2 text-black-100 mb-4 sm:mb-5 md:mb-6 mx-12 ">
          Your Marketplace for Fresh Produced and Agricultural Goods
          </p>
        <p className=" font-regular font-inter text-paragraph-md text-black-400 mb-6 sm:mb-8 md:mb-10 ">
          Explore a wide range of fresh produce, farm supplies, and more. Buy directly from trusted sellers or list your products to reach local and global buyers        
        </p>
        </div>
        <div className="w-full max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search our Marketplace"
              className="w-full py-3 pl-4 pr-12 text-[#686868] bg-transparent hover:bg-[#ffffff67] border border-[#C3C3C3] rounded-lg focus:outline-none focus:border-[#258D3F] transition-colors"
            />
            <Button
              className="absolute right-0 top-0 h-full px-4  bg-primary-600 hover:bg-primary-700 rounded-r-lg flex items-center justify-center"
              aria-label="Search"
            >
              <Search className="w-6 h-6  text-white-50" />
            </Button>
          </div>
        </div>
      </div>
</div>
    </section>


  <Faq />
</div>

      <Footer />
    </main>
  );
}
