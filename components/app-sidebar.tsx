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
  MoveUpIcon
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

import logo from "../public/images/logo.png";

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
    roles: [ "farmer", "organization"],
  },
  {
    name: "Connected Devices",
    href: "/connected-devices",
    icon: SmartphoneNfc,
    roles: ["farmer", "organization"],
  },
  {
    name: "Marketplace",
    icon: ShoppingCart,
    roles: ["user", "farmer", "organization"],
    subItems: [
      {
        name: "All Products",
        href: "/marketplace/all-products",
        roles: ["user", "farmer", "organization"],
      },
      {
        name: "Cart",
        href: "/marketplace/cart",
        roles: ["user", "farmer", "organization"],
      },
      {
        name: "Wish",
        href: "/marketplace/wishlist",
        roles: ["user", "farmer", "organization"],
      },
      {
        name: "Invoices",
        href: "/marketplace/invoices",
        roles: ["user", "farmer", "organization"],
      },
      {
        name: "My Shop",
        href: "/marketplace/my-shop",
        roles: ["farmer", "organization"],
      },
      {
        name: "My Marketplace profile",
        href: "/marketplace/marketplace-profile",
        roles: ["farmer", "organization"],
      },
      {
        name: "My Marketplace settings",
        href: "/marketplace/marketplace-settings",
        roles: ["farmer", "organization"],
      },
      {
        name: "Invoices",
        href: "/marketplace/invoices",
        roles: ["user","farmer", "organization"],
      },
    ],
  },
  {
    name: "AI Predictions",
    href: "/ai-recommandations",
    icon: BrainCog,
    roles: ["farmer", "organization"],
  },
  {
    name: "Forum",
    href: "/forum",
    icon: MessageCircleMore,
    roles: ["user", "farmer", "organization"],
  },
  {
    name: "Chat",
    href: "/chat",
    icon: MessageSquare,
    roles: ["user", "farmer", "organization"],
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
    roles: ["user", "farmer", "organization"],
  },
  {
    name: "Upgrade",
    href: "/upgrade",
    icon: MoveUpIcon,
    roles: ["user", "farmer", "organization"],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const pathname = usePathname();
  const { userRole } = useUserRole();

  const filteredNavigation = navigation.filter((item) =>
    item.roles.includes(userRole)
  );

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <>
          {state === "collapsed" && (
            <Link className="flex items-center gap-2 py-5 mx-auto " href="/">
              <Image
                src={logo || "/placeholder.svg"}
                alt="Agrinet logo"
                className="w-8 h-[24px] lg:w-10 lg:h-[32px]"
              />
            </Link>
          )}
          {state === "expanded" && (
            <Link className="flex items-center gap-2 py-5" href="/">
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
              {filteredNavigation.map((item) => (
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
                              subItem.roles.includes(userRole)
                            )
                            .map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`flex items-center py-2 pl-10  text-paragraph-md font-inter rounded-md hover:bg-gray-200 ${
                                  pathname === subItem.href
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
                        className={`flex my-0 px-4 py-5 gap-2 text-paragraph-md font-inter rounded-md hover:bg-gray-200 ${
                          pathname === item.href
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
              ))}
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
              className={`flex my-0 px-2 py-5 gap-2 text-paragraph-md font-inter rounded-md hover:bg-gray-200 ${
                pathname === item.href
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