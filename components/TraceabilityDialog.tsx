"use client"

import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronDownCircle, FileSearch } from "lucide-react"

type TraceabilityData = {
  productId: string
  name: string
  category: string
  origin: string
  harvestDate: string
  producer: {
    name: string
    location: string
    farmingMethod: string
    certification: string
  }
  processing: {
    packagingCenter: string
    packagingDate: string
    storageTemperature: string
  }
  logistics: {
    transporter: string
    batchNumber: string
    warehouse: string
  }
  sale: {
    buyerId: string
    purchaseDate: string
    deliveryMode: string
    customerReview: string
  }
}

type TraceabilityDialogProps = {
  showTraceability: boolean
  setShowTraceability: (open: boolean) => void
  traceabilityData: TraceabilityData
}

const TraceabilityDialog: React.FC<TraceabilityDialogProps> = ({
  showTraceability,
  setShowTraceability,
  traceabilityData,
}) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <Dialog open={showTraceability} onOpenChange={setShowTraceability}>
      <DialogTrigger asChild>
        <button className="absolute top-2 left-2 bg-violet-900 hover:bg-purple-950 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-50">
          <FileSearch className="h-4 w-4 text-white-50" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md sm:max-w-2xl ">
        <DialogHeader>
          <DialogTitle className="font-satoshi">Product Traceability</DialogTitle>
          <p className="text-gray-700 pt-2 font-inter text-paragraph-sm">Complete traceability history</p>
        </DialogHeader>
        <div className="mt-4 font-inter space-y-4">
          {/* Always visible sections */}
          <div className="grid grid-cols-2 gap-16">
            <div>
              <p className="font-semibold">Product Information:</p>
              <ul className="text-gray-700 space-y-1">
                <li>
                  <strong>ID:</strong> {traceabilityData.productId}
                </li>
                <li>
                  <strong>Name:</strong> {traceabilityData.name}
                </li>
                <li>
                  <strong>Category:</strong> {traceabilityData.category}
                </li>
                <li>
                  <strong>Origin:</strong> {traceabilityData.origin}
                </li>
                <li>
                  <strong>Harvest Date:</strong> {traceabilityData.harvestDate}
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Producer Details:</p>
              <ul className="text-gray-700 space-y-1">
                <li>
                  <strong>Name:</strong> {traceabilityData.producer.name}
                </li>
                <li>
                  <strong>Location:</strong> {traceabilityData.producer.location}
                </li>
                <li>
                  <strong>Farming Method:</strong> {traceabilityData.producer.farmingMethod}
                </li>
                <li>
                  <strong>Certification:</strong> {traceabilityData.producer.certification}
                </li>
              </ul>
            </div>
          </div>

          {/* Expandable sections */}
          {showMore && (
            <div className=" grid grid-cols-2 gap-16 animate-in slide-in-from-top duration-300">
              <div>
                <p className="font-semibold">Processing & Storage:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>
                    <strong>Packaging Center:</strong> {traceabilityData.processing.packagingCenter}
                  </li>
                  <li>
                    <strong>Packaging Date:</strong> {traceabilityData.processing.packagingDate}
                  </li>
                  <li>
                    <strong>Storage Temperature:</strong> {traceabilityData.processing.storageTemperature}
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Logistics & Distribution:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>
                    <strong>Transporter:</strong> {traceabilityData.logistics.transporter}
                  </li>
                  <li>
                    <strong>Batch Number:</strong> {traceabilityData.logistics.batchNumber}
                  </li>
                  <li>
                    <strong>Warehouse:</strong> {traceabilityData.logistics.warehouse}
                  </li>
                </ul>
              </div>

            </div>
          )}

          {/* See More button */}
          <button className="flex items-center mt-4 text-accent-600 bg-white-50 font-semibold hover:text-accent-700 transition duration-300" onClick={() => setShowMore(!showMore)}>
            {showMore ? "See Less" : "See More"}
            <ChevronDownCircle className={`ml-2 h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`} /> 
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TraceabilityDialog

