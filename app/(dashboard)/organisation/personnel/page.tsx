"use client";

import { useState, useEffect } from "react";
import { DataTable } from "@/components/organizationDataTable";
import { DataGrid } from "@/components/OrganizationDataGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Edit, Grid, List, Search, Trash } from "lucide-react";
import IntroText from "@/components/IntroText";
import { Personnel, getPersonnel } from "@/public/data/organization-personnel";
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";

const Page = () => {
  const [personnel, setPersonnel] = useState<Personnel[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "table">("table")

  useEffect(() => {
    getPersonnel().then(setPersonnel)
  }, [])

  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "position", header: "Position" },
    { accessorKey: "email", header: "Email" },
    {
      id: "actions",
      cell: ({ row }: { row: { original: { id: number } } }) => (
        <div className="flex flex-col sm:flex-row gap-2 justify-end ">
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

  const renderPersonnelCard = (person: Personnel) => (
    <div className="space-y-2">
      <p className="font-semibold text-paragraph-lg">{person.name}</p>
      <p className="text-sm text-gray-900">{person.position}</p>
      <p className="text-sm text-gray-900">{person.email}</p>
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <Link href={`/dashboard/organization/personnel/${person.id}/edit`} className="w-full sm:w-auto">
          <Button variant="outline" size="sm" className="w-full">
            Edit
          </Button>
        </Link>
        <Button variant="destructive" size="sm" className="w-full sm:w-auto">
          Delete
        </Button>
      </div>
    </div>
  )

  if (control_auth_component_roles("personnel", "component")) {
    return (
      <div>
        <IntroText
          title="Team & Personnel"
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
                  className={`${viewMode === "table"
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
                  className={`${viewMode === "grid"
                    ? "bg-[#0000003c] hover:bg-[#0000005d]"
                    : ""
                    } w-full sm:w-auto px-2`}
                >
                  <Grid className="h-4 w-4" />
                </Button>
              </div>
              <Link
                href="/organisation/agency/create"
                className="w-full sm:w-auto"
              >
                <Button className="w-full bg-primary-600 text-white-50 hover:bg-primary-700">
                  + Add Member
                </Button>
              </Link>
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
};

export default Page;
