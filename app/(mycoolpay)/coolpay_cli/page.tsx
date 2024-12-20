import React, { useState} from 'react'
import { redirect } from 'next/navigation'



export default function Page() {
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  // const [amount, setAmount] = useState<number>(50)
  // const [url, setUrl] = useState<string>('')
  
  async function createInvoice(formData: FormData) {
    'use server'
    let url: string = ''
    const rawFormData = {
      transaction_amount: formData.get('transaction_amount'),
      transaction_currency: formData.get('transaction_currency'),
      transaction_reason: formData.get('transaction_reason'),
      customer_phone_number: formData.get('customer_phone_number'),
      customer_name: formData.get('customer_name'),
      customer_email: formData.get('customer_email'),
      customer_lang: formData.get('customer_lang:'),
    }

    
    console.log(rawFormData)
    // 118a4852-7df8-46d9-834b-23b4ef25aaab  5a219fd9-b249-4a58-b362-1448584ffb42
    try {
      const response = await fetch('https://my-coolpay.com/api/118a4852-7df8-46d9-834b-23b4ef25aaab /paylink', {
        method: 'POST',
        body: JSON.stringify(rawFormData),
      })
 
      // Handle response if necessary
      const data = await response.json()
      console.log(data)
      if(data.status == 'success'){
        url = data.payment_url;
        console.log(url)
      
      } 
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    }
    if(url !== "")redirect(url)
  }

 
  return(
    <div className="bg-slate-500 h-screen flex items-center justify-center">
       <form action={createInvoice} className="bg-white p-8 rounded shadow-md">
         <div className="flex flex-col space-y-4">
           <div className="flex items-center">
             <label htmlFor="transaction_amount" className="mr-4 w-20">
               Montant:
             </label>
          <input
              type="numeric"
              id="transaction_amount"
              name="transaction_amount"
              // value={}
              className="border rounded py-2 px-4 flex-grow"
              
            />
          </div>
          <div className="flex items-center">
             <label htmlFor="transaction_currency" className="mr-4 w-20">
               Monaie:
             </label>
          <input
              type="numeric"
              id="transaction_currency"
              name="transaction_currency"
              value="XAF"
              className="border rounded py-2 px-4 flex-grow"
             
            />
          </div>
          
          <div className="flex items-center">
            <label htmlFor="transaction_reason" className="mr-4 w-20">
              Motif :
            </label>
            <input
              type="text"
              id="transaction_reason"
              name="transaction_reason"
              value="reservation"
              className="border rounded py-2 px-4 flex-grow"
             
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="customer_phone_number" className="mr-4 w-20">
              Télephone:
            </label>
            <input
              type="text"
              id="customer_phone_number"
              name="customer_phone_number"
              className="border rounded py-2 px-4 flex-grow"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="customer_name" className="mr-4 w-20">
              Nom:
            </label>
            <input
              type="text"
              id="customer_name"
              name="customer_name"
              className="border rounded py-2 px-4 flex-grow"
            />
          </div>
          <div className="flex items-center">
             <label htmlFor="customer_email" className="mr-4 w-20">
                 Email:
             </label>
             <input
              type="text"
              id="customer_email"
              name="customer_email"
              className="border rounded py-2 px-4 flex-grow"
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="customer_lang" className="mr-4 w-20">
              Langue:
            </label>
            <select
              id="customer_lang"
              name="customer_lang"
              className="border rounded py-2 px-4 flex-grow"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
          </div>
          <button
            type="submit"
            // value={isLoading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            {/* {isLoading ? 'Loading...' : 'Envoyer'} */}
            Envoyer
          </button>
        </div>
      </form>
    </div>
  ) 
  
}

































