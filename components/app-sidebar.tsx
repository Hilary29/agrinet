"use client"

import type * as React from "react"
import { Brain, LogOut, ChevronRight,MessageCircle, BrainCog ,SmartphoneNfc,AudioWaveform, Settings, Smartphone, ShoppingCart, User, LayoutDashboard, Bell } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

import logo from "../public/images/logo.png"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
}

const navigation = [
  { name: "Dashboard", href: "/farmer/dashboard", icon: LayoutDashboard },
  { name: "Connected Devices", href: "/farmer/connected-devices", icon: SmartphoneNfc },
  {
    name: "Marketplace",
    icon: ShoppingCart,
    subItems: [
      { name: "All Products", href: "/farmer/marketplace/all-products" },
      { name: "Self & Manage", href: "/farmer/marketplace/self-and-manage" },
      { name: "My Marketplace profile", href: "/farmer/marketplace/marketplace-profile" },
      { name: "My Marketplace settings", href: "/farmer/marketplace/marketplace-settings" },

    ],
  },
  { name: "AI Recommandations", href: "/farmer/ai-recommendations", icon: BrainCog },
  { name: "Forum", href: "/farmer/forum", icon: MessageCircle },
  { name: "Notifications", href: "/farmer/notifications", icon: Bell },
]


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link className="flex items-center gap-2 py-5 pl-2" href="/">
          <Image src={logo || "/placeholder.svg"} alt="Agrinet logo" className="w-8 h-[24px] lg:w-10 lg:h-[32px]" />
          {state === "expanded" && (
            <p className="font-poppins text-paragraph-lg sm:text-heading-desktop-h6 lg:text-heading-desktop-h4 font-semibold text-left text-secondary-700">
              AgriNet
            </p>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent className="pt-4 px-4">
        <div>
          <SidebarContent>
            <SidebarMenu>
              {state === "expanded" && <p className="text-paragraph-md text-[#606060] font-inter pl-2">Overview</p>}
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  {item.subItems ? (
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full my-2.5 hover:text-white-50  hover:bg-primary-600">
                          <item.icon size={48} />
                          {state === "expanded" && (
                            <>
                              <span className="flex-grow font-inter text-paragraph-lg text-left">{item.name}</span>
                              <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 " />
                            </>
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`flex items-center py-2 pl-10 pr-2 text-paragraph-md font-inter rounded-md hover:bg-primary-600 hover:text-white-50 ${
                              pathname === subItem.href ? "bg-primary-600 text-white-50" : ""
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild isActive={pathname === item.href} className="w-full text-paragraph-lg font-inter hover:text-white-50 hover:bg-primary-600">
                      <Link
                        href={item.href}
                        className="flex my-1 px-2 py-2.5 gap-2.5 "
                      >
                        <item.icon size={24} />
                        {state === "expanded" && <span className="flex-grow font-inter text-paragraph-lg text-left">{item.name}</span>}
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarSeparator />
        </div>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

