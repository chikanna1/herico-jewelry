import "./checkout-item.styles.scss";
import React from "react";
import "./checkout-item.styles.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemToCart,
} from "../../store/cart/cart.actions";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const CheckoutItem = ({ cartItem }) => {
  const { productName, productImage1, productPrice, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem, 1));
  const removeItemHandler = () =>
    dispatch(removeItemToCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={productImage1} alt={`${productName}`} />
      </div>
      <span className="name"> {productName} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> ${productPrice}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
