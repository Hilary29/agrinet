"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { countries } from "@/lib/countries"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import IntroText from "@/components/IntroText"

type BusinessActorType =
  | "OWNER"
  | "PROVIDER"
  | "CUSTOMER"
  | "SALEPERSON"
  | "CLIENT"
  | "FREELANCEDRIVER"
  | "FAMER"
  | "AGENCY"
  | "VEHICLERENTAL"

type BusinessActorRequest = {
  userId: string
  phoneNumber: string
  email: string
  avatarPicture: string
  profilePicture: string
  businessActorName: string
  isIndividualBA: boolean
  type: BusinessActorType
  isAvailable: boolean
  dateOfBirth: string
  age: number
  gender: string
  nationality: string
  profession: string
  paymentMethods: string[]
  isVerified: boolean
  isActive: boolean
  description: string
  reviews: string
  password: string
}

const paymentMethodOptions = ["Credit Card", "PayPal", "Bank Transfer", "Cash", "Mobile Money"]

const businessActorTypes: BusinessActorType[] = [
  "OWNER",
  "PROVIDER",
  "CUSTOMER",
  "SALEPERSON",
  "CLIENT",
  "FREELANCEDRIVER",
  "FAMER",
  "AGENCY",
  "VEHICLERENTAL",
]

export default function UpgradeAccount() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<BusinessActorRequest>({
    userId: "6a33fad4-2ef4-45c4-9a0b-5d38ab51b215",
    phoneNumber: "",
    email: "",
    avatarPicture: "",
    profilePicture: "",
    businessActorName: "",
    isIndividualBA: true,
    type: "CUSTOMER",
    isAvailable: true,
    dateOfBirth: "",
    age: 0,
    gender: "",
    nationality: "",
    profession: "",
    paymentMethods: [],
    isVerified: false,
    isActive: true,
    description: "",
    reviews: "",
    password: "",
  })
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const handleChange = (name: keyof BusinessActorRequest, value: string | boolean | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePaymentMethodChange = (method: string) => {
    setFormData((prev) => ({
      ...prev,
      paymentMethods: prev.paymentMethods.includes(method)
        ? prev.paymentMethods.filter((m) => m !== method)
        : [...prev.paymentMethods, method],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      // Calculate age based on date of birth
      const birthDate = new Date(formData.dateOfBirth)
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }

      // Format date to include time (midnight)
      const formattedDate = formData.dateOfBirth ? `${formData.dateOfBirth}T00:00:00.000Z` : null

      const dataToSubmit = {
        ...formData,
        dateOfBirth: formattedDate,
        age,
      }
      console.log("Data to submit:", dataToSubmit)
      const response = await axios.post("http://localhost:4002/api/v1/business_actor/create", dataToSubmit, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      console.log("Business account created:", response.data)
      router.push("/create-organization")
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === "ERR_NETWORK") {
          setError("Unable to connect to the server. Please check your connection.")
        } else if (error.response) {
          setError(error.response.data.message || "An unexpected error occurred. Please try again.")
        } else {
          setError("Network error occurred. Please check your connection.")
        }
        console.error("API Error:", error.message)
      } else {
        setError("An unexpected error occurred")
        console.error("Unknown error:", error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="  ">
      <IntroText title="Get Business account" description="Fill out this three steps form to upgrade your account" />
      {/* Progress Bar */}
      <div className="py-12 px-4 sm:px-6 lg:px-0 mb-2 max-w-4xl w-full">
        <div className="relative">
          <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 transform bg-green-100" />
          <div
            className="absolute left-0 top-1/2 h-1 -translate-y-1/2 transform bg-green-600 transition-all duration-500"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
          <div className="relative flex justify-between">
            {[1, 2, 3].map((number) => (
              <div
                key={number}
                className={`h-8 w-8 rounded-full ${
                  step >= number ? "bg-green-600" : "bg-green-100"
                } flex items-center justify-center text-sm font-medium text-white-50`}
              >
                {number}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl w-full">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="businessActorName">Full Name</Label>
                    <Input
                      id="businessActorName"
                      value={formData.businessActorName}
                      onChange={(e) => handleChange("businessActorName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleChange("phoneNumber", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleChange("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="type">Business Actor Type</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value: BusinessActorType) => handleChange("type", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessActorTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="isIndividualBA">Business Type</Label>
                    <Select
                      value={formData.isIndividualBA.toString()}
                      onValueChange={(value) => handleChange("isIndividualBA", value === "true")}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">Individual</SelectItem>
                        <SelectItem value="false">Company</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality</Label>
                    <Select value={formData.nationality} onValueChange={(value) => handleChange("nationality", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.name} className="cursor-pointer">
                            <span className="mr-2">{country.emoji}</span>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="profession">Profession</Label>
                  <Input
                    id="profession"
                    value={formData.profession}
                    onChange={(e) => handleChange("profession", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                    <Label>Payment Methods</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {paymentMethodOptions.map((method) => (
                        <div key={method} className="flex items-center space-x-2">
                          <Checkbox
                            id={method}
                            checked={formData.paymentMethods.includes(method)}
                            onCheckedChange={() => handlePaymentMethodChange(method)}
                          />
                          <Label htmlFor={method}>{method}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isAvailable"
                      checked={formData.isAvailable}
                      onCheckedChange={(checked) => handleChange("isAvailable", checked as boolean)}
                    />
                    <Label htmlFor="isAvailable">Available for Business</Label>
                  </div>
                  
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between pt-8">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="text-primary-500 hover:text-primary-600 border-primary-500 border-2"
                disabled={isLoading}
              >
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="text-white-50 bg-primary-500 hover:bg-primary-600"
                disabled={isLoading}
              >
                Next
              </Button>
            ) : (
              <Button type="submit" className="text-white-50 bg-primary-500 hover:bg-primary-600" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit
              </Button>
            )}
          </div>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>
      </div>
    </div>
  )
}

