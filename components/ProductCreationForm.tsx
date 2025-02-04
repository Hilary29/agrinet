"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog } from "@headlessui/react"


interface ProductFormData {
  marchandId: string
  variationId: string
  name: string
  longDescription: string
  shortDescription: string
  lifespan: number
  quantity: number
  status: "AVAILABLE" | "UNAVAILABLE"
  expiresAt: string
}

interface Variation {
  key: string
  value: string
}

export default function ProductCreationForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<ProductFormData>({
    marchandId: "",
    variationId: "",
    name: "",
    longDescription: "",
    shortDescription: "",
    lifespan: 0,
    quantity: 0,
    status: "AVAILABLE",
    expiresAt: new Date().toISOString(),
  })
  const [error, setError] = useState<string | null>(null)
  const [variations, setVariations] = useState<Variation[]>([])
  const [isVariationModalOpen, setIsVariationModalOpen] = useState(false)
  const [newVariation, setNewVariation] = useState<Variation>({ key: "", value: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "lifespan" || name === "quantity"
          ? Number.parseInt(value)
          : name === "expiresAt"
            ? new Date(value).toISOString()
            : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    console.log("Données du formulaire envoyées:", formData)

    try {
      console.log("Sending product data:", formData)
      const response = await fetch("http://localhost:4000/api/v1/product_post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("Failed to create product:", errorData)
        throw new Error(`Failed to create product: ${response.status} ${response.statusText}`)
      }

      const product = await response.json()
      console.log("Product created successfully:", product)

      // Create variations
      for (const variation of variations) {
        console.log("Sending variation data:", {
          productId: product.id,
          ...variation,
        })
        const variationResponse = await fetch("http://localhost:4000/api/v1/variations/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product.id,
            ...variation,
          }),
        })

        if (!variationResponse.ok) {
          const variationErrorData = await variationResponse.json()
          console.error("Failed to create variation:", variationErrorData)
          throw new Error(`Failed to create variation: ${variationResponse.status} ${variationResponse.statusText}`)
        }

        const createdVariation = await variationResponse.json()
        console.log("Variation created successfully:", createdVariation)
      }

      router.push("/products") // Redirect to products page after successful creation
    } catch (err) {
      console.error("Error details:", err)
      setError("An error occurred while creating the product. Please check the console for more details.")
    }
  }

  const handleAddVariation = () => {
    if (newVariation.key && newVariation.value) {
      setVariations([...variations, newVariation])
      setNewVariation({ key: "", value: "" })
      setIsVariationModalOpen(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 p-6 bg-white-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Product</h2>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="marchandId" className="block text-sm font-medium text-gray-700">
              Marchand ID
            </label>
            <input
              type="text"
              id="marchandId"
              name="marchandId"
              value={formData.marchandId}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="variationId" className="block text-sm font-medium text-gray-700">
              Variation ID
            </label>
            <input
              type="text"
              id="variationId"
              name="variationId"
              value={formData.variationId}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
              Short Description
            </label>
            <input
              type="text"
              id="shortDescription"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700">
              Long Description
            </label>
            <textarea
              id="longDescription"
              name="longDescription"
              value={formData.longDescription}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </div>

          <div>
            <label htmlFor="lifespan" className="block text-sm font-medium text-gray-700">
              Lifespan
            </label>
            <input
              type="number"
              id="lifespan"
              name="lifespan"
              value={formData.lifespan}
              onChange={handleChange}
              required
              min="0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              min="0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="AVAILABLE">Available</option>
              <option value="UNAVAILABLE">Unavailable</option>
            </select>
          </div>

          <div>
            <label htmlFor="expiresAt" className="block text-sm font-medium text-gray-700">
              Expires At
            </label>
            <input
              type="datetime-local"
              id="expiresAt"
              name="expiresAt"
              value={formData.expiresAt.slice(0, 16)}
              onChange={(e) => {
                const date = new Date(e.target.value)
                setFormData((prev) => ({
                  ...prev,
                  expiresAt: date.toISOString(),
                }))
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900">Variations</h3>
          <ul className="mt-3 list-disc list-inside">
            {variations.map((variation, index) => (
              <li key={index}>
                {variation.key}: {variation.value}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setIsVariationModalOpen(true)}
            className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Variety
          </button>
        </div>

        {error && <div className="mt-4 p-4 text-red-700 bg-red-100 rounded-md">{error}</div>}

        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Product
          </button>
        </div>
      </form>

      <Dialog open={isVariationModalOpen} onClose={() => setIsVariationModalOpen(false)}>
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                Add Variation
              </Dialog.Title>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Key"
                  value={newVariation.key}
                  onChange={(e) => setNewVariation({ ...newVariation, key: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <input
                  type="text"
                  placeholder="Value"
                  value={newVariation.value}
                  onChange={(e) => setNewVariation({ ...newVariation, value: e.target.value })}
                  className="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleAddVariation}
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Add
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

