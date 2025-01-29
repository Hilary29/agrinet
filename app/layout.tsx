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
          <body>
            {children}
            <button
              onClick={openChatbot}
              className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
              aria-label="Open Chatbot"
            >
              Chat
            </button>
            {isChatbotOpen && <Chatbot onClose={closeChatbot} />}
          </body>
        </AuthProvider>
      </html>
    </>
  );
}