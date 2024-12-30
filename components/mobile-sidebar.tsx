"use client"


import { X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import logo from "../public/images/logo.png"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] text-paragraph-md font-inter font-regular bg-white-50">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between text-paragraph-md font-inter font-regular">
          <Link className="flex items-center gap-2" href={"/"}>
          <Image src={logo} alt="Agrinet logo" className=" w-8 h-[24px] " />
            <p className="font-poppins text-heading-desktop-h6  font-semibold text-left text-secondary-700">
              AgriNet
            </p>
          </Link>

          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4 text-paragraph-md font-inter font-regular">
          <Link
            href="/"
            className=" hover:text-accent-500 transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href="#features"
            className=" hover:text-accent-500 transition-colors"
            onClick={onClose}
          >
            Features
          </Link>
          <Accordion type="single" collapsible>
            <AccordionItem value="solutions">
              <AccordionTrigger>Solutions</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-4 ">
                  {components.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="hover:text-accent-500 transition-colors duration-300"
                      onClick={onClose}
                    >
                      {component.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="education">
              <AccordionTrigger>Education</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-4">
                  <Link
                    href="/docs"
                    className="hover:text-accent-500 transition-colors"
                    onClick={onClose}
                  >
                    Introduction
                  </Link>
                  <Link
                    href="/docs/installation"
                    className="hover:text-accent-500 transition-colors"
                    onClick={onClose}
                  >
                    Installation
                  </Link>
                  <Link
                    href="/docs/primitives/typography"
                    className="hover:text-accent-500 transition-colors"
                    onClick={onClose}
                  >
                    Typography
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href="/marketplace"
            className=" hover:text-accent-500 transition-colors"
            onClick={onClose}
          >
            Marketplace
          </Link>
          <Link
            href="/pricing"
            className=" hover:text-accent-500 transition-colors"
            onClick={onClose}
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className=" hover:text-accent-500 transition-colors"
            onClick={onClose}
          >
            FAQs
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

