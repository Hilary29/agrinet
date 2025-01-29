"use client"

import React from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Bell, Search, User, Globe, ChevronDown, Menu, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Header2 = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 sm:py-6 w-full bg-white-50 border-b border-gray-300">
      <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto mb-4 sm:mb-0">
        <SidebarTrigger className="text-black-100" />
        <div className="relative flex-grow sm:flex-grow-0">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full sm:w-[310px] h-10 px-4 py-2 bg-gray-200 rounded-lg text-black-300 placeholder-black-300 focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-300" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="sm:hidden" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="relative">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="text-black-400 h-7 w-7" />
            <span className="absolute -top-[0.5px] -right-0.5 bg-error-600 text-white-50 text-paragraph-xs rounded-full w-5 h-5 flex items-center justify-center">
              4
            </span>
          </Button>
        </div>
        <div className="relative">
          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingCart className="text-black-400 h-7 w-7" />
            <span className="absolute -top-[0.5px] -right-0.5 bg-error-600 text-white-50 text-paragraph-xs rounded-full w-5 h-5 flex items-center justify-center">
              4
            </span>
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="text-black-100 h-5 w-5" />
              <span className="text-black-100 font-medium hidden sm:inline">Ahmed Musa</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <Globe className="text-black-100 h-5 w-5" />
              <span className="text-black-100 font-medium hidden sm:inline">English</span>
              <ChevronDown className="text-black-400 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Français</DropdownMenuItem>
            <DropdownMenuItem>Español</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header2

