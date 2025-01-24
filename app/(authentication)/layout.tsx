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
    <main className=" bg-secondary-500 bg-cover bg-center min-h-screen flex flex-col pt-12 lg:pt-[126px]">
      <Link className="flex items-center gap-2 mx-auto pb-8 lg:pb-16 " href={"/"}>
        <Image src={logo} alt="Agrinet logo" className="w-10 h-[32px] " />
        <p className="font-poppins text-heading-desktop-h4 font-semibold  text-white-50">
          AgriNet
        </p>
      </Link>
      <div className="">
        {children}
      </div>  
    </main>
  );
}