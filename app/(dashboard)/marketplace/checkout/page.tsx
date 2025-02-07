"use client";
import IntroText from "@/components/IntroText";
import PaymentModal from "@/components/PaymentModal";

const Page=({params}:{params:{info:string[]}})=> {

  
  return (
    <div>
      <IntroText title="Checkout" description="Choose your Payment method" />
      <PaymentModal/>
    </div>
  );
}

export default Page
