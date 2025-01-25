import IntroText from "@/components/IntroText";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="container">
      <IntroText title="Marketplace" description="Sell and Manage" />
      <div className="text-center my-[157px]">
        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <Image
            src="/images/Layer_2.png"
            alt="Sell and Manage"
            width='120'
            height='120'
          />
        </div>
        <p className="text-gray-600 mb-6">
          Start showcasing your products to reach more buyers and grow your
          business.
        </p>
        <Button className="bg-primary-600 hover:bg-primary-700">
          <PlusIcon className="mr-2 h-6 w-6" /> Add Product
        </Button>
      </div>
    </div>
  );
};

export default page;
