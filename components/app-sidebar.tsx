"use client";

import type * as React from "react";
import {
  LogOut,
  ChevronRight,
  BrainCog,
  SmartphoneNfc,
  Settings,
  ShoppingCart,
  LayoutDashboard,
  Bell,
  UserRound,
  MessageCircleMore,
  MessageSquare,
  MoveUpIcon,
  Building,
} from "lucide-react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useUserRole } from "@/contexts/UserRoleContext";
import { useRoleBasedAccess } from "@/hooks/useRoleBasedAccess";
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";

import logo from "../public/images/logo.png";
import { Button } from "./ui/button";
import UpgradeCard from "./UpgradeCard";
import { userRole } from "@/services/auth/auth_component_rules";
const navigationfooter = [
  { name: "Settings", href: "/settings", icon: Settings },
  {
    name: "Account",
    href: "/account",
    icon: UserRound,
  },
  { name: "Logout", href: "/logout", icon: LogOut },
];

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,

  },
  {
    name: "Dashboard",
    href: "/business-dashboard",
    icon: LayoutDashboard,

  },
  {
    name: "Organization",
    icon: Building,

    subItems: [
      {
        name: "Agency",
        href: "/organisation/agency",

      },
      {
        name: "Personnel",
        href: "/organisation/personnel",

      },
      {
        name: "Product",
        href: "/organisation/product",

      },
      {
        name: "Business",
        href: "/organisation/business",

      },
      {
        name: "Published products",
        href: "/marketplace/published-products",

      },
      /*       {
              name: "Profile",
              href: "/organisation/profile",
              roles: ["business"],
            }, */
    ],
  },
  {
    name: "Connected Devices",
    href: "/connected-devices",
    icon: SmartphoneNfc,

  },
  {
    name: "Shopping",
    icon: ShoppingCart,

    subItems: [
      {
        name: "My products",
        href: "/marketplace",

      },
      {
        name: "Cart",
        href: "/marketplace/cart",
      },
      {
        name: "Wishlist",
        href: "/marketplace/wishlist",
      },
      /*       {
              name: "My Marketplace profile",
              href: "/marketplace/marketplace-profile",
              roles: ["business"],
            },
            {
              name: "My Marketplace settings",
              href: "/marketplace/marketplace-settings",
              roles: ["business"],
            }, */
      {
        name: "Invoices",
        href: "/marketplace/invoices",
      },
    ],
  },
  {
    name: "AI Recommandations",
    href: "/ai-recommendations",
    icon: BrainCog,
  },
  {
    name: "Forum",
    href: "/forum",
    icon: MessageCircleMore,
  },
  {
    name: "Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <>
          {state === "collapsed" && (
            <Link
              className="flex items-center gap-2 pt-2 pb-4 mx-auto "
              href="/"
            >
              <Image
                src={logo || "/placeholder.svg"}
                alt="Agrinet logo"
                className="w-8 h-[24px] lg:w-10 lg:h-[30px]"
              />
            </Link>
          )}
          {state === "expanded" && (
            <Link className="flex items-center gap-2 pt-1 pb-4 " href="/">
              <Image
                src={logo || "/placeholder.svg"}
                alt="Agrinet logo"
                className="w-8 h-[24px] lg:w-10 lg:h-[32px]"
              />
              <p className="font-poppins text-paragraph-lg sm:text-heading-desktop-h6 lg:text-heading-desktop-h4 font-semibold text-left text-secondary-700">
                AgriNet
              </p>
            </Link>
          )}
        </>
      </SidebarHeader>
      <SidebarContent>
        <div>
          <SidebarContent>
            <SidebarMenu>
              {state === "expanded" && (
                <p className="text-paragraph-md text-[#606060] font-inter pl-2">
                  Overview
                </p>
              )}
              {navigation.map(
                (item) =>

                  control_auth_component_roles(item.name, "sideBar") == true && (
                    <SidebarMenuItem key={item.name}>
                      {item.subItems ? (
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton className="w-full mx-auto px-4 py-5 hover:bg-gray-200">
                              <item.icon size={48} />
                              {state === "expanded" && (
                                <>
                                  <span className="flex-grow font-inter text-paragraph-lg text-left">
                                    {item.name}
                                  </span>
                                  <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 " />
                                </>
                              )}
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          {state === "expanded" && (
                            <CollapsibleContent>
                              {item.subItems
                                .filter((subItem) =>
                                  control_auth_component_roles(subItem.name, "sideBar") == true
                                )
                                .map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={`flex items-center py-2 pl-10  text-paragraph-md font-inter rounded-md hover:bg-gray-200 ${pathname === subItem.href
                                      ? "bg-primary-600 text-white-50 hover:bg-primary-600 "
                                      : ""
                                      }`}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                            </CollapsibleContent>
                          )}
                        </Collapsible>
                      ) : (
                        <SidebarMenuButton
                          asChild
                          key={item.name}
                          className="w-full mx-auto text-paragraph-lg font-inter hover:bg-gray-200"
                        >
                          <Link
                            href={item.href}
                            key={item.name}
                            className={`flex my-0 px-4 py-5 gap-2 text-paragraph-md font-inter rounded-md hover:bg-gray-200 ${pathname === item.href
                              ? "bg-primary-600 text-white-50 hover:bg-primary-600 hover:text-white-50"
                              : ""
                              }`}
                          >
                            <item.icon size={24} />
                            {state === "expanded" && (
                              <span className="flex-grow font-inter text-paragraph-lg text-left">
                                {item.name}
                              </span>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  )
              )}
              {userRole === "user" && state === "expanded" && <UpgradeCard />}
            </SidebarMenu>
          </SidebarContent>
        </div>
      </SidebarContent>
      <SidebarFooter className="">
        <SidebarSeparator />
        {navigationfooter.map((item) => (
          <SidebarMenuButton
            asChild
            key={item.name}
            className="w-full mx-auto text-paragraph-lg font-inter hover:bg-primary-100"
          >
            <Link
              href={item.href}
              key={item.name}
              className={`flex my-0 px-2 py-5 gap-2 text-paragraph-md font-inter rounded-md hover:bg-gray-200 ${pathname === item.href
                ? "bg-primary-600 text-white-50 hover:bg-primary-600 hover:text-white-50"
                : ""
                }`}
            >
              <item.icon size={24} />
              {state === "expanded" && (
                <span className="flex-grow font-inter text-paragraph-lg text-left">
                  {item.name}
                </span>
              )}
            </Link>
          </SidebarMenuButton>
        ))}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
