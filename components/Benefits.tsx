import React from "react";
import Image from "next/image";
import benefit1 from "../public/images/for-farmers-img.png";
import benefit2 from "../public/images/cart-for-consumers.png";
import benefit3 from "../public/images/for-institutions.png";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className=" gap-[10px] w-full flex flex-col bg-[#EBF9EECC] "
    >
      <div className="mx-[127px] my-[100px] gap-[60px]  ">
        <div className=" mb-[60px] text-center items-center ">
          <div className="p-[10px] gap-[10px]  ">
            <h2 className=" font-inter font-medium text-paragraph-md text-accent-500 ">
              WHY CHOOSE US
            </h2>
          </div>
          <div className="mb-8 gap-[11px] ">
            <p className="mx-8 font-satoshi font-medium text-heading-desktop-h3 text-black-50 ">
              Unlock the Full Potential of Your Farm and Business
            </p>
            <p className="mx:[134px] md:mx-[234px] font-inter font-medium text-paragraph-md text-black-400 ">
              Trusted by farmers and institutions, AgriNet empowers you with
              smart tools to connect, streamline operations, and drive
              sustainable growth with real-time insights and automation.
            </p>
          </div>
        </div>

        <div className="flex gap-6 ">
          <div className="flex flex-col items-start px-7 py-7 gap-9  h-full rounded-md bg-white-50 ">
            <div className="w-[115px] h-[115px]">
              <Image
                src={benefit1}
                width={115}
                height={115}
                alt="benefit-card"
              />
            </div>
            <div className="flex flex-col gap-6 items-start">
              <p className="font-bold font-inter text-paragraph-lg text-black-100">
                AgriNet For Farmers
              </p>
              <p className="font-inter font-regular text-paragraph-md text-black-300">
                Boost efficiency, track crops, and sell directly to buyers—all
                in one platform.
              </p>
              <div className="font-inter font-medium text-paragraph-md flex items-center gap-1">
                <button className="flex items-center justify-center gap-1.5 text-[#06A5DB] ">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start px-7 py-7 gap-9  h-full rounded-md bg-white-50 ">
            <div className="w-[115px] h-[115px]">
              <Image
                src={benefit2}
                width={115}
                height={115}
                alt="benefit-card"
              />
            </div>
            <div className="flex flex-col gap-6 items-start">
              <p className="font-bold font-inter text-paragraph-lg text-black-100">
                AgriNet For Farmers
              </p>
              <p className="font-inter font-regular text-paragraph-md text-black-300">
                Boost efficiency, track crops, and sell directly to buyers—all
                in one platform.
              </p>
              <div className="font-inter font-medium text-paragraph-md flex items-center gap-1">
                <button className="flex items-center justify-center gap-1.5 text-[#06A5DB] ">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start px-7 py-7 gap-9  h-full rounded-md bg-white-50 ">
            <div className="w-[115px] h-[115px]">
              <Image
                src={benefit3}
                width={115}
                height={115}
                alt="benefit-card"
              />
            </div>
            <div className="flex flex-col gap-6 items-start">
              <p className="font-bold font-inter text-paragraph-lg text-black-100">
                AgriNet For Farmers
              </p>
              <p className="font-inter font-regular text-paragraph-md text-black-300">
                Boost efficiency, track crops, and sell directly to buyers—all
                in one platform.
              </p>
              <div className="font-inter font-medium text-paragraph-md flex items-center gap-1">
                <button className="flex items-center justify-center gap-1.5 text-[#06A5DB] ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
