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
import { Bell, Search, User, Globe, ChevronDown, Link } from "lucide-react"
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
        <HoverCard>
          <HoverCardTrigger asChild>
            <Bell className="text-black-100"/>
          </HoverCardTrigger>
          <HoverCardContent className="w-[477px]">
            <IntroText 
              title="Notifications" 
              description="Stay informed with real-time updates and alerts." />
            <div className='py-5'>
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 mr-4 rounded-md ${
                    activeTab === tab
                      ? 'bg-green-200 text-green-600 hover:text-green-700'
                      : 'bg-gray-100 text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className='flex justify-between items-center mr-10'>
              <div>
                {filteredNotifications.map((notification) => (
                  <NotificationCard key={notification.title} notification={notification} onClick={handleNotificationClick} />
                ))}
              </div>
            </div>
            <Button variant="outline" className='w-full'>
              Show All
            </Button>
          </HoverCardContent>
        </HoverCard>
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