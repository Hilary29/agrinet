import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// Définition des métadonnées pour la page
export const metadata: Metadata = {
  title: "AgriNet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
