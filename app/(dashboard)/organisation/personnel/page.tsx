"use client";

import { useState, useEffect } from "react";
import { DataTable } from "@/components/organizationDataTable";
import { DataGrid } from "@/components/OrganizationDataGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Archive,
  ArrowLeft,
  Copy,
  Edit,
  Eye,
  Grid,
  List,
  Mail,
  Search,
  Share,
  Trash,
} from "lucide-react";
import IntroText from "@/components/IntroText";
import { Personnel, getPersonnel } from "@/public/data/organization-personnel";
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";
import CreateEmployee from "@/components/CreateEmployee";
import { ActionMenu } from "@/components/ActionMenu";

const EMPLOYEE_ROLES = [
  "SALESPERSON",
  "MANAGER",
  "ADMIN",
  "SUPPORT",
  "OTHER",
] as const;
type EmployeeRole = (typeof EMPLOYEE_ROLES)[number];

interface FormData {
  agencyId: string;
  lastName: string;
  firstName: string;
  department: string;
  employeeRole: EmployeeRole | "";
}

const Page = () => {
  const [personnel, setPersonnel] = useState<Personnel[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "table">("table");
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);
  const [formData, setFormData] = useState<FormData>({
    agencyId: "", // À remplir avec l'ID de l'agence actuelle
    lastName: "",
    firstName: "",
    department: "",
    employeeRole: "",
  });

  const handleAddPersonnel = () => {
    setShowForm(true);
  };

  const handleGoBack = () => {
    setShowForm(false);
  };

  useEffect(() => {
    getPersonnel().then(setPersonnel);
  }, []);

  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "position", header: "Position" },
    { accessorKey: "email", header: "Email" },
    {
      id: "actions",
      cell: ({ row }: { row: { original: { id: number } } }) => (
        <div className="flex flex-col sm:flex-row gap-2 justify-end ">
          <ActionMenu
            onEdit={() => console.log("Edit clicked")}
            onToggleActive={() => console.log("Toggle active clicked")}
            /*   onDelete={() => console.log("Delete clicked")} */
            isActive={true}
            customActions={[
              {
                label: "Duplicate",
                onClick: () => console.log("Product copy created"),
                icon: <Copy className="h-4 w-4" />,
              },
              {
                label: "View Details",
                onClick: () => console.log("Viewing details"),
                icon: <Eye className="h-4 w-4" />,
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
      ),
    },
  ];

  const renderPersonnelCard = (person: Personnel) => (
    <div className="space-y-2">
      <p className="font-semibold text-paragraph-lg">{person.name}</p>
      <p className="text-sm text-gray-900">{person.position}</p>
      <p className="text-sm text-gray-900">{person.email}</p>
      <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-end">
      <ActionMenu
            onEdit={() => console.log("Edit clicked")}
            onToggleActive={() => console.log("Toggle active clicked")}
            /*   onDelete={() => console.log("Delete clicked")} */
            isActive={true}
            customActions={[
              {
                label: "Duplicate",
                onClick: () => console.log("Product copy created"),
                icon: <Copy className="h-4 w-4" />,
              },
              {
                label: "View Details",
                onClick: () => console.log("Viewing details"),
                icon: <Eye className="h-4 w-4" />,
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
    </div>
  );

  if (!showForm) {
    if (control_auth_component_roles("personnel", "component")) {
      return (
        <div>
          <IntroText
            title="Team & Staff"
            description="Oversee your team members, assign roles, and streamline communication within your organization."
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
                  onClick={handleAddPersonnel}
                  className="w-full bg-primary-600 text-white-50 hover:bg-primary-700"
                >
                  + Add Member
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              {viewMode === "table" ? (
                <DataTable columns={columns} data={personnel} />
              ) : (
                <DataGrid data={personnel} renderItem={renderPersonnelCard} />
              )}
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="flex flex-row gap-4  ">
        <button onClick={handleGoBack} className=" hover:text-black-300 ">
          <ArrowLeft />
        </button>
        <div className="flex flex-col items-center  sm:items-start gap-1 absolute md:static">
          <p className="text-heading-desktop-h6 md:text-heading-desktop-h5 font-semibold font-satoshi  text-black-50">
            Create new Employee
          </p>
          <p className="text-paragraph-sm md:text-paragraph-md font-normal font-inter leading-6 text-primary-600 ">
            Organization
          </p>
        </div>
      </div>
      <CreateEmployee />
    </div>
  );
};

export default Page;
