import React, { useState, useEffect, Fragment } from "react";
import "./product-showcase.styles.scss";
import { Link } from "react-router-dom";

import ProductPreview from "../product-preview/product-preview.component";
import SHOP_DATA from "../../assets/launching-shop-data";
import { useDispatch } from "react-redux";

import { setCategories } from "../../store/categories/categories.actions";

import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from "../../firebase/firebase.utils";

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
              <ProductPreview
                key={product.id}
                item={product}
                displayPrice={false}
              />
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

const ProductShowcase = () => {
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
    <div className="product-showcase-container">
      <div className="product-showcase-header">
        <Link to={`/shop/products/all`}>
          <h2>Menala Collection</h2>
        </Link>
        <Link to={`/shop/products/all`}>
          <h3>SHOP MORE OF THIS COLLECTION</h3>
        </Link>
      </div>
      <div className="product-showcase">
        {productData && <Products productData={productData} />}
      </div>
    </div>
  );
};

export default ProductShowcase;
