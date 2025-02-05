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
      const response = await fetch("http://localhost:8000/api/v1/create-product", {
        method: "POST",
        body: formDataToSend,
      })

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

  if (!showForm) {
    return (
      <div>
        <IntroText title="Marketplace" description="Sell and Manage" />

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
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Left side - Form */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rounded-lg p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-center mb-6">
                <Image
                  src="/images/Ahmed.png"
                  alt="User Avatar"
                  width={64}
                  height={64}
                  className="rounded-full mb-4 sm:mb-0 sm:mr-4"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-lg font-medium">Ahmed Musa</h2>
                  <p className="text-gray-600">Listing to marketplace</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Add Photos · {photos.length}/5</h3>
                <p className="text-gray-600 mb-2">You can add up to 5 photos</p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-8 text-center">
                  <ImageIcon className="mx-auto mb-4 text-gray-400" size={40} />
                  <label htmlFor="photo-upload" className="text-primary-600 underline mb-2 cursor-pointer">
                    Add photos
                  </label>
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/heic"
                    multiple
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  <p className="text-sm text-gray-500">Supported formats: PNG, JPEG, JPG, HEIC</p>
                </div>
                {photos.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {photos.map((photo, index) => (
                      <div key={index} className="w-20 h-20 relative">
                        <Image
                          src={URL.createObjectURL(photo) || "/placeholder.svg"}
                          alt={`Uploaded photo ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mb-6 space-y-4 font-inter">
                <Input placeholder="Product Name" name="name" value={formData.name} onChange={handleInputChange} />
                <Textarea
                  placeholder="Product Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <Input
                  placeholder="Price"
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
                <Select onValueChange={handleCategoryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="grains">Grains</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-6">
                <p className="text-lg font-medium mb-2">Delivery Options</p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Truck,
                      title: "Inter-Town Delivery",
                      description: "Deliver your products to buyers in different towns or cities.",
                      value: "inter-town",
                    },
                    {
                      icon: DoorOpen,
                      title: "Local Pickup",
                      description: "Buyers can pick up the product from your location.",
                      value: "local-pickup",
                    },
                    {
                      icon: MapPin,
                      title: "In-Person Delivery",
                      description: "You'll deliver the product to the buyer's location.",
                      value: "in-person",
                    },
                  ].map((option, index) => (
                    <div key={index} className="flex items-center p-4 border rounded-lg">
                      <option.icon className="mr-4 flex-shrink-0" size={32} />
                      <div className="flex-grow">
                        <h4 className="font-medium">{option.title}</h4>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                      <Checkbox
                        className="ml-4 flex-shrink-0"
                        checked={formData.deliveryOptions.includes(option.value)}
                        onCheckedChange={() => handleDeliveryOptionChange(option.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto text-primary-600  border-primary-600 hover:text-primary-700 hover:border-primary-700 border-2"
                  onClick={handleGoBack}
                >
                  Cancel
                </Button>
                <Button type="submit" className="w-full sm:w-auto text-white-50 bg-primary-600 hover:bg-primary-700">
                  Create Listing
                </Button>
              </div>
            </form>
          </div>

          {/* Right side - Preview */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-semibold mb-2">Listing Preview</h3>
              <p className="text-gray-600">
                See how your product will appear to buyers before publishing it to the marketplace by clicking on the
                &quot;Preview&quot; button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCreationPage

