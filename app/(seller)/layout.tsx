import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            <Header />
          {children}
          <Footer />
        </body>
      </html>
    );
  }
  