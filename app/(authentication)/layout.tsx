import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo2.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" bg-secondary-500 bg-cover bg-center min-h-screen flex flex-col ">
      <Link className="flex items-center gap-2 mx-auto pt-12 pb-8" href={"/"}>
        <Image src={logo} alt="Agrinet logo" className="w-10 h-[36px]" />
        <p className="font-poppins text-heading-desktop-h4 font-semibold text-left text-white-50">
          AgriNet
        </p>
      </Link>
      <div>
        {children}
      </div>  
    </main>
  );
}