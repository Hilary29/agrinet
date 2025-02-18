"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import { Loader2, Plus, X } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import IntroText from "@/components/IntroText"

type BusinessDomain = "TRANPORT" | "AGRICULTURE" | "TECHNOLOGY"
type OrganizationType = "isIndividual" | "full"

interface OrganisationRequest {
  longName: string
  shortName: string
  email: string
  orgDescription: string
  businessActorId: string
  domainKey: string
  logoUrl: string
  businessDomain: BusinessDomain
  type: OrganizationType
  isActive: boolean
  webSiteUrl: string
  orgContact: string
  socialNetwork: string
  businessRegistrationNumber: string
  taxNumber: string
  capitalShare: number
  registrationDate: string
  ceoName: string
  yearFounded: string
  keywords: string[]
  numberOfEmployees: number
}

const businessDomains: BusinessDomain[] = ["TRANPORT", "AGRICULTURE", "TECHNOLOGY"]
const organizationTypes: OrganizationType[] = ["isIndividual", "full"]

export default function CreateOrganization() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const businessActorId = searchParams ? searchParams.get("businessActorId") : null
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [newKeyword, setNewKeyword] = useState("")
  const [formData, setFormData] = useState<OrganisationRequest>({
    longName: "",
    shortName: "",
    email: "",
    orgDescription: "",
    businessActorId: businessActorId || "",
    domainKey: crypto.randomUUID(),
    logoUrl: "",
    businessDomain: "TECHNOLOGY",
    type: "isIndividual",
    isActive: true,
    webSiteUrl: "",
    orgContact: "",
    socialNetwork: "",
    businessRegistrationNumber: "",
    taxNumber: "",
    capitalShare: 0,
    registrationDate: new Date().toISOString().split("T")[0],
    ceoName: "",
    yearFounded: new Date().toISOString().split("T")[0],
    keywords: [],
    numberOfEmployees: 1,
  })

  useEffect(() => {
    const fetchBusinessActorData = async () => {
      if (!businessActorId) return
      try {
        const response = await axios.get(`http://localhost:4002/api/v1/business_actor/${businessActorId}`)
        const businessActor = response.data
        setFormData((prev) => ({
          ...prev,
          longName: businessActor.businessActorName || "",
          email: businessActor.email || "",
          orgDescription: businessActor.description || "",
          type: businessActor.isIndividualBA ? "isIndividual" : "full",
          ceoName: businessActor.businessActorName || "",
        }))
      } catch (error) {
        console.error("Error fetching business actor data:", error)
      }
    }

    fetchBusinessActorData()
  }, [businessActorId])

  const handleChange = (name: keyof OrganisationRequest, value: string | number | boolean | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddKeyword = () => {
    if (newKeyword && !formData.keywords.includes(newKeyword)) {
      handleChange("keywords", [...formData.keywords, newKeyword])
      setNewKeyword("")
    }
  }

  const handleRemoveKeyword = (keyword: string) => {
    handleChange(
      "keywords",
      formData.keywords.filter((k) => k !== keyword),
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const response = await axios.post("http://localhost:4002/api/v1/organisation/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      console.log("Organization created:", response.data)
      router.push("/dashboard")
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "An error occurred while creating the organization")
      } else {
        setError("An unexpected error occurred")
      }
      console.error("Error creating organization:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="container">
      <IntroText
        title="Complete Your Organization Informations"
        description="Set up your organization profile using your business account information"
      />

      {/* Progress Bar */}
      <div className="mb-8 max-w-4xl ">
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

      <div className="max-w-4xl p-6">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="longName">Organization Name</Label>
                  <Input
                    id="longName"
                    value={formData.longName}
                    onChange={(e) => handleChange("longName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shortName">Short Name</Label>
                  <Input
                    id="shortName"
                    value={formData.shortName}
                    onChange={(e) => handleChange("shortName", e.target.value)}
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
                  <Label htmlFor="businessDomain">Business Domain</Label>
                  <Select
                    value={formData.businessDomain}
                    onValueChange={(value: BusinessDomain) => handleChange("businessDomain", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select business domain" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessDomains.map((domain) => (
                        <SelectItem key={domain} value={domain}>
                          {domain}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="orgDescription">Organization Description</Label>
                <Textarea
                  id="orgDescription"
                  value={formData.orgDescription}
                  onChange={(e) => handleChange("orgDescription", e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="type">Organization Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value: OrganizationType) => handleChange("type", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      {organizationTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type === "isIndividual" ? "Individual" : "Full Organization"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="webSiteUrl">Website URL</Label>
                  <Input
                    id="webSiteUrl"
                    type="url"
                    value={formData.webSiteUrl}
                    onChange={(e) => handleChange("webSiteUrl", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orgContact">Contact Information</Label>
                  <Input
                    id="orgContact"
                    value={formData.orgContact}
                    onChange={(e) => handleChange("orgContact", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="socialNetwork">Social Network</Label>
                  <Input
                    id="socialNetwork"
                    value={formData.socialNetwork}
                    onChange={(e) => handleChange("socialNetwork", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="logoUrl">Logo URL</Label>
                  <Input
                    id="logoUrl"
                    type="url"
                    value={formData.logoUrl}
                    onChange={(e) => handleChange("logoUrl", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numberOfEmployees">Number of Employees</Label>
                  <Input
                    id="numberOfEmployees"
                    type="number"
                    min="1"
                    value={formData.numberOfEmployees}
                    onChange={(e) => handleChange("numberOfEmployees", Number.parseInt(e.target.value))}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="businessRegistrationNumber">Business Registration Number</Label>
                  <Input
                    id="businessRegistrationNumber"
                    value={formData.businessRegistrationNumber}
                    onChange={(e) => handleChange("businessRegistrationNumber", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxNumber">Tax Number</Label>
                  <Input
                    id="taxNumber"
                    value={formData.taxNumber}
                    onChange={(e) => handleChange("taxNumber", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capitalShare">Capital Share</Label>
                  <Input
                    id="capitalShare"
                    type="number"
                    min="0"
                    value={formData.capitalShare}
                    onChange={(e) => handleChange("capitalShare", Number.parseFloat(e.target.value))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registrationDate">Registration Date</Label>
                  <Input
                    id="registrationDate"
                    type="date"
                    value={formData.registrationDate}
                    onChange={(e) => handleChange("registrationDate", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ceoName">CEO Name</Label>
                  <Input
                    id="ceoName"
                    value={formData.ceoName}
                    onChange={(e) => handleChange("ceoName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearFounded">Year Founded</Label>
                  <Input
                    id="yearFounded"
                    type="date"
                    value={formData.yearFounded}
                    onChange={(e) => handleChange("yearFounded", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Keywords</Label>
                <div className="flex gap-2">
                  <Input
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    placeholder="Add keyword"
                    className="flex-1"
                  />
                  <Button className="bg-primary-500 text-white-50 hover:bg-primary-600" type="button" onClick={handleAddKeyword} size="icon">
                    <Plus className="h-4 w-4 text-white-50 " />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.keywords.map((keyword) => (
                    <div
                      key={keyword}
                      className="flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                    >
                      {keyword}
                      <button
                        type="button"
                        onClick={() => handleRemoveKeyword(keyword)}
                        className="text-secondary-foreground/50 hover:text-secondary-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button  
              className="text-primary-500 hover:text-primary-500 bg-transparent border-primary-500 border-2 hover:bg-transparent "
              type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button
              className="text-white-50 ml-auto bg-primary-500  hover:bg-primary-600 "
               type="button" onClick={nextStep} >
                Next
              </Button>
            ) : (
              <Button 
              className="text-white-50 ml-auto bg-primary-500 hover:bg-primary-600"
              type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Create Organization
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

