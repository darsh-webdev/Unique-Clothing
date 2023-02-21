import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/cart/cart.reducer";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./payment-form.styles";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        dispatch(clearCart(cartItems));
        elements.getElement(CardElement).clear();
        alert("Payment Successfull");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <h2>Card Payment: </h2>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          disabled={!amount && "true"}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
