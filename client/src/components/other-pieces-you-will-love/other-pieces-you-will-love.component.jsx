import React, { useState, useEffect, Fragment } from "react";
import "./other-pieces-you-will-love.styles.scss";
import { Link } from "react-router-dom";

import ProductPreview from "../product-preview/product-preview.component";
import SHOP_DATA from "../../assets/launching-shop-data";
import { useDispatch } from "react-redux";

import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from "../../firebase/firebase.utils";

import { setCategories } from "../../store/categories/categories.actions";

const sampleProducts = SHOP_DATA[0].products.slice(0, 4);

const Products = (props) => {
  const productData = props.productData;
  const filterQuery = props.filterQuery;

  let products = productData["herico african jewelry sets"];

  let displayedProducts = products.slice(0, 3);

  return (
    <Fragment>
      <div className="product-preview-section">
        {displayedProducts.map((product) => (
          <div className="product-preview-item" key={product.id}>
            <Link to={`/product-details/${product.id}`}>
              <ProductPreview key={product.id} item={product} size="large" />
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

const OtherPiecesYouWillLove = () => {
  const [productData, setProductData] = useState();
  const dispatch = useDispatch();

  const categoriesMap = useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categories));
      setProductData(categories);
    };

    getCategoriesMap();
  }, []);

  return (
    <div className="other-pieces-you-will-love-container">
      <h1>Other Pieces You'll Love</h1>
      <div className="product-preview-section">
        {productData && <Products productData={productData} />}
      </div>
    </div>
  );
};

export default OtherPiecesYouWillLove;
