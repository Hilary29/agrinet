import React from "react";
import benefit1 from "../public/images/for-farmers-img.png";
import benefit2 from "../public/images/cart-for-consumers.png";
import benefit3 from "../public/images/for-institutions.png";
import BenefitsCard from "./BenefitsCard";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className=" gap-[10px] w-full flex flex-col bg-[#EBF9EECC] "
    >
      <div className="mx-[127px] my-[100px] gap-[60px]  ">
        <div className=" mb-[60px] text-center items-center ">
          <div className="p-[10px] gap-[10px]  ">
            <h2 className=" font-inter font-semibold text-paragraph-md text-accent-500 ">
              WHY CHOOSE US
            </h2>
          </div>
          <div className="mb-8 gap-[11px] ">
            <p className="mx-8 font-semibold font-satoshi text-heading-desktop-h3 text-black-50 ">
              Unlock the Full Potential of Your Farm and Business
            </p>
            <p className="mx:[134px] md:mx-[234px] font-inter font-medium text-paragraph-md text-black-400 ">
              Trusted by farmers and institutions, AgriNet empowers you with
              smart tools to connect, streamline operations, and drive
              sustainable growth with real-time insights and automation.
            </p>
          </div>
        </div>

        <div className="flex gap-6 justify-center ">
          <BenefitsCard
            title={"Agrinet for Farmers"}
            description={
              "Boost efficiency, track crops, and sell directly to buyers—all in one platform."
            }
            imageSrc={benefit1}
          />
          <BenefitsCard
            title={"Agrinet for Farmers"}
            description={
              "Boost efficiency, track crops, and sell directly to buyers—all in one platform."
            }
            imageSrc={benefit2}
          />
          <BenefitsCard
            title={"Agrinet for Farmers"}
            description={
              "Boost efficiency, track crops, and sell directly to buyers—all in one platform."
            }
            imageSrc={benefit3}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
