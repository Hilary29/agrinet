"use client"
 

import Benefits from "@/components/Benefits";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
/* import { ModeToggle } from "@/components/ModeToggle"; */ //Changement de theme Dark light
import * as React from "react"


export default function Home() {
  return (
    <main className="bg-white-50"> 
    <Header />
      <div className="space-y-[100px] "> 
        <Hero />  
        <Features />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Faq />
      </div>
      <Cta />
      <Footer />
    </main>
  );
}
