"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  type Personnel,
  getPersonnel,
} from "@/public/data/organization-personnel";
import { type Agency, getAgencies } from "@/public/data/organization-agency";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2, Plus, Search, Copy, Eye, Share, Archive } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { ActionMenu } from "./ActionMenu";

interface Planning {
  id: number;
  employeeId: number;
  agencyId: number;
  date: Date;
}

// Données mockées pour les plannings
const mockPlannings: Planning[] = [
  { id: 1, employeeId: 1, agencyId: 1, date: new Date(2024, 1, 15) },
  { id: 2, employeeId: 2, agencyId: 2, date: new Date(2024, 1, 16) },
];

export default function ResourcePlanning() {
  const [personnel, setPersonnel] = useState<Personnel[]>([]);
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [selectedAgency, setSelectedAgency] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [plannings, setPlannings] = useState<Planning[]>(mockPlannings);
  const [editingPlanning, setEditingPlanning] = useState<Planning | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const [personnelData, agenciesData] = await Promise.all([
        getPersonnel(),
        getAgencies(),
      ]);
      setPersonnel(personnelData);
      setAgencies(agenciesData);
    };
    loadData();
  }, []);

  const handleSave = () => {
    if (!selectedEmployee || !selectedAgency || !date) return;

    const newPlanning: Planning = {
      id: editingPlanning?.id || plannings.length + 1,
      employeeId: parseInt(selectedEmployee),
      agencyId: parseInt(selectedAgency),
      date: date,
    };

    if (editingPlanning) {
      setPlannings(
        plannings.map((p) => (p.id === editingPlanning.id ? newPlanning : p))
      );
    } else {
      setPlannings([...plannings, newPlanning]);
    }

    resetForm();
  };

  const handleEdit = (planning: Planning) => {
    setEditingPlanning(planning);
    setSelectedEmployee(planning.employeeId.toString());
    setSelectedAgency(planning.agencyId.toString());
    setDate(planning.date);
    setIsAddingNew(true);
  };

  const handleDelete = (id: number) => {
    setPlannings(plannings.filter((planning) => planning.id !== id));
  };

  const resetForm = () => {
    setEditingPlanning(null);
    setSelectedEmployee("");
    setSelectedAgency("");
    setDate(new Date());
    setIsAddingNew(false);
  };

  const getEmployeeName = (id: number) => {
    const employee = personnel.find((p) => p.id === id);
    return employee ? `${employee.name} (${employee.position})` : "Inconnu";
  };

  const getAgencyName = (id: number) => {
    return agencies.find((a) => a.id === id)?.name || "Inconnue";
  };

  return (
    <div className="space-y-6">
      {isAddingNew ? (
        <Card>
          <CardHeader>
            <CardTitle>
            <p className="text-paragraph-lg font-satoshi font-semibold">
            {editingPlanning ? "Edit Planning" : "New Planning"}
            </p>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Employee</label>
              <Select
                value={selectedEmployee}
                onValueChange={setSelectedEmployee}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un employé" />
                </SelectTrigger>
                <SelectContent>
                  {personnel.map((employee) => (
                    <SelectItem
                      key={employee.id}
                      value={employee.id.toString()}
                    >
                      {employee.name} - {employee.position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Agency</label>
              <Select value={selectedAgency} onValueChange={setSelectedAgency}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une agence" />
                </SelectTrigger>
                <SelectContent>
                  {agencies.map((agency) => (
                    <SelectItem key={agency.id} value={agency.id.toString()}>
                      {agency.name} - {agency.location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Affectation date
              </label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSave}>
                {editingPlanning ? "Update" : "Save"}
              </Button>
              <Button variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="flex justify-between ">
          <div className="relative flex-grow sm:flex-grow-0 md:w-[556px] ">
            <input
              type="text"
              placeholder="Search devices"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white-50 border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
          </div>
          <Button
            onClick={() => setIsAddingNew(true)}
            className="flex items-center gap-2 bg-primary-600 text-white-50 hover:bg-primary-700"
          >
            <Plus className="h-4 w-4" /> New
          </Button>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>
            <p className="text-paragraph-lg font-satoshi font-semibold">
              Employee Plannings
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Agency</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plannings.map((planning) => (
                <TableRow key={planning.id}>
                  <TableCell>{getEmployeeName(planning.employeeId)}</TableCell>
                  <TableCell>{getAgencyName(planning.agencyId)}</TableCell>
                  <TableCell>
                    {format(planning.date, "dd MMMM yyyy", { locale: fr })}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                    <ActionMenu
                        onEdit={() => handleEdit(planning)}
                        onToggleActive={() =>
                          console.log("Toggle active clicked")
                        }
                       /* onDelete={() => console.log("Delete clicked")} */
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
