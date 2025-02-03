"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { EyeOff, Eye } from "lucide-react"
import { AuthRoutes } from "@/config/routes"
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa"
import Image from "next/image"

export default function Page() {
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  })
  const [errorMessage, setErrorMessage] = useState("") // État pour stocker le message d'erreur
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    try {
      const response = await fetch(AuthRoutes.REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log(response.body)
        router.push("/signin-verify-email") // Redirection vers la page d'accueil
      } else {
        // Lire le corps de la réponse pour obtenir le message d'erreur
        const errorData = await response.json()
        setErrorMessage(errorData.message || "Erreur lors de la création de l’utilisateur") // Utiliser le message d'erreur de la réponse
        console.error("Erreur lors de la création de l'utilisateur:", errorData.message)
      }
    } catch (error) {
      console.error("Erreur réseau:", error)
      setErrorMessage("Network error during registration.") // Message d'erreur par défaut
    }
    console.log(formData);//a enlever
  }

  return (
    <div className="flex justify-center  p-4">
      <div className="flex w-full  max-w-[560px] flex-col items-center rounded-lg bg-white-50 p-6 md:p-10">
        <div className="w-full max-w-[480px] space-y-8">
          <p className="font-satoshi text-2xl font-semibold leading-9 text-black-50 md:text-heading-desktop-h4">
            Create your Agrinet account
          </p>
          {errorMessage && <p className="text-red-500 text-sm my-2">{errorMessage}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="username" className="font-inter text-paragraph-lg font-medium ">
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
                <label htmlFor="firstname" className="font-inter text-lg font-medium leading-7">
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
                <label htmlFor="lastname" className="font-inter text-lg font-medium leading-7">
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
                <label htmlFor="email" className="font-inter text-lg font-medium leading-7">
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
                <label htmlFor="password" className="font-inter text-lg font-medium leading-7">
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
                    {showPassword ? <Eye className="h-6 w-6" /> : <EyeOff className="h-6 w-6" />}
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
              <p className="text-center font-inter text-base text-[#686868]">Or sign up with</p>
              <div className="flex justify-center  space-x-8">
                <button
                  type="button"
                  className="flex items-center justify-center w-12 h-12 rounded-lg  "
                >
                  < Image src='/images/google-icon.png' width={200} height={200} className="hover:bg-[#0000003d] bg-cover shadow-2dp rounded-lg "  alt='google icon'/>

                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#4267B2] text-white-50 hover:bg-opacity-90"
                >
                  <FaFacebook className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#E1306C] text-white-50 hover:bg-opacity-90"
                >
                  Y
                </button>
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
  )
}

