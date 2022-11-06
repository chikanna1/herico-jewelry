import React, { useState, useContext } from "react";
import "./search-mobile.styles.scss";
import SearchItemMobile from "../search-result-mobile/search-result-mobile.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../form-input/form-input.component";
import { CategoriesContext } from "../../contexts/categories.context";
import SHOP_DATA from "../../assets/shop_data";
import { SearchContext } from "../../contexts/search.context";

const SearchBoxMobile = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { searchProducts } = useContext(SearchContext);
  const { searchResultItems } = useContext(SearchContext);

  const handleChange = (event) => {
    let searchTextValue = event.target.value;
    searchProducts(searchTextValue);
    setSearchQuery(searchTextValue);
  };

  const handleSubmit = () => {
    console.log("Search Text is " + searchText);
    setSearchQuery("");
  };

  return (
    <div className="search-container">
      <div className="search-input">
        <form className="search-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="search"
            value={searchQuery}
            onChange={(event) => handleChange(event)}
            placeholder="Search Our Products"
            required
          />
          <FontAwesomeIcon
            className="submit"
            icon={["fas", "magnifying-glass"]}
            size="2x"
            type="submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
      <div className="search-results">
        {searchResultItems
          ? searchResultItems.map((result) => {
              return <SearchItemMobile searchItem={result} />;
            })
          : ""}
      </div>
    </div>
  );
};

export default SearchBoxMobile;
