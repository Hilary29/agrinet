import React from 'react';
import Image from 'next/image';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  imageSrc: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description, imageSrc }) => (
  <div className="flex flex-col items-center p-2.5 gap-4 w-full md:w-[378px] bg-white shadow-md rounded-lg">
    <div className="w-full h-52 bg-[#EBF9EE] rounded-lg overflow-hidden">
      <Image src={imageSrc} alt={title} width={358} height={209} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col items-start gap-1 w-full">
      <span className="text-accent-500 font-semibold font-inter text-paragraph-md">Step {step}</span>
      <h3 className="text-[#1E1E1E] font-semibold font-inter text-paragraph-lg">{title}</h3>
      <p className="text-black-400 text-base">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Set Up and Monitor",
      description: "Sign up, connect your devices, and start tracking your farm in real time.",
      imageSrc: "/images/setup-monitor.jpg",
    },
    {
      title: "Analyze and Plan",
      description: "Use AI-powered insights to make data-driven decisions for your farm.",
      imageSrc: "/images/analyze-plan.jpg",
    },
    {
      title: "Optimize and Grow",
      description: "Implement recommendations to increase yield and sustainability.",
      imageSrc: "/images/optimize-grow.jpg",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center py-16 px-4 md:px-32 w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col items-start  w-full max-w-[1186px]">
        <div className="flex flex-col items-center w-full mb-14">
        <p className=" text-accent-500 font-semibold text-paragraph-md p-2.5 mb-2.5">
        HOW IT WORKS
        </p>
        <p className="text-3xl  md:text-3xl lg:text-4xl font-semibold font-satoshi text-heading-desktop-h2 text-black-100 mb-4 sm:mb-5 md:mb-6 ">
        How AgriNet Works
        </p>
        <p className=" font-regular font-inter text-paragraph-md text-black-400 justify-center px-2.5  mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
        From setup to growth, AgriNet makes farming smarter and easier in just a few steps.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

