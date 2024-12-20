"use client";

import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
/* import { ModeToggle } from "@/components/ModeToggle"; */ // Changement de thème Dark/Light
import * as React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Filters, FilterSection } from "@/components/Filters";
import { SortBy } from "@/components/SortBy";
import Link from "next/link";

const filterSections: FilterSection[] = [
  {
    id: "product-type",
    title: "Product Type",
    options: [
      { id: "vegetables", label: "Vegetables" },
      { id: "fruits", label: "Fruits" },
      { id: "grains", label: "Grains" },
      { id: "dairy", label: "Dairy Products" },
      { id: "meat", label: "Meat" },
      { id: "poultry", label: "Poultry" },
      { id: "fish", label: "Fish" },
      { id: "organic", label: "Organic Products" },
    ],
  },
  {
    id: "seller-type",
    title: "Seller Type",
    options: [
      { id: "individual", label: "Individual Seller" },
      { id: "business", label: "Business Seller" },
      { id: "cooperative", label: "Cooperative" },
      { id: "wholesale", label: "Wholesale Supplier" },
    ],
  },
  {
    id: "availability",
    title: "Availability",
    options: [
      { id: "in-stock", label: "In Stock" },
      { id: "out-of-stock", label: "Out of Stock" },
    ],
  },
];

const sortOptions = [
  { id: "newest", label: "Newest" },
  { id: "price-low-high", label: "Price: Low to High" },
  { id: "price-high-low", label: "Price: High to Low" },
  { id: "best-sellers", label: "Best Sellers" },
];

