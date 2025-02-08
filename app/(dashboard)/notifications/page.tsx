"use client"

import React, { useState } from 'react';

import IntroText from '@/components/IntroText'

import NotificationList from '@/public/data/notification'
import { NotificationCard } from '@/components/NotificationCard'

const Page = () => {

  const tabs = ['All', 'unread'];
  
  const [activeTab, setActiveTab] = useState('All');
  const [read, setRead] = useState(false);

  const handleTabClick = (tab: string) => setActiveTab(tab);

  const notifications = NotificationList({ userId: '48c13d8b-d922-4894-ab36-6ae3f7dfb7ad' });
  
  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === 'All') return true;
    return notification.status === activeTab;
  }).filter((notification) => notification.subject.toLowerCase());

  const handleNotificationClick = (title: string) => {
    setRead(true);
    // Update the notification status to 'read'
    notifications.forEach((notification) => {
      if (notification.subject === title) {
        notification.status = 'read';
      }
    });
  };
  return (
    <div>
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
      <div className='flex justify-between w-full items-center mr-10'>
        <div>
          {filteredNotifications.map((notification) => (
            <NotificationCard key={notification.subject} notification={notification} onClick={handleNotificationClick} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Page