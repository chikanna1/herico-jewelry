import React from "react";
import "./checkout-success.styles.scss";
import Button from "../../components/button/button.component";
import { Link } from "react-router-dom";

const CheckoutCompletePage = () => {
  return (
    <div className="checkout-complete-page-container">
      <div className="thank-you-text">
        <h1>Thank You for your purcahse</h1>
        <p>
          We'll email you an order confirmation with details and tracking
          information.
        </p>
        <Link to="/shop/all-products">
          <Button>CONTINUE SHOPPING</Button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutCompletePage;
