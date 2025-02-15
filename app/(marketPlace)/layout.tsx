
import { CartSlide } from '@/components/cart-slide';
import { CartProvider } from '@/contexts/cart-context';
import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <CartProvider>
            {children}
            <CartSlide />
          </CartProvider>
        </body>
      </html>
    );
  }
  