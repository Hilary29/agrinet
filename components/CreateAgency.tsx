"use client"

import { useState } from "react"
import type React from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Loader2, Building2, MapPin, FileText, AlertCircle } from "lucide-react"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

type FormData = {
  organisationId: string
  shortName: string
  location: string
  longName: string
  description: string
}

export default function CreateAgency() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    organisationId: "6a33fad4-2ef4-45c4-9a0b-5d38ab51b215",
    shortName: "",
    location: "",
    longName: "",
    description: "",
  })
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const response = await axios.post("http://localhost:4001/api/v1/agence/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      console.log("Agency created:", response.data)
      router.push("/organisation/business")
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "An error occurred while creating the agency")
        console.error("API Error:", error.message)
      } else {
        setError("An unexpected error occurred")
        console.error("Unknown error:", error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white-50 p-4 rounded-md">
        <div className="  p-2 ">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="shortName" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Short Name
                  </Label>
                  <Input 
                    id="shortName"
                    placeholder="e.g. NYC Office"
                    value={formData.shortName}
                    onChange={(e) => handleChange("shortName", e.target.value)}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="longName" className="flex items-center gap-2">
                    Full Agency Name
                  </Label>
                  <Input
                    id="longName"
                    placeholder="e.g. New York City Regional Office"
                    value={formData.longName}
                    onChange={(e) => handleChange("longName", e.target.value)}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="e.g. 123 Business Ave, New York, NY 10001"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Enter a detailed description of the agency..."
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  className="min-h-32 transition-all duration-200 focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white-50 transition duration-300"
                disabled={isLoading}
                onClick={() =>
                  toast("Agency has been created", {
                    description: "A new agency has been added to your organisation",
                  })
                }
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Agency"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

