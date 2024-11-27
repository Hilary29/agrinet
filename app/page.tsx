"use client"
 

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
/* import { ModeToggle } from "@/components/ModeToggle"; */ //Changement de theme Dark light
import * as React from "react"


export default function Home() {
  return (
    <main className="bg-gradient-to-r from-white-50 to-primary-50">
      <div className="overflow-x-hidden">
      <Header />
      <main className="pt-[92px]"> {/* Offset for fixed header */}
        <Hero />
      </main>
      <Footer />
    </div>
    </main>
  );
}
