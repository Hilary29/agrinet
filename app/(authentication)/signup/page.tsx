"use client"

import { useState } from "react"
import { EyeOff, Eye } from "lucide-react"

type Role = "farmer" | "not-farmer"

export default function Page() {
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState<Role>("farmer")
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="flex justify-center  p-4">
      <div className="flex w-full  max-w-[560px] flex-col items-center rounded-lg bg-white-50 p-6 md:p-10">
        <div className="w-full max-w-[480px] space-y-8">
          <h1 className="font-satoshi text-2xl font-semibold leading-9 text-black-50 md:text-heading-desktop-h4">
            Create your Agrinet account
          </h1>

          <form className="space-y-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="font-inter text-lg font-medium leading-7">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-[#D6D6D6] p-3 font-inter text-base focus:border-[#2FB551] focus:outline-none focus:ring-1 focus:ring-[#2FB551]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="fullName" className="font-inter text-lg font-medium leading-7">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full rounded-lg border border-[#D6D6D6] p-3 font-inter text-base focus:border-[#2FB551] focus:outline-none focus:ring-1 focus:ring-[#2FB551]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="font-inter text-lg font-medium leading-7">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full rounded-lg border border-[#D6D6D6] p-3 pr-12 font-inter text-base focus:border-[#2FB551] focus:outline-none focus:ring-1 focus:ring-[#2FB551]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#989898]"
                  >
                    {showPassword ? <Eye className="h-6 w-6" /> : <EyeOff className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-inter text-base font-semibold leading-6">Select your role</p>
              <div className="space-y-3">
                <label className="flex gap-4">
                  <input
                    type="radio"
                    name="role"
                    value="farmer"
                    checked={role === "farmer"}
                    onChange={(e) => setRole(e.target.value as Role)}
                    className="mt-1 h-5 w-5 border-[#C3C3C3] text-[#2FB551] focus:ring-[#2FB551]"
                  />
                  <div>
                    <p className="font-inter text-base font-medium text-[#1E1E1E]">Farmer</p>
                    <p className="font-inter text-sm text-gray-600">
                      Access tools to monitor your farm, sell produce, and receive AI recommendations.
                    </p>
                  </div>
                </label>

                <label className="flex gap-4">
                  <input
                    type="radio"
                    name="role"
                    value="not-farmer"
                    checked={role === "not-farmer"}
                    onChange={(e) => setRole(e.target.value as Role)}
                    className="mt-1 h-5 w-5 border-[#C3C3C3] text-[#2FB551] focus:ring-[#2FB551]"
                  />
                  <div>
                    <p className="font-inter text-base font-medium text-[#1E1E1E]">Not a farmer</p>
                    <p className="font-inter text-sm text-gray-600">
                      Explore the marketplace, connect with sellers, and support sustainable farming.
                    </p>
                  </div>
                </label>
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
                  className="mt-1 h-5 w-5 rounded border-[#C3C3C3] text-[#2FB551] focus:ring-[#2FB551]"
                />
                <span className="font-inter text-base text-[#686868]">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>
            </div>
          </form>

          <p className="text-center font-inter text-base font-medium text-[#1E1E1E]">
            Already have an account?{" "}
            <a href="/signin" className="text-[#2FB551] hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

