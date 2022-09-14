import React, { useState } from "react";
import "./cart-dropdown-mobile.styles.scss";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { Dock } from "react-dock";
const CartDropdownMobile = () => {
  const navigate = useNavigate();
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(false);
  };

  const toggleMenuClosed = () => {
    setIsCartOpen(false);
  };

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-mobile">
      <Dock
        className="cart-dock"
        position="right"
        size={0.65}
        isVisible={isCartOpen}
      >
        <div className="close-section">
          <FontAwesomeIcon
            className="close-button"
            icon={["fas", "xmark"]}
            size="2x"
            onClick={toggleMenuClosed}
          />
          <hr className="divider" />
        </div>
        <div className="cart-section">
          <div className="cart-items">
            {cartItems.length ? (
              cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))
            ) : (
              <span>Your Cart is Empty</span>
            )}
          </div>
          <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </div>
      </Dock>
    </div>
  );
};

export default CartDropdownMobile;
