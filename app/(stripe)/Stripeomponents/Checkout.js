// Create the CustomerSession and obtain its clientSecret
const res = await fetch("/create-customer-session", {
    method: "POST"
  });
  
  const {
    customer_session_client_secret: customerSessionclientSecret
  } = await res.json();
  
  const elementsOptions = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    customerSessionClientSecret,
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  };
  
  // Set up Stripe.js and Elements to use in checkout form, passing the client secret
  // and CustomerSession's client secret obtained in a previous step
  const elements = stripe.elements(elementsOptions);
  
  // Create and mount the Payment Element
  const paymentElement = elements.create('payment');
  paymentElement.mount('#payment-element');

  paymentElement.on('change', function(event) {
    if (event.value.payment_method) {
      // Control dynamic content if a saved payment method is selected
    }
  })

  const handleServerResponse = async (response) => {
    if (response.error) {
      // Show error from server on payment form
    } else if (response.status === "requires_action") {
      // Use Stripe.js to handle the required next action
      const {
        error,
        paymentIntent
      } = await stripe.handleNextAction({
        clientSecret: response.clientSecret
      });
  
      if (error) {
        // Show error from Stripe.js in payment form
      } else {
        // Actions handled, show success message
      }
    } else {
      // No actions needed, show success message
    }
  }