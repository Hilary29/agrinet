"use client"

import IntroText from '@/components/IntroText'
import { Forum, forums } from '@/public/data/forum'

import React, { useState } from 'react';
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Search, ChevronRight, ChevronLeft, ThumbsUp, ThumbsDown, MessageCircle, SquareArrowOutUpRight } from 'lucide-react';

const Page = () => {

  const tabs = [
    'All', 'Trending', 'Farm Equipment and Technology', 'Crop Management', 'Livestock Farming', 'Sustainable farming'
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);
  const handleTabClick = (tab: string) => setActiveTab(tab);

  const filteredForums = forums.filter((forum) => {
    if (activeTab === 'All') return true;
    return forum.category === activeTab;
  }).filter((forum) => forum.title.toLowerCase().includes(searchQuery.toLowerCase()));
  
  return (
    <div>
      <IntroText 
      title="Forum" 
      description="Join discussions, share farming tips, and connect with the community." />
      <div className="w-full py-10">
        <div className='flex justify-between'>
          <div className="flex items-center gap-2 mb-4">
            <Input
              type="text"
              placeholder="Search Forum"
              value={searchQuery}
              onChange={handleSearch}
              className='w-[600px]'
            />
            <Search className="mr-2" size={20} />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-4">
              <Button variant="outline">Create new post</Button>
              <Button className='bg-green-600'>Create new forum</Button>
            </div>
          </div>
        </div>
        <Carousel opts={{ align: 'start' }} className="w-full">
          <CarouselContent className="ml-2 md:ml-4">
            {tabs.map((tab) => (
              <CarouselItem key={tab} className="md:basis-1/3 lg:basis-1/5 ml-2">
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === tab
                      ? 'bg-green-200 text-green-600 hover:text-green-700'
                      : 'bg-gray-100 text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
        <div className='flex justify-between items-center inline-block mr-10'>
          <div>
            {filteredForums.map((forum) => (
              <ForumCard key={forum.title} forum={forum} />
            ))}
          </div>
          <div className='bg-blue-100 h-1/2 w-3/10'>
            
          </div>
        </div>
      </div>
    </div>
  )
};

const ForumCard = ({ forum }: { forum: Forum }) => (
  <div className="flex flex-row bg-white shadow-md rounded-lg w-2/3 p-4 mb-4">
    <div className="w-[200px] h-[200px] mr-4">
      <AspectRatio ratio={1}>
        {forum.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="rounded-lg object-cover w-full h-full"
            width={200} // Specify width
            height={200} // Specify height
          />
        ))}
      </AspectRatio>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-lg font-medium">{forum.title} .
          <Button variant="link" className='text-blue-400 text-lg'>Join</Button>
        </h3>
        <div className="text-gray-500 text-sm">{forum.date}</div>
      </div>
      <span className="text-gray-900 bg-gray-100 rounded-full px-2 py-1">
        {forum.members} members
      </span>
      <p className="text-gray-700 mb-2 mt-2">{forum.description}</p>
      <div className="flex justify-between items-center w-2/5 text-gray-500 text-sm">
        <div className='border border-gray-200 rounded-full px-2 py-2'>
          <ThumbsUp className="inline-block mr-1" />
          {forum.likes}
          <ThumbsDown className="inline-block mx-4" />
          {forum.unlikes}
        </div>
        <div>
          <MessageCircle className="inline-block mr-1" />
          {forum.comments}
        </div>
        <div>
          <SquareArrowOutUpRight className="inline-block mr-1" />
          {forum.externalLinks}
        </div>
      </div>
    </div>
  </div>
);

export default Page
