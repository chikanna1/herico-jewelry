import React from "react";
import "./checkout-mobile.styles.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripePayment from "../../components/stripe-payment/stripe-payment";
import SplitForm from "../../components/stripe-payment/stripe-payment";
import axios from "axios";

import {
  selectCartItems,
  selectCartTotal,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { loadStripe } from "@stripe/stripe-js";
import Button from "../../components/button/button.component";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const CheckoutPageMobile = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);

  const redirectToCheckout = async () => {
    if (cartItems.length < 1) {
      alert("You have no items in your cart...");
    }
    const body = { cartItems };
    const stripe = await getStripe();
    axios.post(`/create-checkout-session`, body).then((response) => {
      stripe.redirectToCheckout({ sessionId: response.data.id });
    });
  };

  return (
    <div className="checkout-container-mobile">
      <div className="checkout-header-mobile">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="shipping">
        <h2>SHIPPING: DETERMINED ON NEXT STEP</h2>
      </div>
      <div className="total">
        <h2>TOTAL: ${cartTotal}</h2>
      </div>
      <Button onClick={redirectToCheckout}>CHECKOUT</Button>
    </div>
  );
};

export default CheckoutPageMobile;
