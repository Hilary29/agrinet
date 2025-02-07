"use client";

import IntroText from '@/components/IntroText';
import { Forum, forums } from '@/public/data/forum';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ThumbsUp, ThumbsDown, MessageCircle, SquareArrowOutUpRight } from 'lucide-react';

// Sample communities data
const communities = [
  {
    name: 'Sustainable Farmers',
    interests: 'Organic Farming, Sustainability',
    image: '/path/to/image1.jpg' // Replace with actual image paths
  },
  {
    name: 'Tech Innovators',
    interests: 'Agri-Tech, IoT',
    image: '/path/to/image2.jpg'
  },
  {
    name: 'Livestock Lovers',
    interests: 'Animal Husbandry, Veterinary',
    image: '/path/to/image3.jpg'
  },
  {
    name: 'Crop Experts',
    interests: 'Crop Management, Soil Health',
    image: '/path/to/image4.jpg'
  },
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);

  const filteredForums = forums.filter((forum) => {
    if (activeTab === 'All') return true;
    return forum.category === activeTab;
  }).filter((forum) => forum.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex">
      {/* Left Side: Forum Posts */}
      <div className="w-3/4 p-4">
        <div className='flex overflow-x-auto space-x-4'>
          {filteredForums.slice(0, 4).map((forum) => (
            <ForumCard key={forum.title} forum={forum} />
          ))}
        </div>

        <div className='mt-4'>
          <Button variant="outline" className="w-full">See More</Button>
        </div>
      </div>

      {/* Right Side: Community List */}
      <div className="w-1/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Communities</h2>
        <div className="space-y-4">
          {communities.map((community) => (
            <CommunityCard key={community.name} community={community} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ForumCard = ({ forum }: { forum: Forum }) => (
  <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden w-64">
    <Image
      src={forum.images[0]} // Display the first image
      alt={forum.title}
      className="object-cover h-48 w-full"
      width={400}
      height={200}
    />
    <div className="p-4 flex-1">
      <h3 className="text-lg font-medium">{forum.title}</h3>
      <p className="text-gray-700 mb-2">{forum.description}</p>
      <div className="text-gray-500 text-sm mb-2">{forum.date} - {forum.members} members</div>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <div className='flex items-center'>
          <ThumbsUp className="inline-block mr-1" />
          {forum.likes}
          <ThumbsDown className="inline-block mx-4" />
          {forum.unlikes}
        </div>
        <div className='flex items-center'>
          <MessageCircle className="inline-block mr-1" />
          {forum.comments}
          <SquareArrowOutUpRight className="inline-block ml-4" />
          {forum.externalLinks}
        </div>
      </div>
    </div>
  </div>
);

const CommunityCard = ({ community }: { community: { name: string; interests: string; image: string; } }) => (
  <div className="flex items-center bg-gray-100 p-4 rounded-lg">
    <div className="relative w-12 h-12">
      <Image
        src={community.image}
        alt={community.name}
        className="rounded-full object-cover"
        layout="fill"
      />
    </div>
    <div className="ml-4">
      <h3 className="font-medium">{community.name}</h3>
      <p className="text-gray-600 text-sm">{community.interests}</p>
    </div>
  </div>
);

export default Page;