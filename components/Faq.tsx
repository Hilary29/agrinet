"use client"

import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MinusCircle, PlusCircle } from 'lucide-react'

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 cursor-pointer">
      {isOpen ? (
        <MinusCircle className="h-6 w-6 sm:h-8 sm:w-8 shrink-0" />
      ) : (
        <PlusCircle className="h-6 w-6 sm:h-8 sm:w-8 shrink-0" />
      )}
    </div>
  );
}

const Faq = () => {
  const [openItem, setOpenItem] = useState<string | null>(null); 

  const toggleAccordion = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value)); 
  };

  const faqItems = [
    {
      question: "What is Agrinet, and who is it for?",
      answer: "Agrinet is a comprehensive digital platform designed for farmers, agricultural businesses, and anyone involved in the agricultural sector. It provides tools for farm management, crop monitoring, market access, and data-driven decision making."
    },
    {
      question: "How does Agrinet help me sell my products?",
      answer: "Agrinet connects you directly with buyers, provides market insights, and offers tools to showcase your products. It streamlines the selling process, helping you reach a wider customer base and potentially secure better prices for your produce."
    },
    {
      question: "Do I need IoT devices to use Agrinet?",
      answer: "While IoT devices can enhance your experience with Agrinet by providing real-time data, they are not mandatory. You can still use many of Agrinet's features without IoT devices, including market access, crop planning, and basic farm management tools."
    },
    {
      question: "Is my data secure on Agrinet?",
      answer: "Yes, data security is a top priority at Agrinet. We use industry-standard encryption and security measures to protect your information. Your data is stored securely and is never shared without your explicit permission."
    },
    {
      question: "Can Agrinet help with crop disease identification?",
      answer: "Yes, Agrinet offers an AI-powered crop disease identification feature. You can upload photos of affected plants, and our system will analyze them to help identify potential diseases and suggest treatment options."
    },
    {
      question: "Is there a mobile app for Agrinet?",
      answer: "Yes, Agrinet is available as a mobile app for both iOS and Android devices. The app offers most of the features available on the web platform, allowing you to manage your farm on-the-go."
    }
  ];

  return (
    <section id="faq" className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-accent-600 ">
            SUPPORT
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold font-satoshi text-black-100 mb-4">
            Frequently Asked Questions
          </p>
          <p className="text-base sm:text-lg text-black-400 max-w-2xl mx-auto">
            Find answers to the most common questions about Agrinet and how it works.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full text-black-50 ">
          {faqItems.map((item, index) => (
            <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`} className=''>
              <AccordionTrigger 
                onClick={() => toggleAccordion(`item-${index + 1}`)}
                className="flex justify-between items-center text-left font-medium text-base sm:text-lg md:text-xl font-satoshi py-4 px-2 "
              >
                {item.question}
                <ToggleIcon isOpen={openItem === `item-${index + 1}`}/>
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-black-400 px-2 pb-4 ">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;

