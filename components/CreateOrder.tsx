"use client"
import {
    PayPalButtons,
    PayPalButtonsComponentProps,
    PayPalScriptProvider,
    ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";

interface OrderData {
    id: string;
    details?: Array<{
        issue: string;
        description: string;
    }>;
    debug_id?: string;
}

const payment = {
    product_name: "subscription",
    transaction_amount: 1000,
    product_description: "soubscription d'un forfait de voyage",
    transaction_currency: "USD",
    transaction_reason: "subscription d'un service",
    transactionMethod: "PAYPAL",
    consumerId: "consumer_112",
    metadata: { product_id: "product_1234", customer_name: "mohamed nsangou" }
};

// const initialOptions: ReactPayPalScriptOptions = {
//     clientId: "AWrgavr7v-VTQtQBs4Zn9yTLPTSA60YFbKGIe5WJIKAAMCKzqWK0CeMr-kAhyoYs1QnYvaGl2mwymvyx"
// };

export default function App() {
    const initialOptions: ReactPayPalScriptOptions = {
        clientId: "AWrgavr7v-VTQtQBs4Zn9yTLPTSA60YFbKGIe5WJIKAAMCKzqWK0CeMr-kAhyoYs1QnYvaGl2mwymvyx",
    };


    const createOrder: PayPalButtonsComponentProps["createOrder"] = async () => {
        try {
            const response = await fetch("http://localhost:8081/api/create-checkout-session/1", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payment),
            });
    
            // Vérifiez si la réponse est correcte et non vide
            if (!response.ok) {
                throw new Error(`Erreur HTTP ! Status : ${response.status}`);
            }
    
            const textResponse = await response.text(); // Lire la réponse brute comme un texte
    
            // Vérifiez si la réponse est vide
            if (!textResponse) {
                throw new Error("Réponse vide du serveur.");
            }
    
            const orderData: OrderData = JSON.parse(textResponse); // Parsez la réponse brute
    
            // Vérifiez si l'ID de l'ordre existe
            if (!orderData.id) {
                const errorDetail = orderData?.details?.[0]; // Vérifiez les détails de l'erreur
                const errorMessage = errorDetail
                    ? `${errorDetail.issue}: ${errorDetail.description} (Debug ID: ${orderData.debug_id})`
                    : "Une erreur inattendue s'est produite. Veuillez réessayer.";
    
                throw new Error(errorMessage);
            }
    
            return orderData.id;
        } catch (error) {
            console.error("Erreur lors de la création de l'ordre :", error);
            throw error;
        }
    };

    return (
        <div className="App">
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons createOrder={createOrder} />
            </PayPalScriptProvider>
        </div>
  );
};

// const createOrder: PayPalButtonsComponentProps["createOrder"] = async () => {
//     try {
//         const response = await fetch("http://localhost:8081/api/create-checkout-session/1", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(payment)
//         });

//         const orderData: OrderData = await response.json();

//         if (!orderData.id) {
//             const errorDetail = orderData && orderData.details && orderData.details[0];
//             const errorMessage = errorDetail
//                 ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
//                 : "Unexpected error occurred, please try again.";

//             throw new Error(errorMessage);
//         }

//         return orderData.id;

//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };

// export default function App() {
//     return (
//         <div className="App">
//             <PayPalScriptProvider options={initialOptions}>
//                 <PayPalButtons createOrder={createOrder} />
//             </PayPalScriptProvider>
//         </div>
//     );
// }  












