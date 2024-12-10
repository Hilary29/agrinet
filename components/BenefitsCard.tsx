import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface BenefitsCardProps {
    title: string; 
    description: string; 
    imageSrc: StaticImageData; 
  }

  const BenefitsCard: React.FC<BenefitsCardProps> = ({
    title,
    description,
    imageSrc,
  }) => {
  return (
    <div className="flex flex-col items-start px-7 py-7 gap-9  h-full rounded-md bg-white-50 ">
    <div className="w-[115px] h-[115px]">
      <Image
        src={imageSrc}
        width={115}
        height={115}
        alt={"benefit-image"}
      />
    </div>
    <div className="flex flex-col gap-6 items-start">
      <p className="font-bold font-inter text-paragraph-lg text-black-100">
        {title}
      </p>
      <p className="font-inter font-regular text-paragraph-md text-black-300">
      {description}
      </p>
      <div className="font-inter font-medium text-paragraph-md flex items-center gap-1">
        <button className="flex items-center justify-center gap-1.5 text-[#06A5DB] ">
          Learn More
        </button>
      </div>
    </div>
  </div>
  )
}

export default BenefitsCard;

