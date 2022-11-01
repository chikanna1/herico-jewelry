import React, { useContext, Fragment } from "react";
import { useParams } from "react-router";
import "./product-page-mobile.styles.scss";

import ProductPageDetailsAndOptionsMobile from "../../components/product-details-and-options-mobile/product-details-and-options-mobile.component";
import ProductImageMobile from "../../components/product-image-mobile/product-image-mobile.component";
import ProductMaterialsSectionMobile from "../../components/product-materials-section-mobile/product-materials-section-mobile.component";
import { CategoriesContext } from "../../contexts/categories.context";
import SHOP_DATA from "../../assets/launching-shop-data";
import OtherPiecesYouWillLoveMobile from "../../components/other-pieces-you-will-love-mobile/other-pieces-you-will-love-mobile.component";

let product;

const ProductPageMobile = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { id } = useParams();
  console.log("Id is  " + id);

  const searchProducts = (id) => {
    let data = SHOP_DATA;
    data.map((category) => {
      category.products.map((productData) => {
        if (productData.id === id) {
          console.log(product);
          product = productData;
        }
      });
    });
  };

  searchProducts(parseInt(id));
  return (
    <div className="product-page-container-mobile">
      <div className="product-image-and-buy-option-container-mobile">
        <ProductImageMobile item={product} />
        <ProductPageDetailsAndOptionsMobile item={product} />
      </div>
      <ProductMaterialsSectionMobile />
      <OtherPiecesYouWillLoveMobile />
    </div>
  );
};

export default ProductPageMobile;
