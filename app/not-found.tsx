"use client";
import Link from "next/link";
import Image from "next/image";

const error = async () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-primary-500">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/404.png"  // Path to the background image
          alt="Error Background"
          layout="fill" // Use layout fill to cover the entire container
          objectFit="cover" // Cover the container while maintaining aspect ratio
          className="z-0" // Send it to the background
        />
      </div>

      <div className="container relative z-10">
        <div className="flex justify-center">
          <div className="col-span-10 lg:col-span-6">
            <div className="text-center pb-10">
              <h2 className="mt-10 mb-5 h2 text-white"> Oops! Page Not Found </h2>
              <p className="mb-8 text-white">Error</p>
              
              <Link href="/" className="bg-error-400 text-white-50 text-xl rounded-md p-2 font-semibold">
                <span className="inline-block"> Back To Home </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default error;