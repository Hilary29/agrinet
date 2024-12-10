'use client'

import Link from "next/link";



export default function Hero() {
  
  return (
    <section
      id="hero"
      className="px-32 pt-[162px] gap-[10px] w-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-white-50 to-primary-50"
    >
      <div className="gap-[57px] text-center ">
        <div className="mx-[282px] mb-[57px] pb-1 gap-6">
          <div className="mb-8  ">
            <h2 className="mx-8 mb-[18px] font-semibold font-satoshi text-heading-desktop-h1 text-black-100 ">
              Farming Made Simple, Smart, and Profitable.
            </h2>
            <p className="mx-16 font-inter font-regular text-paragraph-md text-black-200 ">
              Track your crops in real-time, get AI-powered recommendations, and
              connect with buyers—all in one platform.
            </p>            
          </div>
          <Link 
            className="bg-green-600 font-inter font-regular text-paragraph-md text-white-50 px-4 py-[10px] rounded-md hover:bg-green-700" 
            href={"/signup"}>
            Create a Free Account
          </Link>
        </div>

        <div className="w-full h-[602px] font-inter font-regular text-paragraph-md bg-gray-300 rounded-[8px]">
          Img
        </div>
      </div>
    </section>
  );
};
