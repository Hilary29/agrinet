import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section
      className="px-32 pt-[162px] gap-[10px] w-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-white-50 to-primary-50"
    >
      <div className="gap-[57px] text-center ">
        <div className="mx-[282px] mb-[57px] pb-1 gap-6">
          <div className="mb-8  ">
            <p className="mx-16 font-inter font-regular text-paragraph-md text-black-200 ">
              Track your crops in real-time, get AI-powered recommendations, and
              connect with buyers—all in one platform.
            </p>            
          </div>
        </div>

        <div className="w-full h-[602px] font-inter font-regular text-paragraph-md bg-gray-300 rounded-[8px]">
          {children}
        </div>
      </div>
    </section>
    );
  }
  