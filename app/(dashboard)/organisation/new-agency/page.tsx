"use client"

import type React from "react"

import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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
    organisationId: "6a33fad4-2ef4-45c4-9a0b-5d38ab51b215", // This would typically come from your auth context or props
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
      router.push("/dashboard") // Redirect to dashboard or agencies list
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
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Create New Agency</CardTitle>
          <CardDescription>Fill in the details to create a new agency</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
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
              <Label htmlFor="longName">Full Agency Name</Label>
              <Input
                id="longName"
                value={formData.longName}
                onChange={(e) => handleChange("longName", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                required
              />
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Agency
            </Button>
          </CardFooter>

          {error && (
            <Alert variant="destructive" className="mt-4 mx-6 mb-6">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>
      </Card>
    </div>
  )
}

