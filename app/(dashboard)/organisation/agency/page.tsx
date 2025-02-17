"use client";

import { useState, useEffect } from "react";
import { DataTable } from "@/components/organizationDataTable";
import { DataGrid } from "@/components/OrganizationDataGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Edit, Grid, List, Search, Trash } from "lucide-react";
import IntroText from "@/components/IntroText";
import { Agency, getAgencies } from "@/public/data/organization-agency";
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";
import CreateAgency from "@/components/CreateAgency";

interface FormData {
  organisationId: string;
  shortName: string;
  location: string;
  longName: string;
  description: string;
}

const Page = () => {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "table">("table");
  const [showForm, setShowForm] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);
  const [formData, setFormData] = useState<FormData>({
    organisationId: "6a33fad4-2ef4-45c4-9a0b-5d38ab51b215",
    shortName: "",
    location: "",
    longName: "",
    description: "",
  });

  const handleAddAgency = () => {
    setShowForm(true);
  };

  const handleGoBack = () => {
    setShowForm(false);
  };

  useEffect(() => {
    getAgencies().then(setAgencies);
  }, []);

  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "address", header: "Adress" },
    { accessorKey: "phone", header: "Phone Number" },
    { accessorKey: "location", header: "Location" },
    {
      id: "actions",
      cell: ({ row }: { row: { original: { id: number } } }) => (
        <div className="flex flex-col sm:flex-row gap-2 justify-end">
          <Link href={`/organization/agency/${row.original.id}/edit`}>
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

  const renderAgencyCard = (agency: Agency) => (
    <div className="space-y-2">
      <p className="font-semibold text-paragraph-lg">{agency.name}</p>
      <p className="text-sm text-gray-900">{agency.address}</p>
      <p className="text-sm text-gray-900">{agency.phone}</p>
      <p className="text-sm text-gray-900">{agency.location}</p>
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <Link
          href={`/organisation/agency/${agency.id}/edit`}
          className="w-full sm:w-auto"
        >
          <Button variant="outline" size="sm" className="w-full">
            Edit
          </Button>
        </Link>
        <Button variant="destructive" size="sm" className="w-full sm:w-auto">
          Modify
        </Button>
      </div>
    </div>
  );

  if (!showForm) {
    if (control_auth_component_roles("agency", "component")) {
      return (
        <div>
          <IntroText
            title="Agency Overview"
            description="Manage your agency's details, structure, and collaborations to optimize performance and partnerships."
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
                    onClick={handleAddAgency}
                    className="w-full bg-primary-600 text-white-50 hover:bg-primary-700"
                  >
                    + New Agency
                  </Button>
              </div>
            </div>
            <div className="overflow-x-auto ">
              {viewMode === "table" ? (
                <DataTable columns={columns} data={agencies} />
              ) : (
                <DataGrid data={agencies} renderItem={renderAgencyCard} />
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
            Create new Agency
          </p>
          <p className="text-paragraph-sm md:text-paragraph-md font-normal font-inter leading-6 text-primary-600 ">
            Organization
          </p>
        </div>
      </div>
      <CreateAgency />
    </div>
  );
};

export default Page;
