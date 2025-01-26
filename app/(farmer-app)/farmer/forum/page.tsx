"use client";

import IntroText from "@/components/IntroText";
import { Forum, forums } from "@/public/data/forum";
import React, { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Search,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  SquareArrowOutUpRight,
} from "lucide-react";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);
  const handleTabClick = (tab: string) => setActiveTab(tab);

  const filteredForums = forums
    .filter((forum) => {
      if (activeTab === "All") return true;
      return forum.category === activeTab;
    })
    .filter((forum) =>
      forum.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="container ">
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
              className="w-full sm:w-[300px] lg:w-[496px]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-400" />
            </div>
          <div className="flex items-center justify-between gap-4">
            <Button variant="outline" className="w-full sm:w-auto">
              Create new post
            </Button>
            <Button className="bg-green-600 w-full sm:w-auto">
              Create new forum
            </Button>
          </div>
        </div>
        <Carousel className="w-[300px] sm:w-[700px] md:w-[700px] xl:w-full max-w-[1186px] mx-auto  relative h-[40px]">
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
          <CarouselPrevious className="left-0 sm:-left-10" />
          <CarouselNext className="right-0 sm:-right-10" />
        </Carousel>
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="w-full lg:w-2/3">
            {filteredForums.map((forum) => (
              <ForumCard key={forum.title} forum={forum} />
            ))}
          </div>
          <div className="bg-blue-50 w-full lg:w-1/3 h-64 lg:h-auto rounded-lg">
            {/* Content for the blue section */}
          </div>
        </div>
      </div>
    </div>
  );
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
            className="rounded-lg object-cover w-full h-full"
          />
        ))}
      </AspectRatio>
    </div>
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
        <h3 className="text-lg font-medium mb-2 sm:mb-0">
          {forum.title}
          <Button variant="link" className="text-blue-400 text-lg pl-0 sm:pl-2">
            Join
          </Button>
        </h3>
        <div className="text-gray-500 text-sm">{forum.date}</div>
      </div>
      <span className="inline-block text-gray-900 bg-gray-100 rounded-full px-2 py-1 mb-2">
        {forum.members} members
      </span>
      <p className="text-gray-700 mb-2">{forum.description}</p>
      <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
        <div className="border border-gray-200 rounded-full px-2 py-2">
          <ThumbsUp className="inline-block mr-1" />
          {forum.likes}
          <ThumbsDown className="inline-block mx-4" />
          {forum.unlikes}
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

export default Page;
