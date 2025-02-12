import { Card } from "@/components/ui/card";
import { BarChart3, ShoppingBag, Package, Users } from "lucide-react";
import type React from "react"; // Added import for React

interface MetricCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  change: string;
  bgColor: string;
  iconColor: string;
}

function MetricCard({
  icon,
  value,
  label,
  change,
  bgColor,
  iconColor,
}: MetricCardProps) {
  return (
    <Card className={`p-6 ${bgColor}`}>
      <div className="space-y-4">
        <div
          className={`w-12 h-12 rounded-full ${iconColor} flex items-center justify-center`}
        >
          {icon}
        </div>
        <div className="space-y-2 font-inter">
          <div className="text-2xl text-black-200 font-semibold">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
          <div className="text-xs text-blue-600">{change}</div>
        </div>
      </div>
    </Card>
  );
}

export default function UserMetrics() {
  const metrics = [
    {
      icon: <BarChart3 className="w-6 h-6 text-white-50" />,
      value: "FCFA 5500",
      label: "Total expenses",
      change: "+8% from yesterday",
      bgColor: "bg-pink-50",
      iconColor: "bg-pink-500",
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-white-50" />,
      value: "2",
      label: "Total Order",
      change: "+45% from yesterday",
      bgColor: "bg-orange-50",
      iconColor: "bg-orange-500",
    },
    {
      icon: <Package className="w-6 h-6 text-white-50" />,
      value: "1",
      label: "Product Bought",
      change: "+12% from yesterday",
      bgColor: "bg-green-50",
      iconColor: "bg-green-500",
    },
  ];

  return (
    <div className="pt-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-paragraph-lg font-semibold font-satoshi">
            Activity Summary
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
}