export default function Home() {
  const handleFiltersChange = (
    selectedFilters: Record<string, string[]>,
    priceRange: [number, number]
  ) => {
    console.log("Selected Filters:", selectedFilters);
    console.log("Price Range:", priceRange);
  };

  const handleSortChange = (selectedOption: string) => {
    console.log(`Selected sort option: ${selectedOption}`);
    // Logique pour trier les produits
  };

  return (
    <main className="bg-white-50">
      <Header />
      <div className="space-y-[46px]">
        {/* Hero Section */}
        <section className=" bg-[url('/images/marketplace-font.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col items-start bg-[#ebf9eed2] w-full px-4 sm:px-6 md:px-8 lg:px-32 py-24 sm:pt-20 md:pt-24 lg:pt-32">
            <div className="flex flex-col items-center w-full max-w-[1186px] mx-auto gap-8">
              <div className="flex flex-col items-center max-w-2xl lg:max-w-3xl text-center">
                <p className="text-3xl md:text-3xl lg:text-4xl font-semibold font-satoshi text-heading-desktop-h2 text-black-100 mb-4 sm:mb-5 md:mb-6 mx-12">
                  Your Marketplace for Fresh Produced and Agricultural Goods
                </p>
                <p className="font-regular font-inter text-paragraph-md text-black-400 mb-6 sm:mb-8 md:mb-10">
                  Explore a wide range of fresh produce, farm supplies, and
                  more. Buy directly from trusted sellers or list your products
                  to reach local and global buyers
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
                    className="absolute right-0 top-0 h-full px-4  bg-primary-700 hover:bg-primary-800 rounded-r-lg rounded-l-none flex items-center justify-center"
                    aria-label="Search"
                  >
                    <Search className="w-6 h-6  text-white-50" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex w-full px-16  gap-6">
          {/* Filters Section */}
          <aside className="min-w-48 sm:flex hidden">
            <Filters
              sections={filterSections}
              priceRange={[2000, 15000]}
              onFiltersChange={handleFiltersChange}
            />
          </aside>

          {/* Products Section */}
          <div className="flex-1">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <p className="text-lg font-semibold">Products</p>
              <SortBy
                options={sortOptions}
                defaultOption="Newest"
                onSortChange={handleSortChange}
              />
            </div>

            {/* Products Grid */}
            <div className="mt-6 justify-center lg:mx-16 grid  md:grid-cols-2 xl:grid-cols-3  md:gap-8 gap-2">
                <Link className="flex flex-col items-center justify-end p-2 gap-4 max-w-80  bg-white-50 shadow-6dp-v2 rounded-lg" 
                href={""}>
                  <div className="w-full max-h-44  overflow-hidden rounded-md">
                    <Image src="/images/tomato-product.jpg" alt="tomatoes" width={358} height={209} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-start gap-1 w-full px-2">
                    <h3 className="text-[#1E1E1E] font-semibold font-inter text-paragraph-lg">Tomatoes</h3>
                    <p className="text-black-400 text-base">3 crates of tomatoes</p>
                    <p className="text-accent-700 font-bold mt-2">6000 FCFA</p>
                  </div>
                </Link>
                

                <Link className="flex flex-col items-center justify-end p-2 gap-4 max-w-80  bg-white-50 shadow-6dp-v2 rounded-lg" 
                href={""}>
                  <div className="w-full max-h-44  overflow-hidden rounded-md">
                    <Image src="/images/mixed-product.jpg" alt="tomatoes" width={358} height={209} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-start gap-1 w-full px-2">
                    <h3 className="text-[#1E1E1E] font-semibold font-inter text-paragraph-lg">Mix of vegetables</h3>
                    <p className="text-black-400 text-base">4 crates of tomatoe, potatoe, carrot and cucumber</p>
                    <p className="text-accent-700 font-bold mt-2">10000 FCFA</p>
                  </div>
                </Link>

                <Link className="flex flex-col items-center justify-end p-2 gap-4 max-w-80  bg-white-50 shadow-6dp-v2 rounded-lg" 
                href={""}>
                  <div className="w-full max-h-44  overflow-hidden rounded-md">
                    <Image src="/images/carrot-product.jpg" alt="tomatoes" width={358} height={209} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-start  gap-1 w-full px-2">
                    <h3 className="text-[#1E1E1E] font-semibold font-inter text-paragraph-lg">Carrots</h3>
                    <p className="text-black-400 text-base">1 crate of carrots</p>
                    <p className="text-accent-700 font-bold mt-2">2500 FCFA</p>
                  </div>
                </Link>

                <Link className="flex flex-col items-center justify-end p-2 gap-4 max-w-80  bg-white-50 shadow-6dp-v2 rounded-lg" 
                href={""}>
                  <div className="w-full max-h-44  overflow-hidden rounded-md">
                    <Image src="/images/plantain-product.jpg" alt="tomatoes" width={358} height={209} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-start gap-1 w-full px-2">
                    <h3 className="text-[#1E1E1E] font-semibold font-inter text-paragraph-lg">Plantain</h3>
                    <p className="text-black-400 text-base">5 plantain bunches</p>
                    <p className="text-accent-700 font-bold mt-2">15000 FCFA</p>
                  </div>
                </Link>

                <Link className="flex flex-col items-center justify-end p-2 gap-4 max-w-80  bg-white-50 shadow-6dp-v2 rounded-lg" 
                href={""}>
                  <div className="w-full max-h-44  overflow-hidden rounded-md">
                    <Image src="/images/tomato-product.jpg" alt="tomatoes" width={358} height={209} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-start gap-1 w-full px-2">
                    <h3 className="text-[#1E1E1E] font-semibold font-inter text-paragraph-lg">Tomatoes</h3>
                    <p className="text-black-400 text-base">3 crates of tomatoes</p>
                    <p className="text-accent-700 font-bold mt-2">15000 FCFA</p>
                  </div>
                </Link>

                <Link className="flex flex-col items-center justify-end p-2 gap-4 max-w-80  bg-white-50 shadow-6dp-v2 rounded-lg" 
                href={""}>
                  <div className="w-full max-h-44  overflow-hidden rounded-md">
                    <Image src="/images/tomato-product.jpg" alt="tomatoes" width={358} height={209} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-start gap-1 w-full px-2">
                    <h3 className="text-[#1E1E1E] font-semibold font-inter text-paragraph-lg">Tomatoes</h3>
                    <p className="text-black-400 text-base">3 crates of tomatoes</p>
                    <p className="text-accent-700 font-bold mt-2">15000 FCFA</p>
                  </div>
                </Link>
              {/* Ajoutez ici d'autres éléments */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
