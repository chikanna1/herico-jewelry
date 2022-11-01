import React from "react";
import "./other-pieces-you-will-love-mobile.styles.scss";
import { Link } from "react-router-dom";

import ProductPreview from "../product-preview/product-preview.component";
import SHOP_DATA from "../../assets/launching-shop-data";
import Slider from "react-slick";

const sampleProducts = SHOP_DATA[0].products.slice(0, 4);

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const OtherPiecesYouWillLoveMobile = () => (
  <div className="other-pieces-you-will-love-container-mobile">
    <h1>Other Pieces You'll Love</h1>
    <div className="product-preview-section">
      <Slider {...settings}>
        {sampleProducts.map((product) => (
          <Link to={`/product-details/${product.id}`}>
            <div className="product-preview-item">
              <ProductPreview item={product} size="small" />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  </div>
);

export default OtherPiecesYouWillLoveMobile;
