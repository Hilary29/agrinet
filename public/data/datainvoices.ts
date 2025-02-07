export interface Invoice {
  time: ReactNode;
  id: string;
  date: string; // e.g., "2023-02-07"
  customer: string; // e.g., "John Doe"
  amount: number; // e.g., 150.75
  status: "Paid" | "Pending" | "Cancelled"; // e.g., "Paid"
  description: string; // e.g., "Payment for services rendered."
}

export const invoiceList: Invoice[] = [
  {
    id: "001",
    date: "2023-02-01",
    customer: "AgroTech Cameroon",
    amount: 150.75,
    status: "Paid",
    description: "Subscription for IoT crop monitoring services.",
  },
  {
    id: "002",
    date: "2023-02-05",
    customer: "Buea Farmers Cooperative",
    amount: 200.00,
    status: "Pending",
    description: "Consultation fee for precision farming solutions.",
  },
  {
    id: "003",
    date: "2023-02-07",
    customer: "Douala Agribusiness Solutions",
    amount: 500.00,
    status: "Paid",
    description: "Monthly payment for farm management software.",
  },
  {
    id: "004",
    date: "2023-02-10",
    customer: "Yaoundé Agricultural Supplies",
    amount: 300.50,
    status: "Cancelled",
    description: "Refund for canceled order of fertilizers.",
  },
  {
    id: "005",
    date: "2023-02-12",
    customer: "Camerounais Organic Farms",
    amount: 250.00,
    status: "Pending",
    description: "Payment for organic seeds purchased through the marketplace.",
  },
  {
    id: "006",
    date: "2023-02-15",
    customer: "GreenTech Innovations",
    amount: 750.00,
    status: "Paid",
    description: "Annual subscription for IoT devices and support.",
  },
  {
    id: "007",
    date: "2023-02-18",
    customer: "TechFarm Cameroon",
    amount: 125.00,
    status: "Pending",
    description: "Payment for hardware installation services.",
  },
  {
    id: "008",
    date: "2023-02-20",
    customer: "Smart Agri Solutions",
    amount: 300.25,
    status: "Paid",
    description: "Consulting for smart irrigation systems.",
  },
  {
    id: "009",
    date: "2023-02-22",
    customer: "Home Gardeners Cameroon",
    amount: 400.00,
    status: "Pending",
    description: "Project management fee for urban gardening project.",
  },
  {
    id: "010",
    date: "2023-02-25",
    customer: "City of Bafoussam",
    amount: 600.00,
    status: "Paid",
    description: "Community development grant for agricultural initiatives.",
  },
  {
    id: "011",
    date: "2023-03-01",
    customer: "Farmers Union Cameroon",
    amount: 350.00,
    status: "Pending",
    description: "Payment for training on IoT farming techniques.",
  },
  {
    id: "012",
    date: "2023-03-05",
    customer: "Eko Farm Supplies",
    amount: 450.00,
    status: "Paid",
    description: "Order for irrigation equipment through the marketplace.",
  },
  {
    id: "013",
    date: "2023-03-10",
    customer: "Plantation Innovations",
    amount: 275.50,
    status: "Pending",
    description: "Payment for drone services for crop monitoring.",
  },
  {
    id: "014",
    date: "2023-03-15",
    customer: "Eco-Friendly Farms",
    amount: 500.00,
    status: "Paid",
    description: "Consultation on sustainable farming practices.",
  },
  {
    id: "015",
    date: "2023-03-20",
    customer: "AgriBusiness Hub",
    amount: 300.75,
    status: "Pending",
    description: "Payment for access to agricultural market data.",
  },
  {
    id: "016",
    date: "2023-03-25",
    customer: "Local Farmers Market",
    amount: 225.00,
    status: "Paid",
    description: "Subscription for vendor services in the marketplace.",
  },
];