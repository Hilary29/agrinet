"use client";
import React, { useState } from 'react';
import IntroText from '@/components/IntroText';
import { notifications } from '@/public/data/notification';
import { NotificationCard } from '@/components/NotificationCard';

const Page = () => {
  const tabs = ['All', 'Unread'];
  
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab: React.SetStateAction<string>) => setActiveTab(tab);

  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === 'All') return true;
    return notification.status === 'unread';
  });

  const handleNotificationClick = (title: string) => {
    notifications.forEach((notification) => {
      if (notification.title === title) {
        notification.status = 'read';
      }
    });
  };

  return (
    <div>
      <IntroText 
        title="Notifications" 
        description="Stay informed with real-time updates and alerts." 
      />
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
      {/* <div className='flex flex-col justify-start items-start'>
        {filteredNotifications.map((notification) => (
          <NotificationCard 
            key={notification.title} 
            notification={notification} 
            onClick={handleNotificationClick} 
          />
        ))}
      </div> */}
    </div>
  );
};

export default Page;