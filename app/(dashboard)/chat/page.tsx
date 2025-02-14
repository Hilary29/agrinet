"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Phone,
  Video,
  Info,
  Plus,
  FileImage,
  Paperclip,
  Smile,
  ThumbsUp,
  MoreVertical,
  PenSquare,
  ArrowLeft,
} from "lucide-react"
import IntroText from "@/components/IntroText"

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
    content: "What about the truck's delivery ?",
    timestamp: "10:05 AM",
    sender: "Green Agro Yaounde",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
  },
  {
    id: 2,
    content: "It has been good. I went for a run this morning and then had a nice breakfast. How about you?",
    timestamp: "10:10 AM",
    sender: "Manga",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
  },
  {
    id: 3,
    content: "Awesome! I am just chilling outside.",
    timestamp: "10:54 PM",
    sender: "Pablo",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
  },
]

const chats: Chat[] = [
  {
    id: 1,
    name: "Green Agro Yaounde",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
    status: "Typing...",
  },
  {
    id: 2,
    name: "Janice Shop",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
  },
  {
    id: 3,
    name: "Manga",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
  },
  {
    id: 4,
    name: "Pablo",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-x0C2jW6gJjwGK3IQOcvsrzHXNHBejs.png",
  },
]

const Page = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)

  return (
    <div>
{/*       <IntroText title="Chat" description="Connect and have discussion with other users." /> */}
      <div className="flex h-screen bg-white-50">
        {/* Conversations List */}
        <div className={`${selectedChat ? "hidden md:flex" : "flex"} w-full md:w-80 border-r flex-col`}>
          <div className=" border-b">
            <div className="flex items-center justify-between">
              <p className="text-heading-desktop-h6 md:text-heading-desktop-h5 font-semibold font-satoshi  text-black-50">
                Discussions <span className="text-muted-foreground">({chats.length})</span>
              </p>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <PenSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <ScrollArea className="flex-1">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => setSelectedChat(chat)}
              >
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
                  {chat.status && <div className="text-sm text-[#2fb551]">{chat.status}</div>}
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Chat Area */}
        {selectedChat ? (
          <div className={`${selectedChat ? "flex" : "hidden"} flex-1 flex-col bg-white-50`}>
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setSelectedChat(null)}>
                  <ArrowLeft className="h-4 w-4" />
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
                  <div className="text-sm text-[#2fb551]">Active 2 mins ago</div>
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

            <ScrollArea className="flex-1 ">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-end gap-2 ${message.sender === selectedChat.name ? "justify-start" : "justify-end"}`}
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
                        message.sender === selectedChat.name ? "bg-gray-100" : "bg-[#2fb551] text-white-50"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
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
                <Button variant="ghost" size="icon" className="text-[#2fb551]">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Select a conversation</h3>
              <p className="text-sm text-gray-500">Choose from your existing conversations or start a new one.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page

