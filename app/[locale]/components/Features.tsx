import React from 'react';
import Image from 'next/image';
import { useTranslations } from "next-intl";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  width: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageUrl, width }
) => (
  <div className={`flex flex-col items-center p-1.5 ${width} bg-white-50 shadow-6dp-v2 rounded-lg`}>
    <div className="w-full aspect-[1.85/1] bg-gray-200 relative rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="shadow-lg"
      />
    </div>
    <div className="flex flex-col items-start p-4 py-0.5 gap-1.5 w-full">
      <h3 className="text-[#1E1E1E] font-semibold text-inter text-paragraph-lg ">{title}</h3>
      <p className="text-[#4B4B4B] text-base leading-6">{description}</p>
    </div>
  </div>
);

const FeaturesSection: React.FC = () => {
  const t = useTranslations("Features-section");
  const features = [
    {
      title: "Monitor Your Fields with Ease",
      description: "Get real-time updates on soil, weather, and crop health with IoT-powered insights",
      imageUrl: "/images/feature-1.jpg",
      width: "w-full md:w-[calc(33.33%-1rem)]"
    },
    {
      title: "AI-Powered Recommendations",
      description: "Receive personalized advice based on your farm's unique conditions and crop types",
      imageUrl: "/images/feature-2.jpg",
      width: "w-full md:w-[calc(33.33%-1rem)]"
    },
    {
      title: "Marketplace Integration",
      description: "Connect directly with buyers and sellers in the agricultural supply chain",
      imageUrl: "/images/feature-3.jpg",
      width: "w-full md:w-[calc(33.33%-1rem)]"
    },
    {
      title: "Comprehensive Analytics Dashboard",
      description: "Visualize your farm's performance and make data-driven decisions",
      imageUrl: "/images/feature-4.jpg",
      width: "w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(40%-0.75rem)]"
    },
    {
      title: "Sustainable Farming Practices",
      description: "Learn and implement eco-friendly techniques to improve your farm's sustainability",
      imageUrl: "/images/feature-5.jpg",
      width: "w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(60%-0.75rem)]"
    },
  ];

  return (
    <section id='features' className="flex flex-col justify-center items-center py-16 px-4 md:px-17 w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center gap-15 w-full max-w-[1186px]">
        <div className="flex flex-col items-center mb-14 text-center">
          <p className=" text-accent-500 font-semibold text-paragraph-md p-2.5  rounded-full mb-2.5">
            {t("Features")}
          </p>
          <p className="text-3xl  md:text-3xl lg:text-4xl font-semibold font-satoshi text-heading-desktop-h2 text-black-100 mb-4 sm:mb-5 md:mb-6 ">
          {t("Features-title")}
          </p>
          <p className=" font-regular font-inter text-paragraph-md text-black-400 justify-center px-2.5  mb-6 sm:mb-8 md:mb-10 max-w-md sm:max-w-lg md:max-w-xl">
            {t("Features-subtitle")}
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {features.slice(3).map((feature, index) => (
              <FeatureCard key={index + 3} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

