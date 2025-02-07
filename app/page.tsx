"use client";

import Benefits from "@/components/Benefits";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import ChatbotButton from "@/components/ChatbotButton";
/* import { ModeToggle } from "@/components/ModeToggle"; */ //Changement de theme Dark light
import * as React from "react";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <main className="bg-white-50">
      <ChatbotButton />
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
      <Metrics />
      <Footer />
    </main>
  );

}

