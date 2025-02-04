"use client"

import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card"
import { Separator } from "./ui/separator"
import { SidebarTrigger } from "./ui/sidebar"
import { Button } from "./ui/button"
import { Bell, Search, User, Globe, ChevronDown, Link, Menu, MessageSquare } from "lucide-react"
import { Notification, notifications } from '@/types/notification'
import { NotificationCard } from "@/components/NotificationCard"
import IntroText from '@/components/IntroText'

const Header2 = () => {
  
  const tabs = ['All', 'unread'];
    
  const [activeTab, setActiveTab] = useState('All');
  const [read, setRead] = useState(false);

  const handleTabClick = (tab: string) => setActiveTab(tab);

  const notificationList = [notifications[0],notifications[1]];
  
  const filteredNotifications = notificationList.filter((notification) => {
    if (activeTab === 'All') return true;
    return notification.status === activeTab;
  }).filter((notification) => notification.title.toLowerCase());

  const handleNotificationClick = (title: string) => {
      setRead(true);
      // Update the notification status to 'read'
      notifications.forEach((notification) => {
        if (notification.title === title) {
          notification.status = 'read';
        }
      });
    };

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
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
        {/**Bouton messagerie */}
        <div className="relative group">
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white-50 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Chat
          </div>
          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <a href="/chat">
              {" "}
              <MessageSquare className="text-black-400 h-7 w-7" />
            </a>

            <span className="absolute -top-[4px] -right-2 bg-error-600 text-white-50 text-paragraph-xs rounded-full w-7 h-5 flex items-center justify-center">
              +99
            </span>
          </Button>
        </div>
        {/**Bouton notifications */}
        <div className="relative group">
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white-50 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            notifications
          </div>
          <Button variant="ghost" size="icon" aria-label="Notifications">
          <a href="/notifications">
          {" "}
            <Bell className="text-black-400 h-7 w-7" />
            </a>
            <span className="absolute -top-[0.5px] -right-0.5 bg-error-600 text-white-50 text-paragraph-xs rounded-full w-5 h-5 flex items-center justify-center">
              4
            </span>
          </Button>
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