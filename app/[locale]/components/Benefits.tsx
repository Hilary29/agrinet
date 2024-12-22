import Image from "next/image";

const benefits = [
  {
    title: "AgriNet For Farmers",
    description:
      "Boost efficiency, track crops, and sell directly to buyers—all in one platform.",
    icon: "/images/benefit1.png",
  },
  {
    title: "AgriNet For Consumers",
    description: "Access fresh, traceable produce directly from local farmers.",
    icon: "/images/benefit2.png",
  },
  {
    title: "AgriNet For Institutions",
    description:
      "Gain valuable insights and data for agricultural policy and research.",
    icon: "/images/benefit3.png",
  },
];

export default function BenefitsSection() {
  return (
    <section className="flex flex-col justify-center items-center  bg-green-50">
      <div className="py-16 px-4 md:px-17 w-full max-w-[1186px] mx-auto">
      <div className="text-center  mb-16">
        <p className=" text-accent-500 font-semibold text-paragraph-md p-2.5 mb-2.5">
          WHY CHOOSE US ?
        </p>
        <p className="text-3xl  md:text-3xl lg:text-4xl font-semibold font-satoshi text-heading-desktop-h2 text-black-100 mb-4 sm:mb-5 md:mb-6 ">
          Unlock the Full Potential of Your Farm and Business
        </p>
        <p className=" font-regular font-inter text-paragraph-md text-black-400 justify-center px-2.5  mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
          Trusted by farmers and institutions, AgriNet empowers you with smart
          tools to connect, streamline operations, and drive sustainable growth
          with real-time insights and automation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white-50 rounded-lg p-8">
            <Image
              src={benefit.icon}
              alt={benefit.title}
              width={115}
              height={115}
              className="mb-6"
            />
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-black-400 mb-4">{benefit.description}</p>
            <a
              href="#"
              className="text-accent-500 font-medium flex items-center"
            >
              Learn More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
      </div>

    </section>
  );
}
