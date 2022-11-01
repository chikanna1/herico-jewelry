import React, { useState, useContext } from "react";
import "./search.styles.scss";
import searchglass from "./assets/searchpng.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../form-input/form-input.component";
import { CategoriesContext } from "../../contexts/categories.context";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { categoriesMap } = useContext(CategoriesContext);

  const getAllProducts = () => {
    let products = [];

    Object.keys(categoriesMap).map((category) => {
      categoriesMap[category].map((product) => {
        products.push(product);
      });
    });

    return products;
  };

  const products = getAllProducts();

  const search = (searchString) => {
    //we test if searchString is empty in that case we just return the original data

    //we make search string lower case
    let search = searchString.trim();
    if (search == "") {
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

  const handleChange = (event) => {
    let searchTextValue = event.target.value;
    setSearchText(searchTextValue);

    let results = search(searchTextValue);
    setSearchResults(results);
  };

  const handleSubmit = () => {
    console.log("Search Text is " + searchText);
    // setSearchText(event.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-input">
        <form className="search-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="search"
            value={searchText}
            onChange={(event) => handleChange(event)}
            placeholder="Search Our Products"
            required
          />
          <FontAwesomeIcon
            className="submit"
            icon={["fas", "magnifying-glass"]}
            size="1x"
            type="submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
      <div className="search-results">
        {searchResults
          ? searchResults.map((result) => {
              return <h1>{result.productName}</h1>;
            })
          : ""}
      </div>
    </div>
  );
};

export default SearchBox;
