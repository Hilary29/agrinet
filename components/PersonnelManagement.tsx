"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Employee = {
  id: string
  name: string
  position: string
  salary: number
}

const PersonnelManagement: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: "1", name: "Nyalle Alino", position: "Manager", salary: 5000 },
    { id: "2", name: "Jko Fabrice", position: "Sales Representative", salary: 3500 },
  ])
  const [newEmployee, setNewEmployee] = useState<Omit<Employee, "id">>({ name: "", position: "", salary: 0 })

  const handleAddEmployee = () => {
    setEmployees([...employees, { ...newEmployee, id: Date.now().toString() }])
    setNewEmployee({ name: "", position: "", salary: 0 })
  }

  return (
    <Card className="w-full my-2 hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-paragraph-lg font-semibold font-satoshi">Personnel Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {employees.map((employee) => (
            <div key={employee.id} className="flex justify-between items-center">
              <span>{employee.name}</span>
              <span>{employee.position}</span>
              <span>${employee.salary.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default PersonnelManagement

