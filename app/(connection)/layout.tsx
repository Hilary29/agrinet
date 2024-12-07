import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main
      className="px-8 py-4 w-full flex flex-col items-center justify-center text-center bg-green-900"
    >
                <p className=" p-8 font-inter  font-bold text-paragraph-md text-black-100 ">
          AgriNet
        </p> 
      <div className=" text-center bg-white-50 rounded-[8px]">
        <div className="mx-[182px]  p-16">
        {children}  
        </div>
      </div>
    </main>
    );
  }
  