import React from 'react'
interface CardProps {
  step: string;
  title: string;
  description: string;
}

const Cards: React.FC<CardProps> = ({ step, title, description }) => {
  return (
    <div className="flex flex-col items-center p-1 gap-1 w-[478px] h-[482px] bg-gray-100 rounded-lg">

      {/* Text Content */}
      <div className="flex flex-col items-start gap-2 w-full">
        <p className="text-accent-500 text-sm font-bold">{step}</p>
        <h3 className="text-lg font-bold text-black-500">{title}</h3>
        <p className="text-sm text-black-400">{description}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="features" className=" gap-[10px] w-full flex flex-col    ">
      <div className="mx-[125px] gap-[60px] text-center">
        <div className=" mb-[60px] ">
          <p className="p-[10px] gap-[10px] font-inter font-semibold text-paragraph-md text-accent-600 ">
            TESTIMONIALS
          </p>
          <div className=" gap-[11px] ">
            <p className="font-medium font-satoshi text-heading-desktop-h3 text-black-100 ">
            Trusted by Farmers, Institutions, and Communities
            </p>
            <p className=" mx-[318px] mt-[18px] justify-center text-paragraph-md font-regular text-black-400  ">
              Monitor your fields, unlock valuable insights, and collaborate
              with farmers, experts, and decision-makers to drive agricultural
              success.
            </p>
          </div>
        </div> 
      <div className="flex flex-row justify-center gap-4">
        <Cards step="One" title="Titre" description="Description" />
        <Cards step="One" title="Titre" description="Description" />
        <Cards step="One" title="Titre" description="Description" />
      </div>
      </div>
    </section>
  )
}

export default Testimonials
