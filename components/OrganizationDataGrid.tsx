"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface DataGridProps<TData> {
  data: TData[]
  renderItem: (item: TData) => React.ReactNode
}

export function DataGrid<TData>({ data, renderItem }: DataGridProps<TData>) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <Card key={index} className="h-full">
          <CardContent className="p-4 h-full flex flex-col justify-between">{renderItem(item)}</CardContent>
        </Card>
      ))}
    </div>
  )
}

