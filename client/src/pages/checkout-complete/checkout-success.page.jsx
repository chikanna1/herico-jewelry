import React, { useEffect } from "react";
import "./checkout-success.styles.scss";
import Button from "../../components/button/button.component";
import { Link } from "react-router-dom";
import { clearAllItemsFromCart } from "../../store/cart/cart.actions";
import { useDispatch } from "react-redux/es/exports";
import { setIsCartOpen } from "../../store/cart/cart.actions";
import { useSelector } from "react-redux/es/exports";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

const CheckoutCompletePage = () => {
  const dispatch = useDispatch();

  dispatch(setIsCartOpen(false));
  dispatch(clearAllItemsFromCart());

  return (
    <div className="checkout-complete-page-container">
      <div className="thank-you-text">
        <h1>Thank You for your purchase!</h1>
        <p>
          We'll email you an order confirmation with details and tracking
          information.
        </p>
        <Link to="/shop/products/all">
          <Button>CONTINUE SHOPPING</Button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutCompletePage;
