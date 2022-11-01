import React, { useState } from "react";
import "./cart-dropdown-mobile.styles.scss";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.actions";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { selectCartItems } from "../../store/cart/cart.selector";

import { Dock } from "react-dock";
const CartDropdownMobile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenuClosed = () => {
    dispatch(setIsCartOpen(false));
  };

  const goToCheckoutHandler = () => {
    toggleMenuClosed();
    navigate("/checkout");
  };
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown-mobile">
      <Dock
        className="cart-dock"
        position="right"
        size={0.65}
        isVisible={useSelector(selectIsCartOpen)}
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
