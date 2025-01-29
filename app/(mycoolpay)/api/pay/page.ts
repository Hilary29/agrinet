// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//     transaction_amount: number;
//     transaction_currency: string;
//     transaction_reason: string;
//     customer_phone_number: string;
//     customer_name: string;
//     customer_email: string;
//     customer_lang: string;
//   };

//   const sendData: Data = {
//       transaction_amount: 50,
//       transaction_currency: 'XAF',
//       transaction_reason: 'reservation',
//       customer_phone_number: '657571255',
//       customer_name: 'mo',
//       customer_email: 'mosanisangou@gmail.com',
//       customer_lang: 'fr',
//     };


//   async function createItem(params: any) {

//     try {
//       const formData = params
//       const response = await fetch('https://my-coolpay.com/api/5a219fd9-b249-4a58-b362-1448584ffb42/paylink', {
//         method: 'POST',
//         body: JSON.stringify(sendData),
//       })
 
//       // Handle response if necessary
//       const data = await response.json()
//       console.log(data)
//       // ...
//     } catch (error) {
//       // Handle error if necessary
//       console.error(error)
//     }
    
//   }
 
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const data = req.body
//   const id = await createItem(data)
//   //res.status(200).json({ id });
//  console.log(data)


// }

