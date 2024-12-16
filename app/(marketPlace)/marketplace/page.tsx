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

export default function Home() {
  return (
    <main className=" ">
      <Header />
      <div className="space-y-[100px]">
        <section className="flex flex-col items-start w-full  bg-[url('/images/marketplace-font.png')] bg-cover bg-center bg-no-repeat bg-[#EBF9EE]  px-4 sm:px-6 md:px-8 lg:px-32 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
          <div className="flex flex-col items-center w-full  mx-auto gap-8 sm:gap-12 md:gap-14 lg:gap-16 py-4">
            <div className="flex flex-col items-center max-w-xl lg:max-w-2xl text-center ">
              <p className="text-3xl  md:text-3xl lg:text-4xl font-semibold font-satoshi text-heading-desktop-h2 text-black-100 mb-4 sm:mb-5 md:mb-6 ">
                Your Marketplace for Fresh Produced and Agricultural Goods{" "}
              </p>
              <p className=" font-regular font-inter text-paragraph-md text-black-400  px-[58px] mb-6 sm:mb-8 md:mb-10 max-w-md sm:max-w-lg md:max-w-xl">
                Explore a wide range of fresh produce, farm supplies, and more.
                Buy directly from trusted sellers or list your products to reach
                local and global buyers{" "}
              </p>
            </div>
          </div>
        </section>
        <Faq />
      </div>
      <Footer />
    </main>
  );
}
