import React, { useContext, Fragment, useState } from "react";
import "./shop-mobile.styles.scss";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import shop_hero from "./assets/shop-hero.jpg";
import ProductPreview from "../../components/product-preview/product-preview.component";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import Menu, { SubMenu, Item as MenuItem } from "rc-menu";
import "rc-menu/assets/index.css";
import SHOP_DATA from "../../assets/launching-shop-data";
import Collapsible from "react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShopPageMobile = () => {
  // const { categoriesMap } = useContext(CategoriesContext);

  const [category, setCategory] = useState("All");
  const { shoppagefilter } = useParams();

  const [filterOneOpen, setFilterOneOpen] = useState(false);
  const [filterTwoOpen, setFilterTwoOpen] = useState(false);

  const [products, setProducts] = useState([]);

  const toggleFilterOneOpen = () => {
    setFilterOneOpen(!filterOneOpen);
  };

  const toggleFilterTwoOpen = () => {
    setFilterTwoOpen(!filterTwoOpen);
  };

  const toggleFiltersClosed = () => {
    setFilterOneOpen(false);
    setFilterTwoOpen(false);
  };

  // const getAllProducts = () => {
  //   let products = [];

  //   Object.keys(categoriesMap).map((category) => {
  //     categoriesMap[category].map((product) => {
  //       products.push(product);
  //     });
  //   });

  //   return products;
  // };

  const getAllProducts = () => {
    let products = [];

    let data = SHOP_DATA;

    data.map((category) => {
      let currentCategory = category.category;
      category.products.map((productData) => {
        let product = {
          category: currentCategory,
          ...productData,
        };
        products.push(product);
      });
    });
    return products;
  };

  let [displayedProducts, setDisplayedProducts] = useState(getAllProducts());
  const [productList] = useState(getAllProducts());

  const filterFunction = (params) => {
    let allProducts = productList;
    let sortedProducts = [];

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
    } else if (params === "FashionSets") {
      sortedProducts = allProducts.filter((product) => {
        return (product.category = "Fashion Sets");
      });
    }
    setDisplayedProducts(sortedProducts);
    toggleFiltersClosed();
  };

  return (
    <Fragment>
      <div className="shop-page-mobile">
        <div className="shop-page-filters-mobile">
          <div className="filters-title-text">
            <h4 className="filters-title">Collections</h4>
            <h1 className="filters-subtitle">Shop {category}</h1>
          </div>
          <div className="filters">
            <div className="filter-one">
              <Collapsible
                open={filterOneOpen}
                handleTriggerClick={toggleFilterOneOpen}
                trigger={"FILTER"}
              >
                <Collapsible trigger={<p>SORT BY</p>}>
                  <div
                    className="filter-category"
                    onClick={() => filterFunction("NewArrivals")}
                  >
                    <p>NEW ARRIVALS</p>
                  </div>
                  <div
                    className="filter-category"
                    onClick={() => filterFunction("LowToHigh")}
                  >
                    <p>LOW TO HIGH</p>
                  </div>
                  <div
                    className="filter-category"
                    onClick={() => filterFunction("HighToLow")}
                  >
                    <p>HIGH TO LOW</p>
                  </div>
                  <div
                    className="filter-category"
                    onClick={() => filterFunction("BestSellers")}
                  >
                    <p>BEST SELLERS</p>
                  </div>
                </Collapsible>
                <Collapsible trigger={<p>PRICES</p>}>
                  <div
                    className="filter-category"
                    onClick={() => filterFunction("Under250")}
                  >
                    <p>UNDER $250</p>
                  </div>
                  <div
                    className="filter-category"
                    onClick={() => filterFunction("250to500")}
                  >
                    <p>$250 - $500</p>
                  </div>
                  <div
                    className="filter-category"
                    onClick={() => filterFunction("Over500")}
                  >
                    <p>OVER $500</p>
                  </div>
                </Collapsible>
              </Collapsible>
            </div>
            <div className="filter-two">
              <Collapsible
                trigger={"CATEGORY"}
                open={filterTwoOpen}
                handleTriggerClick={toggleFilterTwoOpen}
              >
                <div
                  className="filter-category"
                  onClick={() => filterFunction("FashionSets")}
                >
                  <p>FASHION SETS</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => filterFunction("Necklaces")}
                >
                  <p>NECKLACES</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => filterFunction("Bracelets")}
                >
                  <p>BRACELETS</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => filterFunction("Earrings")}
                >
                  <p>EARRINGS</p>
                </div>
                <div
                  className="filter-category"
                  onClick={() => filterFunction("Rings")}
                >
                  <p>RINGS</p>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
        <div className="shop-section">
          <div className="product-preview-section">
            {displayedProducts.map((product) => (
              <div className="product-preview-item">
                <Link to={`/product-details/${product.id}`}>
                  <ProductPreview
                    key={product.id}
                    item={product}
                    size="mobile"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopPageMobile;
