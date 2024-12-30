"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Hamburger from "hamburger-react"


import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { MobileSidebar } from "./mobile-sidebar"
import LanguageSwitcher from "./LanguageSwitcher"

import logo from "../public/images/logo.png"



const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

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

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

    // Simuler l'état de l'utilisateur (false = non authentifié, true = authentifié)
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-white-50 to-primary-50">
      <div className="mx-auto flex justify-between items-center px-2 lg:px-16 py-4 md:py-6 ">
        <div className="flex">
          <div className="xl:hidden flex mr-4 text-black-300 hover:bg-primary-200 hover:text-secondary-200 hover:rounded-md transition duration-300">
            <Hamburger
              toggled={isSidebarOpen}
              toggle={setIsSidebarOpen}
              size={26}
            />
          </div>
          <Link className="flex items-center gap-2" href={"/"}>
            <Image src={logo} alt="Agrinet logo" className="w-6 h-[20px] sm:w-8 sm:h-[24px] lg:w-10 lg:h-[36px]" />
            <p className="font-poppins text-paragraph-md sm:text-heading-desktop-h6 lg:text-heading-desktop-h4 font-semibold text-left text-secondary-700">
              AgriNet
            </p>
          </Link>
        </div>

        <nav className="flex gap-[24px] font-medium font-inter text-paragraph-md ">
   
          <Link href="#features" className="hidden xl:flex text-black-100 hover:text-accent-500 transition-colors duration-300">
            Features
          </Link>
          <NavigationMenu className=" text-black-100 ">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hidden md:flex text-black-100 hover:text-accent-500 transition duration-300">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                <ul className="grid w-[100px] gap-3 p-4 md:w-[300px]  ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hidden md:flex text-black-100 hover:text-accent-500 transition duration-300">
                  Education</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[100px] gap-3 p-4 md:w-[300px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy and
                            paste into your apps. Accessible. Customizable. Open
                            Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/marketplace" className="hidden md:flex text-black-100  hover:text-accent-500 transition-colors duration-300">
            Marketplace
          </Link>
          <Link href="/pricing" className="hidden xl:flex text-black-100  hover:text-accent-500 transition-colors duration-300">
            Pricing
          </Link>
          <Link href="#faq" className="hidden xl:flex text-black-100  hover:text-accent-500 transition-colors duration-300">
            FAQs
          </Link>
        </nav>

        {/* Conditionnel : Afficher Login/Sign up si non authentifié */}
        <div className="flex items-center  gap-[18px] font-inter text-paragraph-sm md:text-paragraph-md ">
          {!isAuthenticated ? (
            <>
              <Link 
                className="hidden md:flex text-black-100 hover:text-accent-500 transition-colors duration-300" 
                href={"/login"}>
                Login
              </Link>
              <Link 
                className="items-center bg-primary-600 text-white-50 px-1.5 py-1 md:px-3 md:py-2 rounded-md hover:bg-green-700 transition-colors duration-300" 
                href={"/signup"}>
                Sign up
              </Link>
            </>
          ) : (
            // Exemple de contenu affiché si authentifié
            <Link
              className="hidden md:flex text-black-100 hover:text-accent-500 transition-colors duration-300"
              href={"/dashboard"}>
              Dashboard
            </Link>
          )}
          <LanguageSwitcher />
        </div>
      </div>
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

   </header>

  )
}

