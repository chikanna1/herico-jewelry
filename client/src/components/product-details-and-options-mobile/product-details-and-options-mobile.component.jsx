import React, { useState } from "react";
import "./product-details-and-options-mobile.styles.scss";
import Button from "../button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Collapsible from "react-collapsible";
import { addItemToCart, setIsCartOpen } from "../../store/cart/cart.actions";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductDetailsAndOptionsMobile = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const [quantity, setQuantity] = useState(0);

  function addQuantity() {
    setQuantity((prevState) => prevState + 1);
  }
  function removeQuantity() {
    if (quantity === 0) {
      return;
    }
    setQuantity((prevState) => prevState - 1);
  }

  const addProductToCart = (quantity = 1) => {
    if (quantity === 0) {
      return;
    }
    console.log(quantity);
    dispatch(addItemToCart(cartItems, item, quantity));
    setQuantity(0);
    dispatch(setIsCartOpen(true));
    setTimeout(() => dispatch(setIsCartOpen(false)), 2000);
  };
  return (
    <div className="product-page-details-and-options-container-mobile">
      <div className="product-details">
        <h1 className="product-name">{item.productName}</h1>
      </div>
      <div className="product-options">
        <div className="product-color-options">
          <h3 className="product-color-title">Color:</h3>
          <h3 className="product-color">{item.metals}</h3>
        </div>
        <div className="quantity-and-add-to-cart-container">
          <div className="add-to-cart-or-wishlist-buttons">
            <Button onClick={addProductToCart}>
              Add To Cart - ${item.productPrice}
            </Button>
            <FontAwesomeIcon
              className="wishlist-button"
              icon={["fas", "heart"]}
              size="2x"
            />
          </div>
        </div>
      </div>
      <div className="accordion">
        <Collapsible trigger="DESCRIPTION  +">
          <br />
          <br />
          <p>{item.description}</p>
          <br />
          <br />
        </Collapsible>
        <br />
        <Collapsible trigger="DETAILS  +">
          <div>
            <br />
            <ul>
              {item.details.map((detail) => (
                <div>
                  <li>
                    <span>
                      <FontAwesomeIcon
                        className="detail-icon"
                        icon={["fas", "circle"]}
                        size="1x"
                      />
                    </span>
                    {detail}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </Collapsible>
        <br />
        <Collapsible trigger="SHIPPING & RETURNS  +">
          <div>
            <br />
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="detail-icon"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                Many of our styles are custom made and may take up to 14 days
                for production.
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="detail-icon"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                Select styles are available in stock and ready to ship out
                within 1 to 3 business days. Contact us to inquire about our in
                stock collection.{" "}
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="detail-icon"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                Purchases are delivered in a branded black box tied with a
                ribbon and a certificate of authenticity.{" "}
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="detail-icon"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                We offer complimentary shipping to domestic orders over $5000.
                All other domestic orders are subject to a $40 shipping flat
                rate fee.{" "}
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="detail-icon"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                All orders are insured and shipped out with a trusted carrier
                within our network. An adult signature is required for all
                deliveries.
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="detail-icon"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                International orders may be subject to import taxes, custom
                duties and/or fees imposed by the destination country, collected
                when the shipment arrives.
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="detail-icon"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                Visit our shipping and delivery page here for more details on
                shipping, international taxes & duties, and delivery time.
              </li>
            </ul>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};
export default ProductDetailsAndOptionsMobile;
