
import React, { useState} from 'react'
import { redirect } from 'next/navigation'




export default function Page() {
  
  
  async function createInvoice(formData: FormData) {
    'use server'
    let url: string = ''
    const rawFormData = {
      serviceId: formData.get('serviceId'),
      amount: formData.get('amount'),
      Description: formData.get('description'),
      currency: formData.get('currency'),
      motif: formData.get('motif'),
     
      
    }

    
    console.log(rawFormData)
 
    try {
      const response = await fetch('http://localhost:8081/api/links_pay', {
        method: 'POST',
        body: JSON.stringify(rawFormData),
    
      });
  
      // Gérer la réponse si nécessaire
      const data = await response.json();
      url = data.url;
      console.log(url);
    } catch (error) {
      // Gérer l'erreur si nécessaire
      console.error(error);
    }
    
    if (url !== '') redirect(url);
  }

 
  return(
    <div className="bg-slate-500 h-screen flex items-center justify-center">
       <form action={createInvoice} className="bg-white p-8 rounded shadow-md">
         <div className="flex flex-col space-y-4">
           <div className="flex items-center">
             <label htmlFor="transaction_amount" className="mr-4 w-20">
             ServiceId:
             </label>
          <input
              type="text"
              id="reservationId"
              name="id" 
              className="border rounded py-2 px-4 flex-grow"
              
            />
          </div>
          <div className="flex items-center">
             <label htmlFor="transaction_currency" className="mr-4 w-20">
               Montant:
             </label>
          <input
              type="numeric"
              id="price"
              name="amount"
              className="border rounded py-2 px-4 flex-grow"
             
            />
          </div>
          
          <div className="flex items-center">
            <label htmlFor="transaction_reason" className="mr-4 w-20">
              Description :
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="border rounded py-2 px-4 flex-grow"
             
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="transaction_reason" className="mr-4 w-20">
              Currency :
            </label>
            <input
              type="text"
              id="currency"
              name="currency"
              className="border rounded py-2 px-4 flex-grow"
             
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="transaction_reason" className="mr-4 w-20">
              Motif :
            </label>
            <input
              type="text"
              id="motif"
              name="motif"
              className="border rounded py-2 px-4 flex-grow"
             
            />
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

































