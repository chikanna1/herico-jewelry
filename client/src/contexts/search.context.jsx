import { createContext, useState, useReducer } from "react";

import { createAction } from "../utils/reducer.utils";
import SHOP_DATA from "../assets/launching-shop-data";

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

const products = getAllProducts();

const getSearchResults = (searchQuery) => {
  //we test if searchString is empty in that case we just return the original data

  //we make search string lower case
  let search = searchQuery.trim();
  if (search == "" || search.length < 2) {
    return "";
  }
  let searchLower = search.toLowerCase();
  let filtered = products.filter((product) => {
    if (product.productName.toLowerCase().includes(searchLower)) {
      return true;
    }

    return false;
  });

  return filtered;
};

const goToProductPage = (cartItems, cartItemToClear) => {};

const SEARCH_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_SEARCH_OPEN",
  SET_SEARCH_ITEMS: "SET_SEARCH_ITEMS",
};

const INITIAL_STATE = {
  isSearchOpen: false,
  searchAbleItems: [],
  searchResults: [],
  searchQuery: "",
};

const searchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in searchReducer`);
  }
};

export const SearchContext = createContext({
  isSearchOpen: false,
  setIsSearchOpen: () => {},
  searchQuery: "",
  searchProducts: () => {},
  setSearchQuery: () => {},
  searchResultItems: [],
  setSearchResultItems: () => {},
  clearSearchResults: () => {},
});

export const SearchProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResultItems, setSearchResultItems] = useState([]);

  const [{ searchItems }, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  const searchProducts = (searchQueryFromInput) => {
    const results = getSearchResults(searchQueryFromInput);
    console.log("In Context");
    console.log(results);
    setSearchResultItems(results);
  };

  const clearSearchResults = (cartItemToRemove) => {
    setSearchResultItems([]);
  };

  const value = {
    isSearchOpen,
    searchQuery,
    setSearchQuery,
    setIsSearchOpen,
    searchResultItems,
    searchProducts,
    clearSearchResults,
    searchItems,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
