'use client'



export default function Hero() {
  
  return (
    <section
      id="hero"
      className="pt-16  w-full flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-3xl px-4">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Farming Made Simple, Smart, and Profitable.
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-8">
          Track your crops in real-time, get AI-powered recommendations, and
          connect with buyers—all in one platform.
        </p>

        {/* Call to Action */}
        <button className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700">
          Create a Free Account
        </button>
      </div>

      {/* Image Placeholder */}
      <div className="w-[1184px] h-[597px] bg-gray-300 rounded-lg mt-12"></div>
    </section>
  );
};
