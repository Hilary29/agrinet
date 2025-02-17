import { AppSidebar } from "@/components/app-sidebar";
import ChatbotButton from "@/components/ChatbotButton";
import Header2 from "@/components/Header2";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { UserRoleProvider } from "@/contexts/UserRoleContext"
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <UserRoleProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <Header2 />
              <div className="flex flex-1 flex-col p-6">
                {children}
                <ChatbotButton />
              </div>
            </SidebarInset>
          </SidebarProvider>
        </UserRoleProvider>
      </body>
    </html>
  );
}