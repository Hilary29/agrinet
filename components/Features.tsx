import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const features1 = [
  {
    title: "Monitor Your Fields with Ease",
    description:
      "Get real-time updates on soil, weather, and crop health with IoT-powered insights",
    imageUrl: "/images/feature-img1.jpg",
  },
  {
    title: "Personalized AI Recommendations.",
    description:
      "Smarter advice for irrigation, planting, and pest control tailored to your farm.",
    imageUrl: "/images/feature-img2.jpg",
  },
  {
    title: "Learn and Grow with Expert Resources",
    description:
      "Access tutorials, blogs, and podcasts to improve your farming practices.",
    imageUrl: "/images/feature-img3.jpg",
  },
];

const features2 = [
  {
    
    imageUrl: "/images/feature-img4.png",
    title: "Online Marketplace for Farmers and Buyers.",
    description: "Connect with buyers, get fair prices, and streamline your sales process effortlessly.",
  },
  {
    
    imageUrl: "/images/feature-img5.jpg",
    title: "Real-time Product Traceability.",
    description: "Track your products from farm to table, ensuring quality and building trust with buyers.",
  },
];

function FeatureCard({ title, description, imageUrl }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center rounded-md bg-white-50 p-1.5 shadow-6dp-v2">
      <div className="relative h-[199px] w-full overflow-hidden bg-gray-300 rounded-lg ">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex w-full flex-col gap-6 p-4 sm:p-[18px]">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-inter text-lg font-semibold leading-7 tracking-[-0.01em] text-[#1E1E1E]">
            {title}
          </h3>
          <p className="font-inter text-base font-normal leading-6 tracking-[-0.01em] text-[#4B4B4B]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}


export default function Features() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-[1186px] ">
        <div className="flex flex-col text-center w-full mb-14 ">
          <p className=" text-accent-500 font-semibold text-paragraph-md p-2.5 mb-2.5">
            FEATURES
          </p>
          <p className="text-3xl  md:text-3xl lg:text-4xl font-semibold font-satoshi text-heading-desktop-h2 text-black-100 mb-4 sm:mb-5 md:mb-6 ">
            Tools for Everyone Growing, Supporting, or Innovating in
            Agriculture.
          </p>
          <p className=" font-regular font-inter text-paragraph-md text-black-400 justify-center px-2.5 max-w-2xl mx-auto">
            Monitor your fields, unlock valuable insights, and collaborate with
            farmers, experts, and decision-makers to drive agricultural success.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features1.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 mx-auto px-4 md:px-0">
        {features2.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
            />
          ))}
    </div>
        </div>

      </div>
    </section>
  );
}
