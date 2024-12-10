import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="flex justify-center items-center py-[78px] px-4 bg-secondary-600 rounded-lg mx-auto mt-24 max-w-screen-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full px-6 md:px-10">
        <div className="flex flex-col items-start gap-4 max-w-lg text-center md:text-left">
          <h2 className="text-white-50 font-satoshi font-bold text-heading-desktop-h3">
            Ready to Transform Your Farm?
          </h2>

          <p className="text-white-50 font-inter text-paragraph-md">
            Create an account instantly to start smart farming with AgriNet.
            Gain access to real-time monitoring, AI-driven insights, and a
            marketplace designed to help your business thrive.
          </p>
        </div>

        <Link
          href="/signup"
          className="px-6 py-3  bg-primary-600 text-white-50 
          font-inter font-medium text-paragraph-md rounded-md 
          hover:bg-primary-700 "
        >
          <p className="hover:scale- active:scale-100 transition-transform duration-300 ease-in-out">
            Create a free account
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
