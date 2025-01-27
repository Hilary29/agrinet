"use client"

import type * as React from "react"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import { NavUser } from "./nav-user"
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

// Define types for our props
type NavigationItem = {
  name: string
  icon: React.ElementType
} & ({ href: string; subItems?: never } | { href?: never; subItems: { name: string; href: string }[] })

type UserData = {
  name: string
  email: string
  avatar: string
}

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  navigation: NavigationItem[]
  navigationFooter: NavigationItem[]
  userData: UserData
}

export function AppSidebar({ navigation, navigationFooter, userData, ...props }: AppSidebarProps) {
  const { state } = useSidebar()
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <>
          {state === "collapsed" && (
            <Link className="flex items-center gap-2 py-5 mx-auto " href="/">
              <Image src={logo || "/placeholder.svg"} alt="Agrinet logo" className="w-8 h-[24px] lg:w-10 lg:h-[32px]" />
            </Link>
          )}
          {state === "expanded" && (
            <Link className="flex items-center gap-2 py-5" href="/">
              <Image src={logo || "/placeholder.svg"} alt="Agrinet logo" className="w-8 h-[24px] lg:w-10 lg:h-[32px]" />
              <p className="font-poppins text-paragraph-lg sm:text-heading-desktop-h6 lg:text-heading-desktop-h4 font-semibold text-left text-secondary-700">
                AgriNet
              </p>
            </Link>
          )}
        </>
      </SidebarHeader>
      <SidebarContent className="mx-auto">
        <div>
          <SidebarContent>
            <SidebarMenu>
              {state === "expanded" && <p className="text-paragraph-md text-[#606060] font-inter pl-2">Overview</p>}
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  {item.subItems ? (
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full py-5 hover:bg-primary-100">
                          <item.icon size={48} />
                          {state === "expanded" && (
                            <>
                              <span className="flex-grow font-inter text-paragraph-lg text-left">{item.name}</span>
                              <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 " />
                            </>
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {state === "expanded" && (
                        <CollapsibleContent>
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`flex items-center py-2 pl-10 pr-2 text-paragraph-md font-inter rounded-md hover:bg-primary-100 ${
                                pathname === subItem.href
                                  ? "bg-primary-600 text-white-50 hover:bg-primary-600 hover:text-white-50"
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
                      className="w-full text-paragraph-lg font-inter hover:bg-primary-100"
                    >
                      <Link
                        href={item.href!}
                        key={item.name}
                        className={`flex my-0 px-2 py-5 gap-2 text-paragraph-md font-inter rounded-md hover:bg-primary-100 ${
                          pathname === item.href
                            ? "bg-primary-600 text-white-50 hover:bg-primary-600 hover:text-white-50"
                            : ""
                        }`}
                      >
                        <item.icon size={24} />
                        {state === "expanded" && (
                          <span className="flex-grow font-inter text-paragraph-lg text-left">{item.name}</span>
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
        {navigationFooter.map((item) => (
          <SidebarMenuButton
            asChild
            key={item.name}
            className="w-full mx-auto text-paragraph-lg font-inter hover:bg-primary-100"
          >
            <Link
              href={item.href!}
              key={item.name}
              className={`flex my-0 px-2 py-5 gap-2 text-paragraph-md font-inter rounded-md hover:bg-primary-100 ${
                pathname === item.href ? "bg-primary-600 text-white-50 hover:bg-primary-600 hover:text-white-50" : ""
              }`}
            >
              <item.icon size={24} />
              {state === "expanded" && (
                <span className="flex-grow font-inter text-paragraph-lg text-left">{item.name}</span>
              )}
            </Link>
          </SidebarMenuButton>
        ))}

        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

