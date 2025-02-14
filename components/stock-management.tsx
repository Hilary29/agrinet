"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { type Product, getProducts } from "@/public/data/organization-products";
import { type Agency, getAgencies } from "@/public/data/organization-agency";

interface StockItem {
  id: number;
  productId: number;
  agencyId: number;
  quantity: number;
  status: "En stock" | "Stock faible" | "Rupture";
}

// Données mockées pour le stock - à remplacer par un appel API
const getMockStock = async (): Promise<StockItem[]> => {
  return [
    { id: 1, productId: 1, agencyId: 1, quantity: 150, status: "En stock" },
    { id: 2, productId: 2, agencyId: 1, quantity: 5, status: "Stock faible" },
    { id: 3, productId: 1, agencyId: 2, quantity: 0, status: "Rupture" },
  ];
};

export default function StockManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [stockItems, setStockItems] = useState<StockItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const [productsData, agenciesData, stockData] = await Promise.all([
        getProducts(),
        getAgencies(),
        getMockStock(),
      ]);
      setProducts(productsData);
      setAgencies(agenciesData);
      setStockItems(stockData);
    };
    loadData();
  }, []);

  const getProductName = (productId: number) => {
    return products.find((p) => p.id === productId)?.name || "Produit inconnu";
  };

  const getAgencyName = (agencyId: number) => {
    return agencies.find((a) => a.id === agencyId)?.name || "Agence inconnue";
  };

  const getStatusColor = (status: StockItem["status"]) => {
    switch (status) {
      case "En stock":
        return "bg-green-100";
      case "Stock faible":
        return "bg-yellow-100";
      case "Rupture":
        return "bg-red-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {" "}
          <p className="text-paragraph-lg font-satoshi font-semibold">Manage Stocks</p>
        </CardTitle>
        <CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Agency</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stockItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{getProductName(item.productId)}</TableCell>
                  <TableCell>{getAgencyName(item.agencyId)}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={getStatusColor(item.status)}
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" >
                     Adjust
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
