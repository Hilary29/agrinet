"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { House, LogOut, Settings, User } from "lucide-react"; // Added icons

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MobileSidebar } from "./mobile-sidebar";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import logo from "../public/images/logo.png";
import { isAuthenticated, user } from "@/services/auth/auth_params";

// Mock user state - replace with your actual auth logic
//const user = ;
//const isAuthenticated = false; // Remplacer par la recuperation dynamique de l'etat d'authentification A

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
  );
});
ListItem.displayName = "ListItem";

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
];

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-white-50 to-primary-50">
      <div className="mx-auto flex justify-between items-center px-2 lg:px-16 py-4 ">
        <div className="flex">
          <div className="xl:hidden flex mr-4 text-black-300 hover:bg-primary-200 hover:text-secondary-200 hover:rounded-md transition duration-300">
            <Hamburger
              toggled={isSidebarOpen}
              toggle={setIsSidebarOpen}
              size={26}
            />
          </div>
          <Link className="flex items-center gap-2" href={"/marketplace"}>
            <Image
              src={logo}
              alt="Agrinet logo"
              className="w-8 h-[24px] lg:w-10 lg:h-[36px]"
            />
            <p className="font-poppins text-paragraph-lg sm:text-heading-desktop-h6 lg:text-heading-desktop-h4 font-semibold text-left text-secondary-700">
              AgriNet
            </p>
          </Link>
        </div>

        <nav className="flex gap-[24px] font-medium font-inter text-paragraph-md ">
          <Link
            href="/features"
            className="hidden xl:flex text-black-100 hover:text-accent-500 transition-colors duration-300"
          >
            Features
          </Link>
          <NavigationMenu className=" text-black-100 ">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hidden md:flex text-black-100 hover:text-accent-500 transition duration-300">
                  Solutions
                </NavigationMenuTrigger>
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
                  Education
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[100px] gap-3 p-4 md:w-[300px]">
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="/marketplace"
            className="hidden md:flex text-black-100  hover:text-accent-500 transition-colors duration-300"
          >
            Marketplace
          </Link>
          <Link
            href="/pricing"
            className="hidden xl:flex text-black-100  hover:text-accent-500 transition-colors duration-300"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="hidden xl:flex text-black-100  hover:text-accent-500 transition-colors duration-300"
          >
            FAQs
          </Link>
        </nav>

        <div className="flex items-center gap-[18px] font-inter text-paragraph-sm md:text-paragraph-md">
          {isAuthenticated ? (
            <div className="flex items-center gap-8">
              <div className="relative group">
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-600   rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Dashboard
                </div>
                <Link href="/dashboard"
                  className="bg-transparent hover:shadow-md hover:bg-white-100 transition duration-200"
                >
                  <House className="h-5 w-5 text-black-100" />
                </Link>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline-block font-medium text-black-200">
                    {user.name}
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <a href="/dashboard">Profile</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <a href="/settings">Settings</a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <>
              <Link
                className="hidden md:flex text-black-100 hover:text-accent-500 transition-colors duration-300"
                href={"/signin"}
              >
                Log In
              </Link>
              <Link
                className="items-center bg-primary-600 text-white-50 px-1.5 py-1 md:px-3 md:py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
                href={"/signup"}
              >
                Sign Up
              </Link>
            </>
          )}
          <LanguageSwitcher />
        </div>
      </div>
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </header>
  );
}
