import React from 'react'

const Features = () => {
  return (
    <section
      id="features"
      className=" gap-[10px] w-full flex flex-col  text-center  "
    >
      <div className="mx-[125px] gap-[60px] text-center  ">
        <div className=" mb-[60px] ">
          <div className="p-[10px] gap-[10px]  ">
            <h2 className=" font-inter font-medium text-paragraph-md text-accent-500 ">
              Features
            </h2>           
          </div>
          <div className="mb-8 gap-[11px] ">
            <h2 className="mx-8 mb-[18px] text-heading-h1 text-black-200 ">
              Farming Made Simple, Smart, and Profitable.
            </h2>
            <p className="mx-16 text-lg text-black-200 ">
              Track your crops in real-time, get AI-powered recommendations, and
              connect with buyers—all in one platform.
            </p>            
          </div>
        </div>

        <div className="w-full h-[602px] bg-gray-300 rounded-[8px]">
          
        </div>
      </div>
    </section>
  )
}

export default Features
