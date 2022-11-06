import React, { useContext, Fragment } from "react";
import { useParams } from "react-router";
import "./product-page.styles.scss";

import ProductPageDetailsAndOptions from "../../components/product-details-and-options/product-details-and-options.component";
import ProductImage from "../../components/product-image/product-image.component";
import ProductMaterialsSection from "../../components/product-materials-section/product-materials-section.component";
import OtherPiecesYouWillLove from "../../components/other-pieces-you-will-love/other-pieces-you-will-love.component";
import { CategoriesContext } from "../../contexts/categories.context";
import SHOP_DATA from "../../assets/launching-shop-data";
import ReactDelayRender from "react-delay-render";
let product;

const ProductPage = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { id } = useParams();
  console.log("Id is  " + id);

  console.log(categoriesMap);
  const searchProducts = (id) => {
    let data = SHOP_DATA;
    console.log(data);
    data.map((category) => {
      category.products.map((productData) => {
        if (productData.id === id) {
          product = productData;
        }
      });
    });
  };

  searchProducts(parseInt(id));
  console.log(product);
  return (
    <div className="product-page-container">
      <div className="product-image-and-buy-option-container">
        <div className="product-page-left-side">
          <ProductImage item={product} key={product.id} />
        </div>
        <div className="product-page-right-side">
          <ProductPageDetailsAndOptions item={product} />
        </div>
      </div>
      <ProductMaterialsSection />
      <OtherPiecesYouWillLove />
    </div>
  );
};

export default ProductPage;
