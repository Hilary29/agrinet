"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Transaction = {
  id: string;
  date: string;
  type: "sale" | "purchase";
  amount: number;
  description: string;
};

const TransactionHistory2: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      date: "2023-06-01",
      type: "sale",
      amount: 1000,
      description: "Product A sale",
    },
    {
      id: "2",
      date: "2023-06-02",
      type: "purchase",
      amount: -500,
      description: "Raw materials purchase",
    },
    {
      id: "3",
      date: "2023-06-03",
      type: "sale",
      amount: 1500,
      description: "Product B sale",
    },
  ]);

  return (
    <Card className="w-full my-4 hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle>
          {" "}
          <p className="text-paragraph-lg font-semibold font-satoshi">
            Transaction History
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell
                  className={
                    transaction.type === "sale"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  FCFA {transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell>{transaction.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory2;
