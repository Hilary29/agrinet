"use client"

import { TypeIcon as type, type LucideIcon } from "lucide-react"
import Link from "next/link"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface OverviewItem {
  title: string
  url: string
  icon: LucideIcon
  isActive?: boolean
}

export function Overview({ items }: { items: OverviewItem[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Overview</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.title}>
              <Link href={item.url} className="flex items-center w-full">
                <item.icon className="shrink-0" />
                <span className="ml-3 transition-opacity duration-200 group-data-[collapsible=icon]:opacity-0">
                  {item.title}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

