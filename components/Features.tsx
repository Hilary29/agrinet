import React from "react";
import FeaturesCard from "./FeaturesCard";
import featureimg1 from '../public/images/feature-img1.png'



const Features = () => {
  return (
    <section id="features" className=" w-full     ">
      <div className="flex flex-col mx-[125px] ">
        <div className=" mb-[60px] text-center">
          <p className="p-[10px] font-inter font-semibold text-paragraph-md text-accent-600 ">
            FEATURES
          </p>
          <p className="font-semibold font-satoshi text-heading-desktop-h3 text-black-100 ">
              Tools for Everyone Growing, Supporting, or Innovating in
              Agriculture.
            </p>
            <p className=" mx-[318px] mt-[18px] text-paragraph-md font-regular text-black-400  ">
              Monitor your fields, unlock valuable insights, and collaborate
              with farmers, experts, and decision-makers to drive agricultural
              success.
            </p>
        </div>

        <div className=" gap-[24px] ">
          <div className="flex flex-col gap-6 justify-between">
            <div className="flex gap-6 justify-center ">
              <FeaturesCard title={"Step Up and Monitor"} description={"Sign up, connect your devices, and start tracking your farm in real time."} imageSrc={featureimg1}/>
              <FeaturesCard title={"Step Up and Monitor"} description={"Sign up, connect your devices, and start tracking your farm in real time."} imageSrc={featureimg1}/>
              <FeaturesCard title={"Step Up and Monitor"} description={"Sign up, connect your devices, and start tracking your farm in real time."} imageSrc={featureimg1}/>

            </div>
            <div className="flex gap-[10px]  justify-center ">
            <FeaturesCard title={"Online Marketplace for Farmers and Buyers."} description={"Sign up, connect your devices, and start tracking your farm in real time."} imageSrc={featureimg1}/>
              <FeaturesCard title={"Step Up and Monitor"} description={"Sign up, connect your devices, and start tracking your farm in real time."} imageSrc={featureimg1}/>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
