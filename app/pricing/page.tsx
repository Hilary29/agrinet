"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

type PricingCardProps = {
  isYearly?: boolean;
  title: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  description: string;
  features: string[];
  actionLabel: string;
  variant: "basic" | "pro" | "enterprise";
};

const variantStyles = {
  basic: {
    container: "border-none bg-gray-50 dark:bg-blue-950",
    title: "text-black-100 dark:text-blue-300",
    description: "text-black-400 dark:text-gray-300",
    features: "text-black-400 dark:text-gray-400",
  },
  pro: {
    container: "border-none bg-gradient-to-br from-primary-100 to-accent-100 dark:bg-purple-950",
    title: "text-black-100 dark:text-purple-300",
    description: "text-black-300 dark:text-purple-200",
    features: "text-black-300 dark:text-purple-400",
  },
  enterprise: {
    container: "border-none bg-secondary-700 dark:bg-emerald-950 text-white-50",
    title: "text-primary-100 dark:text-green-300",
    description: "text-primary-100 dark:text-green-200",
    features: "text-white-50 dark:text-green-400",
  },
};

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => (
  <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
    <TabsList className="py-6 px-2">
      <TabsTrigger value="0" className="text-base">Monthly</TabsTrigger>
      <TabsTrigger value="1" className="text-base">Yearly</TabsTrigger>
    </TabsList>
  </Tabs>
);

const PricingCard = ({ isYearly, title, monthlyPrice, yearlyPrice, description, features, actionLabel, variant }: PricingCardProps) => (
  <Card className={cn("w-72 flex flex-col justify-between py-1 mx-auto sm:mx-0", variantStyles[variant].container)}>
    <CardHeader className="pb-8 pt-4">
      <div className="flex justify-between items-center">
        <CardTitle className={cn("text-lg", variantStyles[variant].title)}>{title}</CardTitle>
        {isYearly && yearlyPrice && monthlyPrice && (
          <div className="px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white-50">
            Save {monthlyPrice * 12 - yearlyPrice} FCFA
          </div>
        )}
      </div>
      <div className="flex items-end gap-0.5">
        <h3 className="text-3xl font-semibold">
          {yearlyPrice && isYearly ? `${yearlyPrice} FCFA` : monthlyPrice ? `${monthlyPrice} FCFA` : "Custom"}
        </h3>
        <span className="text-sm">{yearlyPrice && isYearly ? "/year" : monthlyPrice ? "/month" : null}</span>
      </div>
      <CardDescription className={cn("pt-1.5 h-12", variantStyles[variant].description)}>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
      {features.map((feature) => (
        <div key={feature} className="flex gap-2">
          <CheckCircle2 size={18} className="text-green-400" />
          <p className={cn("text-sm", variantStyles[variant].features)}>{feature}</p>
        </div>
      ))}
    </CardContent>
    <CardFooter className="mt-2">
      <Button className="relative w-full rounded-md bg-black-50 text-white-50 dark:bg-white-50 dark:text-black px-6 font-medium">
        <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
        {actionLabel}
      </Button>
    </CardFooter>
  </Card>
);

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);

    const plans: PricingCardProps[] = [
    {
      title: "Basic",
      monthlyPrice: 1000,
      yearlyPrice: 10000,
      description: "Essential features you need to get started",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      actionLabel: "Get Started",
      variant: "basic", 
    },
    {
      title: "Pro",
      monthlyPrice: 2500,
      yearlyPrice: 26500,
      description: "Perfect for small & medium businesses",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      actionLabel: "Get Started",
      variant: "pro", 
    },
    {
      title: "Enterprise",
      description: "Dedicated support and infrastructure to fit your needs",
      features: ["Feature 1", "Feature 2", "Feature 3", "Exclusive Feature"],
      actionLabel: "Contact Sales",
      variant: "enterprise", 
    },
  ];

  return (
    <div className="flex flex-col items-start w-full px-4 sm:px-6 md:px-8 lg:px-32 pt-28 md:pt-32">
      <Header />
      <div className="flex flex-col items-center w-full max-w-[1186px] mx-auto gap-8 sm:gap-12 lg:gap-14">
        <div className="text-center max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-6">Pricing Plans</h1>
          <p className="text-black-400">Choose the plan that&apos;s right for you</p>
        </div>
        <PricingSwitch onSwitch={(value) => setIsYearly(parseInt(value) === 1)} />
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
