"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Archive, Copy, Eye, Share } from "lucide-react"
import { ActionMenu } from "./ActionMenu"

interface Sale {
  id: number
  productId: number
  agencyId: number
  quantity: number
  totalAmount: number
  date: string
  status: "completed" | "pending" | "cancelled"
}

const mockSales: Sale[] = [
  {
    id: 1,
    productId: 1,
    agencyId: 1,
    quantity: 50,
    totalAmount: 5000,
    date: "2024-02-18",
    status: "completed",
  },
  {
    id: 2,
    productId: 2,
    agencyId: 1,
    quantity: 30,
    totalAmount: 3000,
    date: "2024-02-17",
    status: "pending",
  },
  {
    id: 3,
    productId: 1,
    agencyId: 2,
    quantity: 25,
    totalAmount: 2500,
    date: "2024-02-16",
    status: "completed",
  },
]

export default function Sales() {
  const [sales] = useState<Sale[]>(mockSales)
  const [selectedPeriod, setSelectedPeriod] = useState<string>("all")
  const [selectedStatus, setSelectedStatus] = useState<string>("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600"
      case "pending":
        return "text-yellow-600"
      case "cancelled":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const filteredSales = sales.filter((sale) => {
    if (selectedStatus !== "all" && sale.status !== selectedStatus) return false
    return true
  })

  const totalRevenue = filteredSales.reduce((sum, sale) => sum + sale.totalAmount, 0)
  const totalQuantity = filteredSales.reduce((sum, sale) => sum + sale.quantity, 0)

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-2dp">
        <CardHeader>
          <CardTitle>
            <p className="text-paragraph-lg font-satoshi font-semibold">Sales Overview</p>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Period</label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <Input type="text" placeholder="Search sales..." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-medium">FCFA {totalRevenue.toLocaleString()}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Total Quantity Sold</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-medium">{totalQuantity.toLocaleString()} units</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <p className="text-paragraph-lg font-satoshi font-semibold">Sales History</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Product ID</TableHead>
                <TableHead>Agency ID</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSales.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell>{sale.productId}</TableCell>
                  <TableCell>{sale.agencyId}</TableCell>
                  <TableCell>{sale.quantity}</TableCell>
                  <TableCell>FCFA{sale.totalAmount}</TableCell>
                  <TableCell className={getStatusColor(sale.status)}>
                    {sale.status.charAt(0).toUpperCase() + sale.status.slice(1)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <ActionMenu
                        onEdit={() => console.log("Edit clicked")}
                        onToggleActive={() => console.log("Toggle active clicked")}
                        isActive={true}
                        customActions={[
                          {
                            label: "View Details",
                            onClick: () => console.log("Viewing details"),
                            icon: <Eye className="h-4 w-4" />,
                          },
                          {
                            label: "Duplicate",
                            onClick: () => console.log("Sale copy created"),
                            icon: <Copy className="h-4 w-4" />,
                          },
                          {
                            label: "Share",
                            onClick: () => console.log("Shared"),
                            icon: <Share className="h-4 w-4" />,
                          },
                          {
                            label: "Archive",
                            onClick: () => console.log("Archived"),
                            icon: <Archive className="h-4 w-4" />,
                          },
                        ]}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

