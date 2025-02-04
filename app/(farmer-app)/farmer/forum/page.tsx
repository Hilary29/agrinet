"use client"

import IntroText from '@/components/IntroText'
import { Forum, forums } from '@/public/data/forum'
import { Community, communities } from '@/public/data/community';

import React, { useState } from 'react';
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { 
  Search, 
  ThumbsUp, 
  ThumbsDown, 
  MessageCircle, 
  SquareArrowOutUpRight, 
  Users,
  ArrowUpFromDot,
  ArrowDownToDot,
  ArrowBigDown,
  ArrowBigUp

} from 'lucide-react';


const Page = () => {

  const tabs = [
    "All",
    "Trending",
    "Farm Equipment and Technology",
    "Crop Management",
    "Livestock Farming",
    "Sustainable farming",
    "Overview",
    "Popular Topics",
    "Agricultural Innovations",
    "Soil and Water Management",
    "Organic Farming",
    "AgriTech Solutions",
    "Pest Control Strategies",
    "Harvesting Techniques",
    "Climate-Smart Agriculture",
    "Precision Farming",
    "Insights",
    "Equipment and Tools",
    "Plant Health",
    "Animal Care",
    "Sustainable Practices",
    "Weather Forecasts",
    "Market Trends",
    "Financial Tips",
    "Workshops & Training",
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
    <div className='container'>
      <IntroText 
        title="Forum" 
        description="Join discussions, share farming tips, and connect with the community." 
      />
      <div className="flex flex-col w-full py-6 sm:py-10 gap-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="relative flex-grow sm:flex-grow-0">
            <Input
              type="text"
              placeholder="Search Forum"
              value={searchQuery}
              onChange={handleSearch}
              className='w-full sm:w-[300px] lg:w-[496px]'
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-400"/>
          </div>
          <div className="flex items-center justify-between gap-4">
            <Button variant="outline" className="w-full sm:w-auto" >Create new post</Button>
            <Button className='bg-green-600 w-full sm:w-auto'>Create new forum</Button>
          </div>
        </div>
        <Carousel className="w-[300px] sm:w-[700px] md:w-[700px] xl:w-full max-w-[1286px] mx-auto  relative h-[40px]">
          <CarouselContent className="flex items-center ">
            {tabs.map((tab) => (
              <CarouselItem key={tab} className="flex-none ">
                <button
                  className={`flex justify-center items-center px-4 py-2 rounded-md text-base font-medium ${
                    activeTab === tab
                      ? "bg-green-200 text-primary-700 hover:text-primary-800"
                      : "bg-gray-100 text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 sm:-left-10" />
          <CarouselNext className="right-4 sm:-right-10" />
        </Carousel>
        <div className='flex flex-col lg:flex-row justify-between gap-6'>
          <div className="w-full lg:w-2/3">
            {filteredForums.map((forum) => (
              <ForumCard key={forum.title} forum={forum} />
            ))}
          </div>
          <div className=" w-full lg:w-1/3 h-64 lg:h-auto rounded-lg">
            <PopularCommunities />
          </div>
        </div>
      </div>
    </div>
  )
};

const ForumCard = ({ forum }: { forum: Forum }) => (
  <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg w-full p-4 mb-4">
    <div className="w-full sm:w-[200px] h-[200px] mb-4 sm:mb-0 sm:mr-4">
      <AspectRatio ratio={1}>
        {forum.images.map((image, index) => (
          <Image
            key={index}
            src={image || "/placeholder.svg"}
            width={200}
            height={200}
            alt={`Image ${index + 1}`}
            className="rounded-xl object-cover w-full h-full"
          />
        ))}
      </AspectRatio>
    </div>
    <div className="flex-1">
      <div className='flex flex-wrap gap-1 text-gray-500 text-sm'>
        <Image
          src={forum.community.image || "/placeholder.svg"}
          width={126}
          height={126}
          className=" mr-2 w-[32px] h-[32px] rounded-full"
          alt={`Image`}
        />
        <h3 className="text-lg font-medium mb-2 sm:mb-0">
          f/{forum.community.name}
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
        <h2 className="text-2xl font-semibold mb-2 sm:mb-0">
          {forum.title} .
          <Button variant="link" className="text-blue-400 text-lg pl-0 sm:pl-2">
            Join
          </Button>
        </h2>
        <div className="text-gray-500 text-sm">{forum.date}</div>
      </div>
      {/* <span className="inline-block text-gray-900 bg-gray-100 rounded-full px-2 py-1 mb-2">
        {forum.members} members
      </span> */}
      <p className="text-gray-700 mb-2">{forum.description}</p>
      <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
        <div className="flex border border-gray-200 rounded-full items-center">
          <Button variant="ghost" size="icon" className='rounded-full inline-block flex items-center'>
            <ArrowBigUp size={48}/>
          </Button>
          {forum.likes - forum.unlikes}
          <Button variant="ghost" size="icon" className='rounded-full inline-block flex items-center'>
            <ArrowBigDown size={48}/>
          </Button>
        </div>
        <div className="flex items-center">
          <MessageCircle className="inline-block mr-1" />
          {forum.comments}
        </div>
        <div className="flex items-center">
          <SquareArrowOutUpRight className="inline-block mr-1" />
          {forum.externalLinks}
        </div>
      </div>
    </div>
  </div>
);

function PopularCommunities() {
  return (
    <div className="w-full mx-auto p-4 bg-[#F0F0F080] rounded-lg">
      <p className="text-2xl font-semibold font-satoshi mb-8">
        Popular Communities
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8">
        {communities.map((community, index) => (
          <div key={index} className="flex flex-row bg-inherit border-none ">
            <Image
              key={index}
              src={community.image || "/placeholder.svg"}
              width={126}
              height={126}
              className=" mr-4 w-[64px] h-[64px] rounded-full"
              alt={`Image ${index + 1}`}
            />
            <div >
              <p className="font-semibold text-lg mb-2">f/{community.name}</p>
              <div className="flex items-center text-gray-600">
                <Users size={16} className="mr-2" />
                <span>{community.followers} followers</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page