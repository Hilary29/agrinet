"use client"

import IntroText from "@/components/IntroText";
import React, {useState} from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, CirclePlus, CircleUserRound, Clock, CreditCard, LockKeyhole, Mail, Package, PackageCheck, Pencil, ReceiptText, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { account } from "../account/page";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from 'next/image';
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Newspaper } from 'lucide-react';
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog" 


const Page = () => {

  
  return (
    <div>
      <IntroText
        title="Settings"
        description="Update parameters"
      />
      <Tabs defaultValue="account" className="mt-10">
        <TabsList>
          <TabsTrigger value="account">
            <CircleUserRound className="mr-2"/>
            Account
          </TabsTrigger>
          <TabsTrigger value="notification">
            <Bell className="mr-2"/>
            Notification
          </TabsTrigger>
          <TabsTrigger value="bills">
            <ReceiptText className="mr-2"/>
            Bills
          </TabsTrigger>
          <TabsTrigger value="security">
            <LockKeyhole className="mr-2"/>
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="mt-6 grid grid-rows gap-6">
          <div className="grid grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Avatar</CardTitle>
                <CardDescription>
                  Change your profile picture here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="w-48 h-48">
                  <Avatar className="w-48 h-48">
                    <AvatarImage src={account.avatar[0]} alt="@avatar" />
                    <AvatarFallback>{account.name[0].toUpperCase()}{account.surname[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                </div>
                <Input id="picture" type="file" />
              </CardContent>
              <CardFooter className="gap-4">
                <Button variant="outline">Save avatar</Button>
                <Button variant="destructive">reset</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you will be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" defaultValue={account.password} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirm">Confirm password</Label>
                  <Input id="confirm" type="password" />
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <Button variant="outline">Save password</Button>
                <Button variant="destructive">Discard</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription>
                  
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                
              </CardContent>
              <CardFooter className="gap-4">
                
              </CardFooter>
            </Card>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal details</CardTitle>
                <CardDescription>
                  Make changes to your profile here. Click save when you are done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue={account.name} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="surname">Surname</Label>
                  <Input id="surname" defaultValue={account.surname} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue={account.email} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue={account.phone} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue={account.address} />
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <Button variant="outline">Save changes</Button>
                <Button variant="destructive">Discard</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Store & Farm details</CardTitle>
                <CardDescription>
                  Make changes to your market here. Click save when you are done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="storename">StoreName</Label>
                  <Input id="storename" defaultValue={account.storename} />
                </div>
                <Separator className="my-2"/>
                <ScrollArea className="whitespace-nowrap rounded-md border">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div className="flex w-max space-x-4 p-4">
                        {account.farms.map((farm) => (
                        <div key={farm.farmer} className="shrink-0 cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out">
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
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Farm details</AlertDialogTitle>
                        <AlertDialogDescription className="space-y-2">
                          <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Farm picture</Label>
                            <Input id="picture" type="file" />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor="name">farm name</Label>
                            <Input id="name" type="name" />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" type="location" />
                          </div>
                          <div className="grid w-full gap-1.5">
                            <Label htmlFor="message">Crops</Label>
                            <Textarea placeholder="Type the crops separated with commas" id="message" />
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Save</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </CardContent>
              <CardFooter className="gap-4">
                <Button variant="outline">Save changes</Button>
                <Button variant="destructive">Discard</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="notification" className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification preferences</CardTitle>
              <CardDescription>
                Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service messages, such as payment, security or legal notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email address</Label>
                <Input type="email" id="email" defaultValue={account.email} required />
              </div>
              <div className="flex gap-4 items-center border border-1 rounded-[8px] p-2">
                <div className="p-2 bg-blue-100 rounded-[8px]">
                  <Newspaper/>
                </div>
                <div>
                  <Label htmlFor="newsletter">Our newsletter</Label>
                  <p className="text-sm textSecondary">We will always let you know about important changes</p>
                </div>
                <div className="ms-auto mr-1 pa-sm-1 pa-6 pl-7">
                  <Switch id="newsletter" color="blue"/>
                </div>
              </div>
              <div className="flex gap-4 items-center border border-1 rounded-[8px] p-2">
                <div className="p-2 bg-blue-100 rounded-[8px]">
                  <PackageCheck/>
                </div>
                <div>
                  <Label htmlFor="newsletter">Order Confirmation</Label>
                  <p className="text-sm textSecondary">You will be notified when customer order any product</p>
                </div>
                <div className="ms-auto mr-1 pa-sm-1 pa-6 pl-7">
                  <Switch id="newsletter" color="blue" defaultChecked/>
                </div>
              </div>
              <div className="flex gap-4 items-center border border-1 rounded-[8px] p-2">
                <div className="p-2 bg-blue-100 rounded-[8px]">
                  <Clock/>
                </div>
                <div>
                  <Label htmlFor="newsletter">Order Status Changed</Label>
                  <p className="text-sm textSecondary">You will be notified when customer make changes to the order</p>
                </div>
                <div className="ms-auto mr-1 pa-sm-1 pa-6 pl-7">
                  <Switch id="newsletter" color="blue" defaultChecked/>
                </div>
              </div>
              <div className="flex gap-4 items-center border border-1 rounded-[8px] p-2">
                <div className="p-2 bg-blue-100 rounded-[8px]">
                  <Truck/>
                </div>
                <div>
                  <Label htmlFor="newsletter">Order Delivered</Label>
                  <p className="text-sm textSecondary">You will be notified once the order is delivered</p>
                </div>
                <div className="ms-auto mr-1 pa-sm-1 pa-6 pl-7">
                  <Switch id="newsletter" color="blue" defaultChecked/>
                </div>
              </div>
              <div className="flex gap-4 items-center border border-1 rounded-[8px] p-2">
                <div className="p-2 bg-blue-100 rounded-[8px]">
                  <Mail/>
                </div>
                <div>
                  <Label htmlFor="newsletter">Email Notification</Label>
                  <p className="text-sm textSecondary">Turn on email notificaiton to get updates through email</p>
                </div>
                <div className="ms-auto mr-1 pa-sm-1 pa-6 pl-7">
                  <Switch id="newsletter" color="blue"/>
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-4">
              <Button variant="outline">Save</Button>
              <Button variant="destructive">Reset default</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="bills" className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing information</CardTitle>
                <CardDescription>
                  Update your billing information here.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 grid grid-cols-2 gap-6">
              <div>
                <div className="space-y-2">
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input id="businessname" type="name" defaultValue={account.storename} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-address">Business Address</Label>
                  <Input id="business-address" type="name" defaultValue={account.address} required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" type="name" defaultValue={account.surname}/>
                </div>
              </div>
              <div>
               <div className="space-y-2">
                  <Label htmlFor="business-sector">Business Sector</Label>
                  <Input id="business-sector" type="name" defaultValue={"Farming"} required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country*" type="name" defaultValue={"Cameroon"} required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" type="name" required />
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-4">
              <Button variant="outline">Save avatar</Button>
              <Button variant="destructive">reset</Button>
            </CardFooter>
          </Card>
          <div className="grid grid-rows-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan : <span className="text-primary">Entreprise</span></CardTitle>
                <CardDescription>
                  Thanks for being a premium member and supporting our development.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex gap-4 items-center border border-1 rounded-[8px] p-2">
                  <div className="p-2 bg-blue-100 rounded-[8px]">
                    <Package/>
                  </div>
                  <div>
                    <Label htmlFor="newsletter" className="text-gray-600">Current Plan</Label>
                    <p className="text-lg ">750.000 Monthly Visits</p>
                  </div>
                  <div className="ms-auto mr-1 pa-sm-1 pa-6 pl-7 cursor-pointer hover:bg-accent">
                    <CirclePlus />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <Button variant="outline">change plan</Button>
                <Button variant="destructive">Reset plan</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>
                  On 26 December, 2023
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex gap-4 items-center border border-1 rounded-[8px] p-2">
                  <div className="p-2 bg-blue-100 rounded-[8px]">
                    <CreditCard />
                  </div>
                  <div>
                    <Label htmlFor="newsletter">Visa</Label>
                    <p className="text-lg ">*****2102</p>
                  </div>
                  <div className="ms-auto mr-1 pa-sm-1 pa-6 pl-7 cursor-pointer hover:bg-accent">
                    <Pencil />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <Button variant="destructive">Cancel subscription</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="security">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;