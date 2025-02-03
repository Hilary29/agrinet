import React from 'react';

interface Sale {
  name: string;
  email: string;
  amount: number; // Change amount to a number for better type safety
}

const salesData: Sale[] = [
  { name: 'Chinonso Okafor', email: 'chinonso.okafor@email.com', amount: 1999.00 },
  { name: 'Amina Sow', email: 'amina.sow@email.com', amount: 39.00 },
  { name: 'Emeka Nwosu', email: 'emeka.nwosu@email.com', amount: 299.00 },
  { name: 'Fatoumata Kamara', email: 'fatoumata.kamara@email.com', amount: 99.00 },
  { name: 'Jean-Pierre Ngoya', email: 'jeanpierre.ngoya@email.com', amount: 39.00 },
];

const RecentSales: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold font-satoshi mb-4">Recent Sales</h2>
      <ul className="mt-2">
        {salesData.map((sale, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <div>
              <span className="block text-gray-800">{sale.name}</span>
              <span className="text-sm text-gray-500">{sale.email}</span>
            </div>
            <span className="text-positive-600">FCFA {sale.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSales;