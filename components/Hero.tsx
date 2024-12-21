import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start w-full  bg-gradient-to-br from-white-50 to-primary-50 px-4 sm:px-6 md:px-8 lg:px-32 pt-28 md:pt-24 lg:pt-32">
      <div className="flex flex-col items-center w-full max-w-[1184px] mx-auto gap-8 sm:gap-12 md:gap-14 lg:gap-16">
        <div className="flex flex-col items-center max-w-xl lg:max-w-2xl text-center ">
          <p className="text-heading-desktop-h5 sm:text-heading-desktop-h2  lg:text-heading-desktop-h2 font-semibold font-satoshi  text-black-100 mb-4 sm:mb-5 md:mb-6 ">
            Farming Made Simple, Smart, and Profitable.
          </p>
          <p className=" sm:text-paragraph-md font-regular font-inter text-paragraph-xs text-black-400  px-[58px] mb-6 sm:mb-8 md:mb-10 max-w-md sm:max-w-lg md:max-w-xl">
            Track your crops in real-time, get AI-powered recommendations, and connect with buyers—all in one platform.
          </p>
          <Link 
            className="bg-primary-600 text-white-50   font-regular font-inter text-paragraph-xs sm:text-paragraph-md rounded-md sm:px-4 sm:py-2.5 py-1.5 px-1.5  transition-colors duration-300 hover:bg-primary-700"
            href={"/signup"}>
            Create a free account
          </Link>
        </div>
        <div className="w-full aspect-video  rounded-lg overflow-hidden">
          <Image
            src="/images/hero-image.jpg"
            alt="AgriNet Platform Preview"
            width={1184}
            height={602}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

