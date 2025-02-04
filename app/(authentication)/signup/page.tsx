"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeOff, Eye } from "lucide-react";
import { AuthRoutes } from "@/config/routes";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // État pour stocker le message d'erreur
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch(AuthRoutes.REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(response.body);
        router.push("/signin-verify-email"); // Redirection vers la page d'accueil
      } else {
        // Lire le corps de la réponse pour obtenir le message d'erreur
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Erreur lors de la création de l’utilisateur"
        ); // Utiliser le message d'erreur de la réponse
        console.error(
          "Erreur lors de la création de l'utilisateur:",
          errorData.message
        );
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
      setErrorMessage("Network error during registration."); // Message d'erreur par défaut
    }
    console.log(formData); //a enlever
  };

  return (
    <div className="flex justify-center  p-4">
      <div className="flex w-full  max-w-[560px] flex-col items-center rounded-lg bg-white-50 p-6 md:p-10">
        <div className="w-full max-w-[480px] space-y-8">
          <p className="font-satoshi text-2xl font-semibold leading-9 text-black-50 md:text-heading-desktop-h4">
            Create your Agrinet account
          </p>
          {errorMessage && (
            <p className="text-red-500 text-sm my-2">{errorMessage}</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="font-inter text-paragraph-lg font-medium "
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#D6D6D6] p-3 font-inter text-base focus:border-[#2FB551] focus:outline-none focus:ring-1 focus:ring-[#2FB551]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="firstname"
                  className="font-inter text-lg font-medium leading-7"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#D6D6D6] p-3 font-inter text-base focus:border-[#2FB551] focus:outline-none focus:ring-1 focus:ring-[#2FB551]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lastname"
                  className="font-inter text-lg font-medium leading-7"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#D6D6D6] p-3 font-inter text-base focus:border-[#2FB551] focus:outline-none focus:ring-1 focus:ring-[#2FB551]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-inter text-lg font-medium leading-7"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#D6D6D6] p-3 font-inter text-base focus:border-[#2FB551] focus:outline-none focus:ring-1 focus:ring-[#2FB551]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="font-inter text-lg font-medium leading-7"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-[#D6D6D6] p-3 pr-12 font-inter text-base focus:border-[#2FB551] focus:outline-none focus:ring-1 focus:ring-[#2FB551]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#989898]"
                  >
                    {showPassword ? (
                      <Eye className="h-6 w-6" />
                    ) : (
                      <EyeOff className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <button
                type="submit"
                className="w-full rounded-md bg-[#2FB551] py-3 font-inter text-base font-medium text-white-50 hover:bg-[#2FB551]/90"
              >
                Sign up
              </button>

              <label className="flex items-start gap-2 px-2">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-[#C3C3C3] text-primary-600 focus:ring-primary-700 "
                />
                <span className="font-inter text-base text-[#686868]">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>
            </div>
            <div className="space-y-4 mt-6">
              <p className="text-center font-inter text-base text-[#686868]">
                Or sign up with
              </p>
              <div className="grid grid-cols-3 gap-8 mx-16">

                <div className="relative group">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white-50 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    google
                  </div>
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#D6D6D6] px-3 py-2.5 text-sm font-medium hover:bg-gray-50"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white-50 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Facebook
                  </div>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#D6D6D6] px-3 py-2.5 text-sm font-medium hover:bg-gray-50"
                >
                  <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                </div>


                <div className="relative group">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white-50 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Yowyob
                  </div>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#D6D6D6] px-3 py-2.5 text-sm font-medium hover:bg-gray-50"
                >
                  <Image
                    src="/images/yowyob.png"
                    alt="yowyob"
                    width={32}
                    height={32}
                    className=""
                  />
                </button>
                </div>

              </div>
            </div>
          </form>

          <p className="text-center font-inter text-base font-medium text-[#1E1E1E]">
            Already have an account?{" "}
            <a href="/signin" className="text-primary-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
