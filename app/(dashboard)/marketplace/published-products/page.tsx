"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { PlusIcon, ImageIcon, Truck, DoorOpen, MapPin, ArrowLeft } from "lucide-react"
import IntroText from "@/components/IntroText"
import CreateProduct from "@/components/CreateProduct"
import { control_auth_component_roles } from "@/services/auth/auth_component_rules"
import { ressourcesRoutes } from "@/config/routes"

interface FormData {
  name: string
  description: string
  price: string
  category: string
  deliveryOptions: string[]
}

const ProductCreationPage = () => {
  const [showForm, setShowForm] = useState(false)
  const [photos, setPhotos] = useState<File[]>([])
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    price: "",
    category: "",
    deliveryOptions: [],
  })

  const handleAddProduct = () => {
    setShowForm(true)
  }

  const handleGoBack = () => {
    setShowForm(false)
  }

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files)
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos].slice(0, 5))
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleCategoryChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, category: value }))
  }

  const handleDeliveryOptionChange = (option: string) => {
    setFormData((prevData) => {
      const updatedOptions = prevData.deliveryOptions.includes(option)
        ? prevData.deliveryOptions.filter((item) => item !== option)
        : [...prevData.deliveryOptions, option]
      return { ...prevData, deliveryOptions: updatedOptions }
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formDataToSend = new FormData()
    photos.forEach((photo) => {
      formDataToSend.append("photos", photo)
    })
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => formDataToSend.append(key, item))
      } else {
        formDataToSend.append(key, value)
      }
    })
    //visualiser les donnees envoyees
    console.log(formData)

    try {
      const response = await fetch(ressourcesRoutes.ressourceCreateProduct, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        // Handle successful submission
        console.log("Product created successfully")
        // Reset form or redirect user
      } else {
        // Handle error
        console.error("Failed to create product")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  if (control_auth_component_roles("published_products", "component")) {
    if (!showForm) {
      return (
        <div>
          <IntroText title="Marketplace" description="My Shop" />

          <div className="container mx-auto px-4 py-8">
            <div className="text-center my-8 md:my-16">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/Layer_2.png" alt="Sell and Manage" width={120} height={120} />
              </div>
              <p className="text-gray-600 mb-6 px-4">
                Start showcasing your products to reach more buyers and grow your business.
              </p>
              <Button className="bg-primary-600 hover:bg-primary-700" onClick={handleAddProduct}>
                <PlusIcon className="mr-2 h-6 w-6" /> Add Product
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <div className="flex flex-row gap-4  ">
          <button onClick={handleGoBack} className=" hover:text-black-300 ">
            <ArrowLeft />
          </button>

          <div className="flex flex-col items-center  sm:items-start gap-1 absolute md:static">
            <p className="text-heading-desktop-h6 md:text-heading-desktop-h5 font-semibold font-satoshi  text-black-50">
              Create new listing
            </p>
            <p className="text-paragraph-sm md:text-paragraph-md font-normal font-inter leading-6 text-primary-600 ">
              Marketplace
            </p>
          </div>
        </div>
        <CreateProduct />
      </div>
    )
  }
}
export default ProductCreationPage