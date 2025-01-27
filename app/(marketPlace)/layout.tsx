import ChatbotButton from '@/components/ChatbotButton';
import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          {children}
          <ChatbotButton />
        </body>
      </html>
    );
  }
  