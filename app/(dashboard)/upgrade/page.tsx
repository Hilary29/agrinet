"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import IntroText from "@/components/IntroText"
import PersonalInfo from "./PersonalInfo"
import AdditionalInfo from "./AdditionalInfo"
import PaymentAndDescription from "./PaymentAndDescription"

const FarmerForm = () => {
  const [step, setStep] = useState(1)
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
  })

  const router = useRouter()

  const [datas, setData] = useState<string | null>()

  useEffect(() => {
    const data = sessionStorage.getItem("decodedToken")
    if (data) {
      setData(JSON.parse(data))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      userId: datas?.sub,
      email: datas?.email,
      [name]: value,
    }))
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value
    setFormData((prevData) => ({
      ...prevData,
      dateOfBirth: date,
      age: calculateAge(date),
    }))
  }

  const handlePaymentMethodToggle = (method: string) => {
    setFormData((prevData) => {
      const newMethods = prevData.paymentMethods.includes(method)
        ? prevData.paymentMethods.filter((m) => m !== method)
        : [...prevData.paymentMethods, method]
      return { ...prevData, paymentMethods: newMethods }
    })
  }

  const calculateAge = (dateOfBirth: string) => {
    const birthDate = new Date(dateOfBirth)
    const ageDifMs = Date.now() - birthDate.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/pricing")
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="container mx-auto px-4 py-8">
      <IntroText 
        title="Upgrade to Business Account" 
        description="Complete the form in 3 easy steps"
      />
      <Card className="max-w-4xl mx-auto border-none">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="font-satoshi">Step {step} of 3</span>
            <div className="flex space-x-2">
              {step > 1 && (
                <Button onClick={prevStep} variant="outline">
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button onClick={nextStep}>Next</Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-primary-600 hover:bg-primary-700">
                  Create Business Account
                </Button>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {step === 1 && (
              <PersonalInfo
                formData={formData}
                handleChange={handleChange}
              />
            )}
            {step === 2 && (
              <AdditionalInfo
                formData={formData}
                handleChange={handleChange}
                handleDateChange={handleDateChange}
              />
            )}
            {step === 3 && (
              <PaymentAndDescription
                formData={formData}
                handleChange={handleChange}
                handlePaymentMethodToggle={handlePaymentMethodToggle}
              />
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default FarmerForm
