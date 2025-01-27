import { AppSidebar } from "@/components/app-sidebar";
import ChatbotButton from "@/components/ChatbotButton";
import Header2 from "@/components/Header2";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  SmartphoneNfc,
  ShoppingCart,
  BrainCog,
  MessageCircle,
  Bell,
  Settings,
  UserRound,
  LogOut,
} from "lucide-react";

const data = {
  user: {
    name: "Ahmed Musa",
    email: "@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

const navigationFooter = [
  { name: "Settings", href: "/farmer/settings", icon: Settings },
  { name: "Account", href: "/farmer/account", icon: UserRound },
  { name: "Logout", href: "/farmer/logout", icon: LogOut },
];

const navigation = [
  { name: "Dashboard", href: "/farmer/dashboard", icon: LayoutDashboard },
  {
    name: "Connected Devices",
    href: "/farmer/connected-devices",
    icon: SmartphoneNfc,
  },
  {
    name: "Marketplace",
    icon: ShoppingCart,
    subItems: [
      { name: "All Products", href: "/farmer/marketplace/all-products" },
      { name: "Sell & Manage", href: "/farmer/marketplace/sell-and-manage" },
      {
        name: "My Marketplace profile",
        href: "/farmer/marketplace/marketplace-profile",
      },
      {
        name: "My Marketplace settings",
        href: "/farmer/marketplace/marketplace-settings",
      },
    ],
  },
  {
    name: "AI Recommandations",
    href: "/farmer/ai-recommendations",
    icon: BrainCog,
  },
  { name: "Forum", href: "/farmer/forum", icon: MessageCircle },
  { name: "Notifications", href: "/farmer/notifications", icon: Bell },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar
            navigation={navigation}
            navigationFooter={navigationFooter}
            userData={data.user}
          />
          <SidebarInset>
            <Header2 />
            <div className="flex flex-1 flex-col p-6">{children}
            <ChatbotButton />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
