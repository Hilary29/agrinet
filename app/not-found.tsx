"use client";
import Link from "next/link";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white-50">
      <div className="container flex items-center justify-between px-24 mx-auto">
        {/* Text Content on the Left */}
        <div className="flex-1 max-w-md">
          <h1 className="text-7xl font-bold font-satoshi text-green-500 mb-4">Sorry!,</h1>{" "}
          <h1 className="text-7xl font-bold font-satoshi text-gray-900 mb-4">this page is not available</h1>
          <h2 className="text-2xl font-bold font-inter text-gray-800 mb-4">The page you're looking for couldn't be found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Go back to the{" "}
            <Link href="/" className="text-green-500 hover:text-green-600 underline transition duration-300">
              Home page
            </Link>.
          </p>
        </div>

        {/* Image on the Right */}
        <div className="flex-1 flex justify-end">
          <Image
            src="/images/404.jpg"  // Path to the image
            alt="Error Illustration"
            width={1000} // Adjust width as needed
            height={1000} // Adjust height as needed
            className="object-contain" // Ensure the image fits well
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;