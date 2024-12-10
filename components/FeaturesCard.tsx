import React from "react";
import Image, { StaticImageData } from "next/image";

interface FeaturesCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col  p-1.5 bg-white shadow-6dp-v2 rounded-lg">
     <div
        className="h-[199px] mx-1 bg-gray-300 rounded-lg "
      >
        <Image 
        src={imageSrc} 
        width={205} 
        height={4} 
        alt={"features-image"} />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start mx-4  my-[18px] gap-6">
        <div className="flex flex-col gap-1.5">
          {/* Title */}
          <h3 className="font-semibold font-inter text-paragraph-lg text-black">
            {title}
          </h3>
          {/* Description */}
          <p className="text-paragraph-md font-regular text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
