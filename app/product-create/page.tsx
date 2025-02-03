
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog } from "@headlessui/react"
import ProductCreationForm from "@/components/ProductCreationForm"


const page = () => {
  return (
    <div className="min-h-screen bg-primary-50 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-2xl sm:mx-auto">
        <ProductCreationForm />
      </div>
    </div>
  )
}

export default page
