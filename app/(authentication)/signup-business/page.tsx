"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"
import axios from "axios"

export default function CreateBusinessAccount() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    userId: "",
    phoneNumber: "",
    email: "",
    avatarPicture: "",
    profilePicture: "",
    businessActorName: "",
    isIndividual: false,
    baType: "isIndividual",
    isAvailable: false,
    dateOfBirth: "",
    age: 0,
    gender: "",
    nationality: "",
    profession: "",
    businessDomainIds: [],
    qualificationIds: [],
    paymentMethods: [],
    isVerified: false,
    isLocked: false,
    description: "",
    reviews: "",
    password: "",
    businessActorId: "",
  })

  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const values = e.target.value.split(",").map((item) => item.trim())
    setFormData((prev) => ({
      ...prev,
      [field]: values,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    try {
      const response = await axios.post("http://localhost:4001/api/v1/business_actor/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.status === 201) {
        router.push("/signin")
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data
        setErrorMessage(errorData?.message || "Erreur lors de la création du compte business")
        console.error("Erreur lors de la création du compte business:", errorData?.message)
      } else {
        console.error("Erreur réseau:", error)
        setErrorMessage("Erreur réseau lors de la création du compte")
      }
    }
  }

  return (
    <div className="flex  justify-center p-4">
      <div className="w-full bg-white-50 max-w-2xl rounded-md p-2 space-y-8">
        <h1 className="text-3xl font-bold text-center">Créer un compte business</h1>
        {errorMessage && <p className="text-red-500 text-sm my-2">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="businessActorName" className="block text-sm font-medium text-gray-700">
                Nom de l&apos;entreprise
              </label>
              <input
                type="text"
                id="businessActorName"
                name="businessActorName"
                value={formData.businessActorName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="baType" className="block text-sm font-medium text-gray-700">
                Type d&apos;entreprise
              </label>
              <select
                id="baType"
                name="baType"
                value={formData.baType}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              >
                <option value="isIndividual">Individuel</option>
                <option value="full">Complet</option>
              </select>
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                Date de naissance
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Genre
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
                Nationalité
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label htmlFor="businessDomainIds" className="block text-sm font-medium text-gray-700">
              Domaines d&apos;activité (séparés par des virgules)
            </label>
            <input
              type="text"
              id="businessDomainIds"
              name="businessDomainIds"
              value={formData.businessDomainIds.join(", ")}
              onChange={(e) => handleArrayChange(e, "businessDomainIds")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="qualificationIds" className="block text-sm font-medium text-gray-700">
              Qualifications (séparées par des virgules)
            </label>
            <input
              type="text"
              id="qualificationIds"
              name="qualificationIds"
              value={formData.qualificationIds.join(", ")}
              onChange={(e) => handleArrayChange(e, "qualificationIds")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="paymentMethods" className="block text-sm font-medium text-gray-700">
              Méthodes de paiement (séparées par des virgules)
            </label>
            <input
              type="text"
              id="paymentMethods"
              name="paymentMethods"
              value={formData.paymentMethods.join(", ")}
              onChange={(e) => handleArrayChange(e, "paymentMethods")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isAvailable"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="isAvailable" className="ml-2 block text-sm text-gray-900">
              Disponible
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white-50 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Créer le compte business
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

