import React from 'react';

interface IntroTextProps {
  title: string;
  description: string;
}

const IntroText: React.FC<IntroTextProps> = ({ title, description }) => {
  return (
    <div
      className="flex flex-col items-center  sm:items-start gap-1 absolute md:static"
    >
      {/* Title */}
      <p className="text-heading-desktop-h6 md:text-heading-desktop-h5 font-semibold font-satoshi  text-black-50">
        {title}
      </p>
      {/* Description */}
      <p
        className="text-paragraph-sm md:text-paragraph-md font-normal font-inter leading-6 text-gray-600 "
      >
        {description}
      </p>
    </div>
  );
};

export default IntroText;
