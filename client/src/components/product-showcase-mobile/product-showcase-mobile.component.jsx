import React from "react";
import "./product-showcase-mobile.styles.scss";

import ProductPreview from "../product-preview/product-preview.component";
import SHOP_DATA from "../../assets/launching-shop-data";

const item1 = SHOP_DATA[0].products[0];
const item2 = SHOP_DATA[0].products[1];
const item3 = SHOP_DATA[0].products[2];

const ProductShowcaseMobile = () => (
  <div className="product-showcase-container-mobile">
    <div className="product-showcase-header-mobile">
      <h2>Menala Collection</h2>
      <h3>SHOP MORE OF THIS COLLECTION</h3>
    </div>
    <div className="product-showcase-mobile">
      <ProductPreview size={"mobile"} displayPrice={false} item={item1} />
      <ProductPreview size={"mobile"} displayPrice={false} item={item2} />
      <ProductPreview size={"mobile"} displayPrice={false} item={item3} />
    </div>
  </div>
);

export default ProductShowcaseMobile;
