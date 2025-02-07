"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeOff, Eye } from "lucide-react";
import { saveToken } from "../../../services/auth/saveTokenService";
//import { notifService } from "../../../services/notifService";
import {
  decodeToken,
  getAccessToken,
  login,
} from "../../../services/auth/authService";
import Image from "next/image";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(""); // Réinitialiser l'erreur avant de tenter de se connecter

    try {
      const jwtToken = await login(username, password);
      console.log("User authenticated:", jwtToken);

      const accessToken = getAccessToken(jwtToken);
      console.log("Access Token:", accessToken);

      const decodedToken = decodeToken(accessToken);
      console.log("Decoded Token:", decodedToken);

      // Chiffrer et sauvegarder le token
      await saveToken(accessToken);
      router.push("/marketplace/all-products");
    } catch (error) {
      console.log(error);
      // Vérification du type d'erreur
      const errorMessage =
        (error as Error).message || "Invalid credentials. Please try again.";
      setError(errorMessage); // Afficher le message d'erreur réel
      console.log(errorMessage);
    }
  };

  return (
    <div className="flex  justify-center  p-4">
      <div className="flex w-full max-w-[560px] flex-col items-center rounded-lg bg-white-50 p-6 md:p-10">
        <div className="w-full max-w-[480px] space-y-8">
          <p className="font-satoshi text-2xl font-semibold leading-9 text-black-50 md:text-heading-desktop-h4">
            Sign in to your account
          </p>
          {error && <p className="text-red-500 text-sm my-2">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="font-inter text-paragraph-lg font-medium "
                >
                  UserName or Name
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                  className="w-full rounded-lg border border-[#D6D6D6] p-3 font-inter text-base focus:border-[#2FB551] focus:outline-none focus:ring-1 focus:ring-[#2FB551]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="font-inter text-lg font-medium leading-7"
                  >
                    Password
                  </label>
                  <a
                    href="/forgot-password"
                    className="font-inter text-base font-medium text-[#2FB551] hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
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

            <div className="space-y-8">
              <label className="flex items-center gap-2 px-2">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-5 w-5 rounded border-[#C3C3C3] text-[#2FB551] focus:ring-[#2FB551]"
                />
                <span className="font-inter text-base text-[#1E1E1E]">
                  Remember me
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-md bg-[#2FB551] py-3 font-inter text-paragraph-md font-medium text-white-50 hover:bg-[#2FB551]/90"
              >
                Sign in
              </button>
            </div>
            <div className="space-y-4 mt-6">
              <p className="text-center font-inter text-base text-[#686868]">
                Or sign In with
              </p>
              <div className="flex justify-center  space-x-8">
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
            </div>
          </form>

          <p className="text-center font-inter text-paragraph-md font-medium text-[#1E1E1E]">
            New to Agrinet?{" "}
            <a href="/signup" className="text-[#2FB551] hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}