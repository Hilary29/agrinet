// File: app/layout.tsx

"use client";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import React, { useState } from 'react';
import Chatbot from "@/components/Chatbot";
import { metadata } from "./layoutMetadata"; // Import metadata here

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const openChatbot = () => setChatbotOpen(true);
  const closeChatbot = () => setChatbotOpen(false);

  return (
    <>
      <html lang="en">
        <head />
        <AuthProvider>
        <body >{children}
        </body>
        </AuthProvider>
      </html>
    </>
  );
}