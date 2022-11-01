import "./search-result-mobile.styles.scss";
import { Link } from "react-router-dom";
import { SearchContext } from "../../contexts/search.context";
import { Fragment, useContext } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchItemMobile = ({ searchItem }) => {
  const { productName, productImage1, productPrice } = searchItem;

  const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext);
  const { search, setSearchQuery } = useContext(SearchContext);
  const { searchResultItems, setSearchResultItems } = useContext(SearchContext);
  const { clearSearchResults } = useContext(SearchContext);

  let navigate = useNavigate();
  const goToProductPage = () => {
    let id = searchItem.id;
    setSearchQuery("");
    clearSearchResults();
    setIsSearchOpen(false);
    navigate(`/product-details/${id}`);
  };
  return (
    <div className="search-item-container-mobile" onClick={goToProductPage}>
      <div className="search-item-details-mobile">
        <img src={productImage1} alt={`${productName}`} />
        <p className="name">{productName}</p>
      </div>
      <p className="price">${productPrice}</p>
    </div>
  );
};

export default SearchItemMobile;
