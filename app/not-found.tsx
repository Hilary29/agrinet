"use client";
import logo from "../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div>

      <div className="flex flex-col items-center justify-center pt-16">
      <Link className="flex items-center gap-2 py-16"  href={"/marketplace"}>
            <Image
              src={logo}
              alt="Agrinet logo"
              className="w-8 h-[24px] lg:w-10 lg:h-[36px]"
            />
            <p className="font-poppins text-paragraph-lg sm:text-heading-desktop-h6 lg:text-heading-desktop-h4 font-semibold text-left text-secondary-700">
              AgriNet
            </p>
          </Link>
        <div className="bg-white-50 rounded-2xl p-8 text-center max-w-md">
          <p className="text-4xl font-bold text-black-100 font-satoshi mb-8">
            Oops! Page Not Found
          </p>
          <p className="text-gray-600 mb-12">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link
            href="/marketplace"
            className="bg-primary-600 hover:bg-primary-700 text-white-50 text-paragraph-lg font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Back To Marketplace
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
