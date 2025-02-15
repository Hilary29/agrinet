

import Image from "next/image";
import logo from "../public/images/logo.png";

interface ExpenseItem {
    category: string
    amount: number
    progress: number
  }
  
  const expenses: ExpenseItem[] = [
    { category: "My Recent Purchases", amount: 120, progress: 50 },
    { category: "Favorite Products", amount: 200, progress: 70 },
    { category: "Pending Orders", amount: 80, progress: 30 },
    { category: "Wishlist Items", amount: 15, progress: 60 },
    { category: "Discounted Offers", amount: 9, progress: 40 },
  ];
  
  export default function ExpenseTracker() {
    return (
      <div className=" h-screen w-[400px] rounded-md bg-white-50 p-6 shadow-lg">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-black-200">Where your money go?</h2>
  
          <div className="space-y-4">
            {expenses.map((expense) => (
              <div key={expense.category} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{expense.category}</span>
                  <span className="font-medium">{new Intl.NumberFormat().format(expense.amount)}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: `${expense.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
  
          <div className="rounded-xl bg-gray-50 p-6">
          <div className="mb-4 flex items-end space-x-4">
            <div className="relative h-10 w-10 flex ">
              <Image
                src={logo}
                alt="Agrinet logo"
                className="w-8 h-[20px] lg:w-10 lg:h-[28px]"
              />
              <p className="font-poppins text-heading-desktop-h5 font-semibold text-secondary-700">
                Agrinet
              </p>{" "}
              <p className="px-4 font-satoshi text-heading-desktop-h6 font-semibold text-secondary-700">
                Tips
              </p>
            </div>
          </div>

          <p className="mb-2 font-semibold">Save more money</p>
          <p className="mb-4 text-sm text-gray-700">
          Learn how to take advantage of discounts, plan your purchases wisely, and reduce unnecessary costs.
          </p>
          <button className="w-full rounded-lg bg-black-50 py-3 font-inter font-medium text-white-50 hover:bg-gray-800">
            VIEW TIPS
          </button>
        </div>
        </div>
      </div>
    )
  }
  
  