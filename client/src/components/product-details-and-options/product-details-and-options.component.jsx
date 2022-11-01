import React, { useState } from "react";
import "./product-details-and-options.styles.scss";
import Button from "../button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccordionApp from "../accordion/accordion.component";
import accordion from "../collapse/collapse.component";
import Collapsible from "react-collapsible";
import { useDispatch } from "react-redux/es/exports";
import { setIsCartOpen } from "../../store/cart/cart.actions";
import { useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cart.selector";

import { addItemToCart } from "../../store/cart/cart.actions";

const ProductDetailsAndOptions = ({ item }) => {
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

  const addProductToCart = () => {
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
    <div className="product-page-details-and-options-container">
      <div className="product-details">
        <h3 className="product-category-title">{item.category}</h3>
        <h1 className="product-name">{item.productName}</h1>
        <h1 className="product-price">${item.productPrice}</h1>
      </div>
      <div className="product-options">
        <div className="product-color-options">
          <h3 className="product-color-title">Color:</h3>
          <h3 className="product-color">{item.metals}</h3>
        </div>
        <div className="quantity-and-add-to-cart-container">
          <div className="quantity-picker">
            <FontAwesomeIcon
              className="quantity-picker-sign"
              icon={["fas", "minus"]}
              size="1x"
              onClick={() => removeQuantity()}
            />
            <div className="quantity">{quantity}</div>
            <FontAwesomeIcon
              className="quantity-picker-sign"
              icon={["fas", "plus"]}
              size="1x"
              onClick={() => addQuantity()}
            />
          </div>
          <div className="add-to-cart-or-wishlist-buttons">
            <Button onClick={addProductToCart}>Add To Cart</Button>
            {/*<FontAwesomeIcon
              className="wishlist-button"
              icon={["fas", "heart"]}
              size="2x"
            />
  */}
          </div>
        </div>
      </div>
      <div className="accordion">
        <Collapsible trigger="Description">
          <br />
          <br />
          <p>{item.description}</p>
          <br />
          <br />
        </Collapsible>
        <br />
        <br />
        <Collapsible trigger="Details">
          <div>
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
        <br />
        <Collapsible trigger="Shipping & Returns">
          <div>
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
export default ProductDetailsAndOptions;
