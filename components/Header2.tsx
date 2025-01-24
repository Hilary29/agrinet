import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import { Separator } from "./ui/separator"
import { SidebarTrigger } from "./ui/sidebar"
import { Bell, Search, User, Globe, ChevronDown } from "lucide-react"

const Header2 = () => {
  return (
    <header className="flex justify-between items-center px-6 py-6 w-full bg-white-50 border-b border-gray-300">
    <div className="flex items-center gap-6">
        <SidebarTrigger className="text-black-100" />
        <div className="flex items-center px-4 py-2 w-[310px] h-10 bg-gray-200 rounded-lg">
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-transparent w-full text-black-300 placeholder-black-300 focus:outline-none"
          />
          <Search className="text-black-300 " />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Bell className="text-black-100"/>
        <div className="flex items-center gap-1">
          <User className="text-black-100" />
          <span className="text-black-100 font-medium">Ahmed Musa</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="text-black-100" />
          <span className="text-black-100 font-medium">English</span>
          <ChevronDown className="text-black-400" />
        </div>
      </div>
    </header>
  )
}

export default Header2

