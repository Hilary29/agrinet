"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Phone, Video, Info, Plus, FileImage, Paperclip, Smile, ThumbsUp, MessageSquare } from "lucide-react"
import IntroText from "@/components/IntroText"
import React, { useState } from "react"

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
    lastMessage: "Hey! How has your day been?"
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
    lastMessage: "See you tomorrow!"
  },
  {
    id: 3,
    name: "Elizabeth Smith",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
    lastMessage: "Thanks for your help!"
  },
  {
    id: 4,
    name: "John Smith",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
    lastMessage: "The meeting is at 3 PM"
  },
]

const Page = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)

  return (
    <div className="min-h-screen bg-white-50">
      <IntroText
        title="Chat"
        description="Connect and have discussion with other users."
      />
      <div className="container mx-auto px-4 py-6">
        {!selectedChat ? (
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-end mb-6">

              <Button className="bg-[#2fb551] hover:bg-[#28a047] text-white-50">
                <MessageSquare className="h-4 w-4 mr-2" />
                New Chat
              </Button>
            </div>
            <div className="space-y-2">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={chat.avatar} alt={chat.name} />
                      <AvatarFallback>
                        {chat.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{chat.name}</h3>
                        <span className="text-sm text-gray-500">12:34 PM</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                      {chat.status && (
                        <span className="text-sm text-[#2fb551]">{chat.status}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b px-4 py-3 flex items-center justify-between bg-[#2fb551] text-white">
              <div className="flex items-center gap-3">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setSelectedChat(null)}
                  className="hover:bg-white/20 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </Button>
                <Avatar>
                  <AvatarImage src={selectedChat.avatar} alt={selectedChat.name} />
                  <AvatarFallback>
                    {selectedChat.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{selectedChat.name}</div>
                  <div className="text-sm text-white/80">Active now</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="hover:bg-white/20 text-white">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/20 text-white">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/20 text-white">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <ScrollArea className="h-[600px] p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-end gap-2 ${
                      message.sender === selectedChat.name ? "justify-start" : "justify-end"
                    }`}
                  >
                    {message.sender === selectedChat.name && (
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
                        message.sender === selectedChat.name
                          ? "bg-gray-100"
                          : "bg-[#2fb551] text-white"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === selectedChat.name
                          ? "text-gray-500"
                          : "text-white/80"
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                    {message.sender !== selectedChat.name && (
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

            <div className="p-4 border-t bg-white">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#2fb551]">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#2fb551]">
                  <FileImage className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#2fb551]">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input 
                  placeholder="Type a message..." 
                  className="flex-1 focus-visible:ring-[#2fb551]" 
                />
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#2fb551]">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button className="bg-[#2fb551] hover:bg-[#28a047] text-white">
                  Send
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page;