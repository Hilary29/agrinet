"use client";

import type React from "react";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

// Enum pour les rôles d'employés
const EMPLOYEE_ROLES = [
  "SALESPERSON",
  "MANAGER",
  "ADMIN",
  "SUPPORT",
  "OTHER",
] as const;
type EmployeeRole = (typeof EMPLOYEE_ROLES)[number];

type FormData = {
  agencyId: string;
  lastName: string;
  firstName: string;
  department: string;
  employeeRole: EmployeeRole | "";
};

export default function CreateEmployee() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    agencyId: "", // À remplir avec l'ID de l'agence actuelle
    lastName: "",
    firstName: "",
    department: "",
    employeeRole: "",
  });
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4001/api/v1/employee/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Employee created:", response.data);
      router.push("/organisation/business"); // Redirection vers la liste des employés
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Une erreur est survenue lors de la création de l'employé"
        );
        console.error("API Error:", error.message);
      } else {
        setError("Une erreur inattendue s'est produite");
        console.error("Unknown error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white-50 p-4 rounded-md ">
        <div className="p-2">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">Firstname</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Lastname</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  value={formData.department}
                  onChange={(e) => handleChange("department", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employeeRole">Role</Label>
                <Select
                  value={formData.employeeRole}
                  onValueChange={(value) => handleChange("employeeRole", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un rôle" />
                  </SelectTrigger>
                  <SelectContent>
                    {EMPLOYEE_ROLES.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-8">
              <Button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white-50 transition duration-300"
                onClick={() =>
                  toast("Employee has been created", {
                    description:
                      "A new Member has been added to your organisation",
                  })
                }
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Employee"
                )}
              </Button>

              {error && (
                <Alert variant="destructive" className="mt-4">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
