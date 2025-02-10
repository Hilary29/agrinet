import {countries, languages} from "countries-list";
import React, { useEffect, useState } from 'react';
import { FaLeaf, FaBuilding } from 'react-icons/fa';
import { useRouter } from "next/navigation";
import Image from "next/image";

const FarmerForm = () => {
    const [formData, setFormData] = useState({
      userId: "",
      phoneNumber: "",
      email: "",
      avatarPicture: "",
      profilePicture: "",
      businessActorName: "",
      isIndividual: true,
      baType: "Farmer",
      isAvailable: true,
      dateOfBirth: "",
      age: 0,
      gender: "",
      nationality: "",
      profession: "",
      paymentMethods: [],
      isVerified: true,
      isLocked: true,
      description: "",
      reviews: "",
    });

    const router=useRouter()
  
    const [datas, setData] = useState<string | null>();
    const countryOptions = Object.entries(countries).map(([code, country]) => ({
      value: code,
      label: country.name,
    }));
  
    const paymentMethodsOptions = [
      { value: 'Bank Card', label: 'Bank Card', icon: '/images/credit-card.png' },
      { value: 'Paypal', label: 'Paypal', icon: '/images/paypal-transparent.png' },
      { value: 'Orange Money', label: 'Orange Money', icon: '/images/orange-money.png' },
      { value: 'Mobile Money', label: 'Mobile Money', icon: '/images/mobile--money.png' },
      { value: 'Cash', label: 'Cash', icon: '/images/salary.png' },
    ];
  
    useEffect(() => {
      const data = sessionStorage.getItem("decodedToken");
      if (data) {
        setData(JSON.parse(data));
      }
    }, []);
  
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>)  => {
      const { name, value } = e.target;
  
      setFormData((prevData) => ({
        ...prevData,
        userId: datas?.sub,
        email: datas?.email,
        [name]: value,
      }));
    };
  
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const date = e.target.value;
      setFormData((prevData) => ({
        ...prevData,
        dateOfBirth: date,
        age: calculateAge(date),
      }));
    };
  
    const handlePaymentMethodToggle = (method: string) => {
      setFormData((prevData) => {
        const newMethods = prevData.paymentMethods.includes(method)
          ? prevData.paymentMethods.filter(m => m !== method)
          : [...prevData.paymentMethods, method];
        return { ...prevData, paymentMethods: newMethods };
      });
    };
  
    const calculateAge = (dateOfBirth: string) => {
      const birthDate = new Date(dateOfBirth);
      const ageDifMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDifMs); // milliseconds since birth
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      router.push("/pricing")
    };
  
    return (
      <div className="mx-auto p-6 bg-white-50 shadow-6dp-v2 rounded-md max-w-5xl w-[600px] ">
        <h2 className="text-2xl font-semibold mb-4 text-center text-primary-800 flex items-center justify-center"><FaLeaf/>Create Farmer Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="businessActorName">Business Actor Name</label>
            <input
              type="text"
              name="businessActorName"
              id="businessActorName"
              placeholder="Business Actor Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-1" htmlFor="nationality">Nationality</label>
            <select
              name="nationality"
              id="nationality"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            >
              {countryOptions.map((country) => (
                <option value={country.value} key={country.value}>{country.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1" htmlFor="profession">Profession</label>
            <input
              type="text"
              name="profession"
              id="profession"
              placeholder="Profession"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleDateChange}
            />
          </div>
          <div>
            <label className="block mb-1">Payment Methods</label>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethodsOptions.map((method) => (
                <div
                  key={method.value}
                  className={`flex items-center p-2 border rounded cursor-pointer ${formData.paymentMethods.includes(method.value) ? 'bg-blue-200' : 'bg-white'}`}
                  onClick={() => handlePaymentMethodToggle(method.value)}
                >
                  <Image src={method.icon} alt={method.label} width={24} height={24} className="w-12 h-8 mr-2" />
                  <span>{method.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-1" htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="w-[30%] ml-[30%] bg-primary-500 text-white-50 p-2 rounded hover:bg-primary-800 transition">Create</button>
        </form>
      </div>
    );
  };

export default FarmerForm