// components/TransactionHistory.tsx
import React from 'react';

interface Transaction {
  date: string;
  amount: number;
  description: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-semibold">Transaction History</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className="mb-2">
            <strong>{transaction.date}</strong>: ${transaction.amount} - {transaction.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;