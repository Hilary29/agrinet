"use client";
import Link from "next/link";

const error = async () => {
  return (
    <div
      >
      <div className="container">
        <div className="flex justify-center bg-primary-500">
          <div className="col-span-10 lg:col-span-6">
            <div className="text-center pb-10">
              <h2 className="mt-10 mb-5 h2"> Oops! Page Not Found </h2>
              <p className="mb-8">
                Error
              </p>
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
