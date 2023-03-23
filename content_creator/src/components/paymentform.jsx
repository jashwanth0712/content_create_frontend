import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
const cardElementOptions = {
    style: {
      base: {
        color: "#fff",
        backgroundColor: "#000",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "24px",
        "::placeholder": {
          color: "#ccc",
        },
      },
      invalid: {
        color: "#f44336",
      },
    },
  };
  
const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      // Call your backend API to complete the payment process
      // You will need to pass the paymentMethod.id to your backend
      console.log(paymentMethod);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={cardElementOptions} />
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default PaymentForm;
