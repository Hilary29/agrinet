"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Phone, Video, Info, Plus, FileImage, Paperclip, Smile, ThumbsUp } from "lucide-react"
import IntroText from "@/components/IntroText";
import React from "react";

interface Message {
    id: number
    content: string
    timestamp: string
    sender: string
    avatar: string
  }
  
  interface Chat {
    id: number
    name: string
    avatar: string
    status?: string
    lastMessage?: string
  }
  
  const messages: Message[] = [
    {
      id: 1,
      content: "Hey! How has your day been?",
      timestamp: "10:05 AM",
      sender: "Jane Doe",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
    },
    {
      id: 2,
      content: "It has been good. I went for a run this morning and then had a nice breakfast. How about you?",
      timestamp: "10:10 AM",
      sender: "John Smith",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
    },
    {
      id: 3,
      content: "Awesome! I am just chilling outside.",
      timestamp: "10:54 PM",
      sender: "Jane Doe",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
    },
  ]
  
  const chats: Chat[] = [
    {
      id: 1,
      name: "Jane Doe",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
      status: "Typing...",
    },
    {
      id: 2,
      name: "John Doe",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
    },
    {
      id: 3,
      name: "Elizabeth Smith",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
    },
    {
      id: 4,
      name: "John Smith",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
    },
  ]
  

const page = () => {
  return (
    <div>
      <IntroText
        title="Chat"
        description="Connect and have discussion with other users."
      />
          <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">
              Chats <span className="text-muted-foreground">(4)</span>
            </h1>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <span className="sr-only">More options</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01"
                  />
                </svg>
              </Button>
              <Button variant="ghost" size="icon">
                <span className="sr-only">New chat</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <ScrollArea className="flex-1">
          {chats.map((chat) => (
            <div key={chat.id} className="flex items-center gap-3 p-4 hover:bg-muted/50 cursor-pointer">
              <Avatar>
                <AvatarImage src={chat.avatar} alt={chat.name} />
                <AvatarFallback>
                  {chat.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium">{chat.name}</div>
                {chat.status && <div className="text-sm text-muted-foreground">{chat.status}</div>}
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={chats[0].avatar} alt={chats[0].name} />
              <AvatarFallback>
                {chats[0].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{chats[0].name}</div>
              <div className="text-sm text-muted-foreground">Active 2 mins ago</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Info className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2 ${message.sender === "Jane Doe" ? "justify-start" : "justify-end"}`}
              >
                {message.sender === "Jane Doe" && (
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={message.avatar} alt={message.sender} />
                    <AvatarFallback>
                      {message.sender
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-2xl px-4 py-2 max-w-md ${
                    message.sender === "Jane Doe" ? "bg-muted" : "bg-primary text-primary-foreground"
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                </div>
                {message.sender !== "Jane Doe" && (
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={message.avatar} alt={message.sender} />
                    <AvatarFallback>
                      {message.sender
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <FileImage className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input placeholder="Type a message..." className="flex-1" />
            <Button variant="ghost" size="icon">
              <Smile className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ThumbsUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default page;
