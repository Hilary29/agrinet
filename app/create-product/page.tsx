"use client"

import { useState, useEffect, type ChangeEvent } from "react"
import axios from "axios"


interface Category {
  id: string
  name: string
  description: string
  etat: string
}

interface FormData {
  marchandId: string
  variationId: string
  name: string
  categorieId: string
  saleUnit: string
  basePrice: number
  weight: number
  defaultCurrency: string
  nextAvailableTime: string
  longDescription: string
  shortDescription: string
  lifespan: number
  quantity: number
  status: string
  expiresAt: string
}

export default function ProductForm() {
  const [formData, setFormData] = useState<FormData>({
    marchandId: "",
    variationId: "",
    name: "",
    categorieId: "",
    saleUnit: "KG",
    basePrice: 0,
    weight: 0,
    defaultCurrency: "",
    nextAvailableTime: "",
    longDescription: "",
    shortDescription: "",
    lifespan: 0,
    quantity: 0,
    status: "AVAILABLE",
    expiresAt: new Date().toISOString(),
  })

  const [categories, setCategories] = useState<Category[]>([])
  const [showCategoryForm, setShowCategoryForm] = useState(false)
  const [newCategory, setNewCategory] = useState<Omit<Category, "id">>({
    name: "",
    description: "",
    etat: "AVAILABLE",
  })
  const [createdProductId, setCreatedProductId] = useState<string | null>(null)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>("http://localhost:4000/api/v1/categorie")
      setCategories(response.data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      categorieId: value,
    }))
  }

  const handleNewCategoryChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewCategory((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleNewCategorySubmit = async () => {
    try {
      const response = await axios.post<Category>("http://localhost:4000/api/v1/categorie/create", newCategory, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log("Category Created:", response.data)
      setShowCategoryForm(false)
      fetchCategories()
      setNewCategory({
        name: "",
        description: "",
        etat: "AVAILABLE",
      })
    } catch (error) {
      console.error("Error creating category:", error)
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(e.target.files || [])])
    }
  }

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:4000/api/v1/product_post/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log("Success:", response.data)
      const productResponse = response
      setCreatedProductId(response.data.id) // Assuming the API returns the created product ID
      if (selectedFiles.length > 0) {
        const formData = new FormData()
        selectedFiles.forEach((file) => {
          formData.append("file", file)
        })

        await axios.post(`http://localhost:4000/api/v1/media/add/product/${productResponse.data.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        console.log("Media uploaded successfully")
      }
      setFormData({
        marchandId: "",
        variationId: "",
        name: "",
        categorieId: "",
        saleUnit: "KG",
        basePrice: 0,
        weight: 0,
        defaultCurrency: "EUR",
        nextAvailableTime: new Date().toISOString(),
        longDescription: "",
        shortDescription: "",
        lifespan: 0,
        quantity: 0,
        status: "AVAILABLE",
        expiresAt: new Date().toISOString(),
      })
      setSelectedFiles([])
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Créer un Produit</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="marchandId"
          placeholder="Marchand ID"
          value={formData.marchandId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="variationId"
          placeholder="Variation ID"
          value={formData.variationId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="categorieId"
          value={formData.categorieId}
          onChange={handleCategoryChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Catégorie</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => setShowCategoryForm(!showCategoryForm)}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Nouvelle Catégorie
        </button>

        {showCategoryForm && (
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nom de la catégorie"
              value={newCategory.name}
              onChange={handleNewCategoryChange}
              className="w-full p-2 border rounded"
            />
            <textarea
              name="description"
              placeholder="Description de la catégorie"
              value={newCategory.description}
              onChange={handleNewCategoryChange}
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={handleNewCategorySubmit}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Ajouter Catégorie
            </button>
          </div>
        )}

        <input
          type="number"
          name="basePrice"
          placeholder="Prix de base"
          value={formData.basePrice}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Poids"
          value={formData.weight}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="longDescription"
          placeholder="Description longue"
          value={formData.longDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="shortDescription"
          placeholder="Description courte"
          value={formData.shortDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="lifespan"
          placeholder="Durée de vie"
          value={formData.lifespan}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantité"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <div className="space-y-2">
          <input type="file" multiple onChange={handleFileChange} className="w-full p-2 border rounded" />
          {selectedFiles.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Selected Files:</h4>
              <ul className="space-y-2">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Créer
        </button>
        {createdProductId && <MediaUpload productId={createdProductId} />}
      </form>
    </div>
  )
}




interface MediaUploadProps {
  productId: string
}

function MediaUpload({ productId }: MediaUploadProps) {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleUpload = async () => {
    if (files.length === 0) return

    setUploading(true)
    const formData = new FormData()
    files.forEach((file) => {
      formData.append("file", file)
    })

    try {
      const response = await axios.post(`http://localhost:4000/api/v1/media/add/product/${productId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log("Media uploaded:", response.data)
      setFiles([])
    } catch (error) {
      console.error("Error uploading media:", error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Ajouter des médias</h3>
      <input type="file" multiple onChange={handleFileChange} className="mb-2" />
      <button
        onClick={handleUpload}
        disabled={files.length === 0 || uploading}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:bg-gray-400"
      >
        {uploading ? "Téléchargement..." : "Télécharger les médias"}
      </button>
    </div>
  )
}

