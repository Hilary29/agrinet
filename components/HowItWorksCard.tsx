import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface CardProps {
    step: string;
    title: string;
    description: string;
    imageSrc: StaticImageData;
  }
  
  const HowItWorksCard: React.FC<CardProps> = ({ 
    step, title, description, imageSrc }) => {
    return (
      <div className="flex flex-col items-center p-2.5 gap-4 w-[378px] h-[382px] bg-white shadow-lg rounded-lg">
        <Image
        src={imageSrc}
        width={165}
        height={165}
        alt={"features-image"}
      />
        {/* Text Content */}
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="text-accent-500 text-sm font-bold">{step}</p>
          <h3 className="text-lg font-bold text-black-200">{title}</h3>
          <p className="text-sm text-black-400">{description}</p>
        </div>
      </div>
    );
  };

  export default HowItWorksCard;