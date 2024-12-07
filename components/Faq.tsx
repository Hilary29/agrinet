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
    <div className="group flex items-center justify-center w-10 h-10 cursor-pointer">
      {isOpen ? (
        <MinusCircle className="h-8 w-8 shrink-0 " />
      ) : (
        <PlusCircle className="h-8 w-8 shrink-0 " />
      )}
    </div>
  );
}

const Faq = () => {
  const [openItem, setOpenItem] = useState<string | null>(null); 


  const toggleAccordion = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value)); 
  };

  return (
    <section id="features" className="gap-[10px] w-full flex flex-col">
      <div className="mx-[350px] gap-[60px] text-center">
        <div className="mb-[60px]">
          <p className="p-[10px] gap-[10px] font-inter font-semibold text-paragraph-md text-accent-600">
            SUPPORT
          </p>
          <div className="gap-[11px]">
            <p className="font-medium font-satoshi text-heading-desktop-h3 text-black-100">
              Frequently Asked Questions
            </p>
            <p className="mt-[18px] justify-center text-paragraph-md font-regular text-black-400">
              Find answers to the most common questions about Agrinet and how it works.
            </p>
          </div>
        </div>

        <div className="mx-8">
          <Accordion type="single" collapsible className="w-full font-medium font-satoshi text-heading-desktop-h6 ">
            <AccordionItem value="item-1">
              <AccordionTrigger onClick={() => toggleAccordion('item-1')}>
                What is Agrinet, and who is it for?
                <ToggleIcon isOpen={openItem === 'item-1'} />
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger onClick={() => toggleAccordion('item-2')}>
                How does Agrinet help me sell my products?
                <ToggleIcon isOpen={openItem === 'item-2'} />
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger onClick={() => toggleAccordion('item-3')}>
                Do I need IoT devices to use Agrinet?
                <ToggleIcon isOpen={openItem === 'item-3'} />
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger onClick={() => toggleAccordion('item-4')}>
                Do I need IoT devices to use Agrinet?
                <ToggleIcon isOpen={openItem === 'item-4'} />
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger onClick={() => toggleAccordion('item-4')}>
                Do I need IoT devices to use Agrinet?
                <ToggleIcon isOpen={openItem === 'item-4'} />
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger onClick={() => toggleAccordion('item-4')}>
                Do I need IoT devices to use Agrinet?
                <ToggleIcon isOpen={openItem === 'item-4'} />
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
