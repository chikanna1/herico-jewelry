import React, { useEffect, Fragment, useState } from "react";
import "./shop.styles.scss";

import ProductPreview from "../../components/product-preview/product-preview.component";
import { Link } from "react-router-dom";
import Menu, { SubMenu, Item as MenuItem } from "rc-menu";
// import "rc-menu/assets/index.css";
import SHOP_DATA from "../../assets/launching-shop-data";
import { useSelector } from "react-redux";

import Collapsible from "react-collapsible";

import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from "../../firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.actions";
import { useDispatch } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Products = (props) => {
  const productData = props.productData;
  const filterQuery = props.filterQuery;

  let products = productData["herico african jewelry sets"];

  const filterFunction = (filter) => {
    let allProducts = products;
    let sortedProducts = [];
    let params = filter;

    console.log(filter);

    if (params === "allproducts") {
      sortedProducts = allProducts;
    } else if (params === "HighToLow") {
      sortedProducts = allProducts.sort((a, b) => {
        return b.productPrice - a.productPrice;
      });
    } else if (params === "LowToHigh") {
      sortedProducts = allProducts.sort((a, b) => {
        return a.productPrice - b.productPrice;
      });
      console.log(sortedProducts);
    } else if (params === "Under250") {
      sortedProducts = allProducts.filter((product) => {
        return product.productPrice < 250;
      });
    } else if (params === "250to500") {
      sortedProducts = allProducts.filter((product) => {
        return product.productPrice > 250 && product.productPrice <= 500;
      });
    } else if (params === "Over500") {
      sortedProducts = allProducts.filter((product) => {
        return product.productPrice > 500;
      });
    } else if (params === "NewArrivals") {
      sortedProducts = allProducts.sort((a, b) => {
        return b.productPrice - a.productPrice;
      });
    } else if (params === "BestSellers") {
      sortedProducts = allProducts.sort((a, b) => {
        return b.productPrice - a.productPrice;
      });
    } else if (params === "Fashion Sets") {
      sortedProducts = allProducts.filter((product) => {
        return (product.category = "Fashion Sets");
      });
    }
    console.log(sortedProducts);
    return sortedProducts;
  };

  let displayedProducts = [];

  displayedProducts = filterFunction(filterQuery);

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

const ShopPage = () => {
  const [filterOneOpen, setFilterOneOpen] = useState(false);
  const [filterTwoOpen, setFilterTwoOpen] = useState(false);
  const [filterThreeOpen, setFilterThreeOpen] = useState(false);

  const [filterParam, setFilterParam] = useState("allproducts");

  const dispatch = useDispatch();

  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [productData, setProductData] = useState();

  const categoriesMap = useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categories));
      setProductData(categories);
    };

    getCategoriesMap();
  }, []);

  // setAllProducts(categoriesMap["herico african jewelry sets"]);

  const toggleFilterOneOpen = () => {
    setFilterOneOpen(!filterOneOpen);
  };

  const toggleFilterTwoOpen = () => {
    setFilterTwoOpen(!filterTwoOpen);
  };

  const toggleFilterThreeOpen = () => {
    setFilterThreeOpen(!filterThreeOpen);
  };

  const toggleFiltersClosed = () => {
    setFilterOneOpen(false);
    setFilterTwoOpen(false);
    setFilterThreeOpen(false);
  };

  const handleFilterClick = (filterParamQuery) => {
    toggleFiltersClosed();
    setFilterParam(filterParamQuery);
  };

  return (
    <Fragment>
      <div className="shop-page">
        <div className="shop-page-filters">
          <div className="filters-title-text">
            <h4 className="filters-title">Collections</h4>
            <h1 className="filters-subtitle">Shop</h1>
          </div>
          <div className="filters">
            <div className="filter-one">
              <Collapsible
                trigger={<p>SORT BY</p>}
                open={filterOneOpen}
                handleTriggerClick={toggleFilterOneOpen}
              >
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("NewArrivals")}
                >
                  <p>NEW ARRIVALS</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("LowToHigh")}
                >
                  <p>LOW TO HIGH</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("HighToLow")}
                >
                  <p>HIGH TO LOW</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("BestSellers")}
                >
                  <p>BEST SELLERS</p>
                </div>
              </Collapsible>
            </div>
            <div className="filter-two">
              <Collapsible
                trigger={<p>PRICES</p>}
                open={filterTwoOpen}
                handleTriggerClick={toggleFilterTwoOpen}
              >
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("Under250")}
                >
                  <p>UNDER $250</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("250to500")}
                >
                  <p>$250 - $500</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("Over500")}
                >
                  <p>OVER $500</p>
                </div>
              </Collapsible>
            </div>
            <div className="filter-three">
              <Collapsible
                trigger={<p>CATEGORY</p>}
                open={filterThreeOpen}
                handleTriggerClick={toggleFilterThreeOpen}
              >
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("Fashion Sets")}
                >
                  <p>FASHION SETS</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("Necklaces")}
                >
                  <p>NECKLACES</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("Bracelets")}
                >
                  <p>BRACELETS</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("Earrings")}
                >
                  <p>EARRINGS</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => handleFilterClick("Rings")}
                >
                  <p>RINGS</p>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
        <div className="shop-section">
          {productData && (
            <Products productData={productData} filterQuery={filterParam} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ShopPage;
