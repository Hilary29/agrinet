// import React, { useEffect, useState } from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm';

// const App = () => {
//   const [stripePromise, setStripePromise] = useState(null);

//   useEffect(() => {
//     const fetchStripeKey = async () => {
//       const stripeKey = await loadStripe('pk_test_51QCJZPRvLKDuwJKqliCkENfRj3YnKutUxmgcOfktNVASMYVcpcdKCkC93AiaUk1O3p5Uf5u4j8OJz7vz2IKjngjK00ZMXQfoh0');
//       setStripePromise(stripeKey);
//     };

//     fetchStripeKey();
//   }, []);

//   const options = {
//     mode: 'payment',
//     amount: 1099,
//     currency: 'usd',
//     paymentMethodCreation: 'manual',
//     // appearance: {
//     //   theme: 'stripe',
//     //   variables: {
//     //     colorPrimary: '#0570de',
//     //     colorBackground: '#ffffff',
//     //     colorText: '#30313d',
//     //     colorDanger: '#df1b41',
//     //     fontFamily: 'Ideal Sans, system-ui, sans-serif',
//     //     spacingUnit: '2px',
//     //     borderRadius: '4px',
//     //   },
//     // },
//   };

//   const createPaymentElement = (stripe) => {
//     const paymentElement = stripe.elements().create('payment', {
//       // layout: {
//       //   //type: 'accordion',
//       //   //defaultCollapsed: false,
//       //   radios: true,
//       //   spacedAccordionItems: false,
//       // },
//     });

//     return paymentElement;
//   };

//   return (
//     <div className=' flex flex-col items-center justify-center'>
//       {stripePromise && (
//         <Elements stripe={stripePromise} className='w-1/2'>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </div>
//   );
// };

// export default App;




//import * as React from 'react';
import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { randomUUID } from 'crypto';

const stripePromise = loadStripe('pk_test_51QCJZPRvLKDuwJKqliCkENfRj3YnKutUxmgcOfktNVASMYVcpcdKCkC93AiaUk1O3p5Uf5u4j8OJz7vz2IKjngjK00ZMXQfoh0');


const payment = {
    product_name: "subscription",
	  transaction_amount:1000,
	  product_description: "soubscription d'un forfait de voyage ",
	  transaction_currency:"XAF",
	  transaction_reason: "subscription d'un service",
	  transactionMethod: "card",
    consumerId: "consumer_112",
    metadata: {product_id: "product_1234", customer_name: "mohamed nsangou"}
}



const App = () => {

  const fetchClientSecret = useCallback(() => {
    // Créer une session de paiement avec les détails du produit
    return fetch("http://localhost:8081/api/create-checkout-session/1njkkuunnnnntey#-vdty3_jnlas2456dvcb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payment)
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
      console.log(res);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};


export default App;

