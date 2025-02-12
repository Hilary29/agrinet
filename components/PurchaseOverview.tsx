"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Purchase = {
  id: string
  item: string
  quantity: number
  cost: number
}

const PurchaseOverview: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([
    { id: "1", item: "Raw Material A", quantity: 100, cost: 500 },
    { id: "2", item: "Raw Material B", quantity: 50, cost: 250 },
  ])
  const [newPurchase, setNewPurchase] = useState<Omit<Purchase, "id">>({ item: "", quantity: 0, cost: 0 })

  const handleAddPurchase = () => {
    setPurchases([...purchases, { ...newPurchase, id: Date.now().toString() }])
    setNewPurchase({ item: "", quantity: 0, cost: 0 })
  }

  return (
    <Card className="w-full my-2 hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-paragraph-lg font-semibold font-satoshi">Purchase Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {purchases.map((purchase) => (
            <div key={purchase.id} className="flex justify-between items-center">
              <span>{purchase.item}</span>
              <span>Qty: {purchase.quantity}</span>
              <span>${purchase.cost.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default PurchaseOverview

