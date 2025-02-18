"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { type Agency, getAgencies } from "@/public/data/organization-agency";
import { type Product, getProducts } from "@/public/data/organization-products";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Archive, Copy, Eye, Pencil, Share, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ActionMenu } from "./ActionMenu";

interface ProductAllocation {
  id: number;
  agencyId: number;
  productId: number;
  quantity: number;
}

// Données mockées pour les allocations existantes
const mockAllocations: ProductAllocation[] = [
  { id: 1, agencyId: 1, productId: 1, quantity: 100 },
  { id: 2, agencyId: 1, productId: 2, quantity: 50 },
  { id: 3, agencyId: 2, productId: 1, quantity: 75 },
];

export default function ProductAllocation() {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedAgency, setSelectedAgency] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [allocations, setAllocations] =
    useState<ProductAllocation[]>(mockAllocations);
  const [editingAllocation, setEditingAllocation] =
    useState<ProductAllocation | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const [agenciesData, productsData] = await Promise.all([
        getAgencies(),
        getProducts(),
      ]);
      setAgencies(agenciesData);
      setProducts(productsData);
    };
    loadData();
  }, []);

  const handleAllocation = () => {
    if (!selectedAgency || !selectedProduct || !quantity) return;

    const newAllocation: ProductAllocation = {
      id: allocations.length + 1,
      agencyId: Number.parseInt(selectedAgency),
      productId: Number.parseInt(selectedProduct),
      quantity: Number.parseInt(quantity),
    };

    setAllocations([...allocations, newAllocation]);
    setSelectedAgency("");
    setSelectedProduct("");
    setQuantity("");
  };

  const handleEdit = (allocation: ProductAllocation) => {
    setEditingAllocation(allocation);
    setSelectedAgency(allocation.agencyId.toString());
    setSelectedProduct(allocation.productId.toString());
    setQuantity(allocation.quantity.toString());
  };

  const handleDelete = (id: number) => {
    setAllocations(allocations.filter((allocation) => allocation.id !== id));
  };

  const handleUpdate = () => {
    if (!editingAllocation || !selectedAgency || !selectedProduct || !quantity)
      return;

    const updatedAllocations = allocations.map((allocation) =>
      allocation.id === editingAllocation.id
        ? {
            ...allocation,
            agencyId: Number.parseInt(selectedAgency),
            productId: Number.parseInt(selectedProduct),
            quantity: Number.parseInt(quantity),
          }
        : allocation
    );

    setAllocations(updatedAllocations);
    setEditingAllocation(null);
    setSelectedAgency("");
    setSelectedProduct("");
    setQuantity("");
  };

  const getAgencyName = (id: number) => {
    return agencies.find((agency) => agency.id === id)?.name || "Unknown";
  };

  const getProductName = (id: number) => {
    return products.find((product) => product.id === id)?.name || "Unknown";
  };

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-2dp">
        <CardHeader>
          <CardTitle>
            <p className="text-paragraph-lg font-satoshi font-semibold">
              Allocation
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Agency</label>
              <Select value={selectedAgency} onValueChange={setSelectedAgency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select agency" />
                </SelectTrigger>
                <SelectContent>
                  {agencies.map((agency) => (
                    <SelectItem key={agency.id} value={agency.id.toString()}>
                      {agency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Product</label>
              <Select
                value={selectedProduct}
                onValueChange={setSelectedProduct}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id.toString()}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Quantity</label>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                min="1"
              />
            </div>
          </div>

          <Button
            onClick={editingAllocation ? handleUpdate : handleAllocation}
            className="w-full md:w-auto bg-primary-600 text-white-50 hover:bg-primary-700"
          >
            {editingAllocation ? "Update" : "Save"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <p className="text-paragraph-lg font-satoshi font-semibold">
              Product per Agency
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agency</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allocations.map((allocation) => (
                <TableRow key={allocation.id}>
                  <TableCell>{getAgencyName(allocation.agencyId)}</TableCell>
                  <TableCell>{getProductName(allocation.productId)}</TableCell>
                  <TableCell>{allocation.quantity}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <ActionMenu
                        onEdit={() => handleEdit(allocation)}
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
