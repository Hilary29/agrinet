"use client"

import { countries } from "countries-list"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Building, Leaf } from 'lucide-react'

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
  })

  const router = useRouter()

  const [datas, setData] = useState<string | null>()
  const countryOptions = Object.entries(countries).map(([code, country]) => ({
    value: code,
    label: country.name,
  }))

  const paymentMethodsOptions = [
    { value: "Bank Card", label: "Bank Card", icon: "/images/credit-card.png" },
    { value: "Paypal", label: "Paypal", icon: "/images/paypal-transparent.png" },
    { value: "Orange Money", label: "Orange Money", icon: "/images/orange-money.png" },
    { value: "Mobile Money", label: "Mobile Money", icon: "/images/mobile--money.png" },
    { value: "Cash", label: "Cash", icon: "/images/salary.png" },
  ]

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

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className=" flex items-center gap-2">
            <span className="font-satoshi ">Upgrade to a Business Account</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information Section */}
              <div className="space-y-4">
              <div className="space-y-2">
                  <Label htmlFor="businessActorName">Business Actor Name</Label>
                  <Input
                    type="text"
                    name="businessActorName"
                    id="businessActorName"
                    placeholder="Enter business name"
                    onChange={handleChange}
                  />
                </div>
              <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your Email address"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                  />
                </div>



                <div className="space-y-2">
                  <Label>Gender</Label>
                  <RadioGroup
                    defaultValue="male"
                    onValueChange={(value) => handleChange({ target: { name: "gender", value } } as any)}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <Select onValueChange={(value) => handleChange({ target: { name: "nationality", value } } as any)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      {countryOptions.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profession">Profession</Label>
                  <Input
                    type="text"
                    name="profession"
                    id="profession"
                    placeholder="Enter your profession"
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input type="date" name="dateOfBirth" id="dateOfBirth" onChange={handleDateChange} />
                </div>
              </div>
            </div>

            {/* Payment Methods Section */}
            <div className="space-y-4">
              <Label>Payment Methods</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {paymentMethodsOptions.map((method) => (
                  <div
                    key={method.value}
                    onClick={() => handlePaymentMethodToggle(method.value)}
                    className={`flex items-center p-4 rounded-lg border transition-colors cursor-pointer hover:bg-accent ${
                      formData.paymentMethods.includes(method.value)
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <Image src={method.icon || "/placeholder.svg"} alt={method.label} width={32} height={32} className="mr-3" />
                    <span className="font-medium">{method.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                id="description"
                placeholder="Tell us about your business..."
                className="min-h-[100px]"
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center">
              <Button type="submit" className="w-full max-w-sm bg-primary-600 hover:bg-primary-700">
                Create Business Account
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default FarmerForm
