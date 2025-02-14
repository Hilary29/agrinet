'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type Order = {
  id: string
  customer: string
  amount: number
  date: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
}

const OrderTracking: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 'ORD001', customer: 'Alice Kamga', amount: 150.00, date: '2023-06-15', status: 'delivered' },
    { id: 'ORD002', customer: 'Mbaham Modoum', amount: 89.99, date: '2023-06-16', status: 'processing' },
    { id: 'ORD003', customer: 'Charlie Atangana', amount: 299.50, date: '2023-06-17', status: 'pending' },
  ])
  const [newOrder, setNewOrder] = useState<Omit<Order, 'id'>>({ customer: '', amount: 0, date: '', status: 'pending' })

  const handleAddOrder = () => {
    const id = `ORD${String(orders.length + 1).padStart(3, '0')}`
    setOrders([...orders, { ...newOrder, id }])
    setNewOrder({ customer: '', amount: 0, date: '', status: 'pending' })
  }

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'processing': return 'bg-blue-100 text-blue-800'
      case 'shipped': return 'bg-purple-100 text-purple-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className="w-full my-4 bg-white-50 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="">
        <CardTitle className="text-paragraph-lg font-semibold font-satoshi">Order Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-4">
          {orders.map((order) => (
            <div key={order.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2  rounded-md">
              <span className="font-medium ">{order.id}</span>
              <span className="">{order.customer}</span>
              <span className="font-semibold ">FCFA{order.amount.toFixed(2)}</span>
              <span className="">{order.date}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
          ))}
        </div>

      </CardContent>
    </Card>
  )
}

export default OrderTracking
