import React from 'react'

import Image from "next/image"
import { Badge } from 'lucide-react'

import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { AspectRatio } from "@/components/ui/aspect-ratio"
//{ items }: { items: OverviewItem[] }

export const NotificationCard = ({ notification, onClick }) => ( 
    <div onClick={() => onClick(notification.title)}>
        <div className="flex items-top p-2 mb-2 space-x-4 cursor-pointer">
            {/* <Skeleton className="h-12 w-12 rounded-full animation-none" >
            {notification.images.map((image, index) => (
                <Image key={index} src={image} alt={`Image ${index + 1}`} className="rounded-full object-cover w-full h-full" />
            ))}
            </Skeleton>
            <div className="space-y-2">
                <Skeleton className={`px-4 py-2 rounded-md ${
                notification.type === 'Alert'? 'bg-orange-200 text-orange-600' 
                : notification.type === 'Recommendation'?'bg-blue-200 text-blue-600'
                : ''
                }`}>
                {notification.type}
                </Skeleton>
                <Skeleton>
                    <div className="flex justify-between items-start mb-1">
                    {notification.status === 'unread' ? (
                        <Badge color="primary" variant="dot">
                        <h3 className="text-lg font-medium">{notification.title}</h3>
                        </Badge>
                    ) : (
                        <h3 className="text-lg font-medium">{notification.title}</h3>
                    )}
                    <div className="text-gray-500 text-sm">{notification.date}</div>
                    </div>
                </Skeleton>
                <Skeleton className="text-gray-700 mb-2 mt-2">
                    {notification.content}
                </Skeleton>
            </div> */}
            <div className="w-12 h-12 mr-4">
                <AspectRatio ratio={1}>
                    {notification.images.map((image, index) => (
                    <Image key={index} width={200} height={200} src={image} alt={`Image ${index + 1}`} className="rounded-full object-cover w-full h-full" />
                    ))}
                </AspectRatio>
            </div>
            <div className="flex-1">
                <button className={`px-4 py-1 rounded-md disable ${
                    notification.type === 'Alert'? 'bg-orange-200 text-orange-600' 
                    : notification.type === 'Recommendation'?'bg-blue-200 text-blue-600'
                    : ''
                }`}>
                    {notification.type}
                </button>
                <div className="flex justify-between items-start mb-1">
                    {notification.status === 'unread' ? (
                        <Badge color="primary" variant="dot">
                            <h3 className="text-lg font-medium">{notification.title}</h3>
                        </Badge>
                    ) : (
                        <h3 className="text-lg font-medium">{notification.title}</h3>
                    )}
                    <div className="text-gray-500 text-sm">{notification.date}</div>
                </div>
                <p className="text-gray-700 mb-2 mt-2">{notification.content}</p>
            </div>
        </div>
        <Separator className="my-2" /> 
    </div>
);  