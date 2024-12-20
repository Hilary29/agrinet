import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  const handleServerResponse = (data) => {
    // Handle server response, e.g., show success message, redirect, etc.
    console.log(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error: submitError } = await elements.getElement(PaymentElement).confirm();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const { error, confirmationToken } = await stripe.createConfirmationToken({
      payment_method: {
        card: elements.getElement(PaymentElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    });

    if (error) {
      handleError(error);
      return;
    }

    const res = await fetch("http://localhost:8081/create-confirm-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        confirmationTokenId: confirmationToken.id,
      }),
    });

    const data = await res.json();

    handleServerResponse(data);
  };

  return (
    
    <form onSubmit={handleSubmit} >
      <PaymentElement />
      <button className='btn border-t-green-500' disabled={!stripe || loading} >
        Submit
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}