"use client";

import { useState, useEffect , type ChangeEvent, type FormEvent} from "react";
import Image from "next/image"
import { DataTable } from "@/components/organizationDataTable";
import { DataGrid } from "@/components/OrganizationDataGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Edit, Grid, List, Search, Trash } from "lucide-react";
import IntroText from "@/components/IntroText";
import { Product, getProducts } from "@/public/data/organization-products";
import CreateProduct from "@/components/CreateProduct";

interface FormData {
  name: string
  description: string
  price: string
  category: string
  deliveryOptions: string[]
}

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "table">("table");
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
  



  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "category", header: "Category" },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }: { row: { original: { price: number } } }) =>
        `${row.original.price.toFixed(2)} FCFA`,
    },
    {
      id: "actions",
      cell: ({ row }: { row: { original: { id: number } } }) => (
        <div className="flex flex-col sm:flex-row gap-2 justify-end">
          <Link href={`/dashboard/organization/agency/${row.original.id}/edit`}>
            <div className="relative group">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white-50 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Edit
              </div>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </Link>
          <div className="relative group">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white-50 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Delete
            </div>
            <Button
              variant="destructive"
              size="sm"
              className="w-full sm:w-auto text-white-50"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ),
    },
  ];

  const renderProductCard = (product: Product) => (
    <div className="space-y-2">
      <p className="font-semibold text-paragraph-lg">{product.name}</p>
      <p className="text-sm text-gray-900">{product.category}</p>
      <p className="text-sm text-gray-900">{product.price.toFixed(2)} FCFA</p>
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <Link
          href={`/dashboard/organization/product/${product.id}/edit`}
          className="w-full sm:w-auto"
        >
          <Button variant="outline" size="sm" className="w-full">
            Edit
          </Button>
        </Link>
        <Button variant="destructive" size="sm" className="w-full sm:w-auto">
          Delete
        </Button>
      </div>
    </div>
  );

  if (!showForm) {
  return (
    <div>
      <IntroText
        title="Products"
        description="Add, update, and organize your products to keep your offerings up-to-date and relevant."
      />
      <div className="space-y-4 p-4 sm:p-0 pt-32 sm:pt-12 ">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative flex-grow sm:flex-grow-0 md:w-[556px] ">
            <input
              type="text"
              placeholder="Search devices"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white-50 border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setViewMode("table")}
                className={`${
                  viewMode === "table"
                    ? "bg-[#0000003c] hover:bg-[#0000005d] "
                    : ""
                } w-full sm:w-auto px-2 `}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setViewMode("grid")}
                className={`${
                  viewMode === "grid"
                    ? "bg-[#0000003c] hover:bg-[#0000005d]"
                    : ""
                } w-full sm:w-auto px-2`}
              >
                <Grid className="h-4 w-4" />
              </Button>
            </div>
            <Button
              onClick={handleAddProduct}
               className="w-full bg-primary-600 text-white-50 hover:bg-primary-700">
                + New Product
              </Button>
          </div>
        </div>
        <div className="overflow-x-auto ">
          {viewMode === "table" ? (
            <DataTable columns={columns} data={products} />
          ) : (
            <DataGrid data={products} renderItem={renderProductCard} />
          )}
        </div>

      </div>
    </div>
  );
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
          Organization
        </p>
      </div>
    </div>
<CreateProduct/>
  </div>
)



};

export default Page;
