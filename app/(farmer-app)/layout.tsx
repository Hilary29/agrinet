import { AppSidebar } from '@/components/app-sidebar';
import Header2 from '@/components/Header2';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
        <SidebarProvider>
<AppSidebar />
<SidebarInset>
  <Header2/>
  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
  {children}
</div>
</SidebarInset>
</SidebarProvider>


          
        </body>
      </html>
    );
  }
  

















