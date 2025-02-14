import IntroText from "@/components/IntroText";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Profile, profiles } from "@/public/data/profile"
import { Separator } from "@/components/ui/separator";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from 'next/image';
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ShoppingCart } from "lucide-react";
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";

const getRandomProfile = (profiles: Profile[]): Profile => {
  const randomIndex = Math.floor(Math.random() * profiles.length);
  return profiles[randomIndex];
}
export const account = getRandomProfile(profiles);

const page = () => {

  return (
    <div >
      <IntroText
        title="Account"
        description="Your Account" />
      <div className="flex items-top m-10 mb-2 space-x-4 cursor-pointer ">
        <div className="w-32 h-32">
          <Avatar className="w-32 h-32">
            <AvatarImage src={account.avatar[0]} alt="@avatar" />
            <AvatarFallback>{account.name[0].toUpperCase()}{account.surname[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-xl font-medium">{account.name}{" "}{account.surname}</h3>
            <a href="/settings">
              <Button variant="outline">Edit profile</Button>
            </a>
          </div>
          <p className="mb-2">Storename : {account.storename}</p>
          <p className="mb-2 mt-2">Email : {account.email}</p>
          <p className="mb-2">Phone : {account.phone.join(' / ')}</p>
          <p className="mb-2">Address : {account.address}</p>
        </div>
      </div>
      <Separator className="my-4" />
      <div>
        <p className="text-xl font-medium mb-4">Farms Informations</p>
        <ScrollArea className="w-[300px] md:w-[600px] lg:w-full max-w-7xl whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {account.farms.map((farm) => (
              <div key={farm.farmer} className="shrink-0">
                <figure>
                  <div className="w-full sm:w-[300px] h-[200px] overflow-hidden rounded-md">
                    <AspectRatio ratio={1}>
                      {farm.image.map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={farm.name}
                          className="aspect-[3/4] h-full w-full object-cover"
                          width={300}
                          height={200}
                        />
                      ))}
                    </AspectRatio>
                  </div>
                  <figcaption className="px-2 py-2 text-muted-foreground">
                    {farm.name}{" : "}
                    <span className="font-semibold text-foreground">
                      {farm.location}
                    </span>
                  </figcaption>
                </figure>
                <div className="flex flex-wrap gap-2">
                  {farm.crops.map((crop, index) => (
                    <button key={index} className="flex justify-center items-center px-2 py-1 rounded-full text-base font-medium bg-green-200 text-primary-700 hover:text-primary-800">
                      {crop}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      {/* <div className="rounded-lg my-4 border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-xl font-medium leading-none tracking-tight">Forum Activity</h3>
        </div>
        <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">156</p>
            <p className="text-sm text-muted-foreground">Posts</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">342</p>
            <p className="text-sm text-muted-foreground">Comments</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">156</p>
            <p className="text-sm text-muted-foreground">Upvotes</p>
          </div>  
        </div>
      </div> */}
      {/* <div className="rounded-lg my-4 border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="space-y-1.5 p-6 flex flex-row items-center justify-between">
          <h3 className="text-xl font-medium leading-none tracking-tight">Marketplace Activity</h3>
          <Button variant="outline" className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
            <ShoppingCart/>
            View Marketplace
          </Button>
        </div>
        <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-sm text-muted-foreground">Products Listed</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">45</p>
            <p className="text-sm text-muted-foreground">Orders Completed</p>
          </div>
        </div>
      </div> */}
    </div>
  );

};

export default page;