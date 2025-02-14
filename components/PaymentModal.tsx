import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import axios from "axios";
import { PAYMENT_ROUTE } from "@/config/routes";

interface PaymentCart {
  transaction_amount: number;
  Productname: string;
  service_quantity: number;
}

interface Payment {
  payer_email: string; //fourni auth-service
  payer_name: string; //fourni auth-service
  payer_phone_number: string;
  payer_lang: string; //fourni auth-service
  transaction_amount: number; //fourni auth-service
}

const PaymentModal = () => {
  const [datas, setData] = useState<any>();
  useEffect(() => {
    const data = sessionStorage.getItem("decodedToken");
    if (data) {
      console.log(data);

      setData(JSON.parse(data));
    }
  }, []);

  const [credent, setCredent] = useState<Payment>({
    payer_email: "", //fourni auth-service
    payer_name: "", //fourni auth-service
    payer_phone_number: "",
    payer_lang: "", //fourni auth-service
    transaction_amount: 0, //fourni auth-service
  });
  const paymentData = localStorage.getItem("paymentData");

  const handleCheckout = async () => {
    try {
      const data = JSON.stringify(credent);
      
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${PAYMENT_ROUTE}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data: data
      };
      
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      // Vérifiez si l'erreur a un message, sinon affichez un message générique
      const errorMessage = error.response ? error.response.data : error.message;
      console.error(errorMessage);
      toast.error("Failed to create order: " + errorMessage);
    }
  };
  const [isActive, setIsActive] = useState(3);
  const [phone, setPhone] = useState("");
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    setCredent((prevData) => ({
      ...prevData,
      payer_email: datas?.email,
      payer_name: datas?.name,
      payer_phone_number: phone,
      payer_lang: "fr",
      transaction_amount: Number(paymentData),
    }));
  }, [phone]);

  return (
    <div className="bg-white-50 rounded-2xl max-w-7xl p-3 sm:p-0 lg:p-6 mb-5">
      <ul className="flex flex-wrap items-center gap-6">
        <li>
          <div className="flex items-center gap-2">
            <button
              className={`flex items-center gap-2 h-14  rounded-lg hover:bg-primary-700 hover:text-white-50 border-2 border-gray-500 p-4 ${
                isActive == 0 ? "bg-primary-700 text-white-50" : ""
              } `}
              onClick={() => {
                setIsActive(0);
              }}
            >
              <Image
                src={"/images/credit-card.png"}
                alt="Icone"
                width={50}
                height={50}
              />
              <label
                className="inline-block text-lg font-medium cursor-pointer"
                htmlFor="credit-card"
              >
                Credit card
              </label>
            </button>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <button
              className={`flex items-center gap-2 h-14  rounded-lg hover:bg-primary-700 hover:text-white-50 border-2 border-gray-500 p-4 ${
                isActive == 1 ? "bg-primary-700 text-white-50" : ""
              } `}
              onClick={() => {
                setIsActive(1);
              }}
            >
              <Image
                src={"/images/debit-card.png"}
                alt="Icone"
                width={50}
                height={50}
              />
              <label
                className="inline-block text-lg font-medium cursor-pointer"
                htmlFor="debit-card"
              >
                debit card
              </label>
            </button>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <button
              className={`flex items-center gap-2 h-14  rounded-lg hover:bg-primary-700 hover:text-white-50 border-2 border-gray-500 p-4 ${
                isActive == 2 ? "bg-primary-700 text-white-50" : ""
              } `}
              onClick={() => {
                setIsActive(2);
              }}
            >
              <Image
                src={"/images/paypal-transparent.png"}
                alt="Icone"
                width={50}
                height={50}
              />
              <label
                className="inline-block text-lg font-medium cursor-pointer"
                htmlFor="paypal"
              >
                Paypal
              </label>
            </button>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <button
              className={`flex items-center gap-2 h-14  rounded-lg hover:bg-primary-700 hover:text-white-50 border-2 border-gray-500 p-4 ${
                isActive == 3 ? "bg-primary-700 text-white-50" : ""
              } `}
              onClick={() => {
                setIsActive(3);
              }}
            >
              <Image
                src={"/images/mobile--money.png"}
                alt="Icone"
                width={50}
                height={50}
              />
              <label
                className="inline-block text-lg font-medium cursor-pointer"
                htmlFor="Mobile-Money"
              >
                Mobile Money
              </label>
            </button>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <button
              className={`flex items-center gap-2 h-14  rounded-lg hover:bg-primary-700 hover:text-white-50 border-2 border-gray-500 p-4 ${
                isActive == 4 ? "bg-primary-700 text-white-50" : ""
              } `}
              onClick={() => {
                setIsActive(4);
              }}
            >
              <Image
                src={"/images/orange-money.png"}
                alt="Icone"
                width={50}
                height={50}
              />
              <label
                className="inline-block text-lg font-medium cursor-pointer"
                htmlFor="Orange-Money"
              >
                Orange Money
              </label>
            </button>
          </div>
        </li>
      </ul>
      <div className="border border-dashed my-6"></div>

      {isActive <= 2 ? (
        <>
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12">
              <label
                htmlFor="card-number"
                className="text-xl font-medium block mb-3"
              >
                Card number
              </label>
              <input
                type="text"
                className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-lg py-3 px-5"
                placeholder="2456 1665 5155 5151"
                id="card-number"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <label
                htmlFor="expiry-date"
                className="text-xl font-medium block mb-3"
              >
                Expiry date
              </label>
              <input
                type="text"
                className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-lg py-3 px-5"
                placeholder="DD/MM/YY"
                id="expiry-date"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <label htmlFor="cvc" className="text-xl font-medium block mb-3">
                CVC / CVV
              </label>
              <input
                type="text"
                className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-lg py-3 px-5"
                placeholder="3 digits"
                id="cvc"
              />
            </div>
            <div className="col-span-12">
              <label
                htmlFor="card-name"
                className="text-xl font-medium block mb-3"
              >
                Name on card
              </label>
              <input
                type="text"
                className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-lg py-3 px-5"
                placeholder="Jab Archur"
                id="card-name"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-12 gap-4 lg:gap-6 ">
          <div className="col-span-12 flex gap-3 h-70 bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-lg py-3 px-5">
            <Image
              src={"/images/cameroon.jpeg"}
              alt="Icone"
              width={30}
              height={30}
            />
            <input
              type="text"
              placeholder="+237 699 99 99 99"
              value={phone}
              onChange={handlePhone}
            />
          </div>
          <div className="col-span-12">
            <label
              htmlFor="card-number"
              className="text-xl font-medium block mb-3"
            >
              Payable Amount
            </label>
            <input
              type="text"
              className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-lg py-3 px-5"
              id="card-number"
              value={paymentData?.toString()}
            />
          </div>
        </div>
      )}

      <button
        className="bg-primary-400 w-[30%] p-3 rounded-lg text-white-50 flex items-center justify-center mt-10 text-xl ml-[35%]"
        onClick={handleCheckout}
      >
        Confirm payment
      </button>
    </div>
  );
};

export default PaymentModal;