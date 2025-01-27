import { AppSidebar2 } from "@/components/app-sidebar-2";
import Header2 from "@/components/Header2";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar2 />
          <SidebarInset>
            <Header2 />
            <div className="flex flex-1 flex-col p-6">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}