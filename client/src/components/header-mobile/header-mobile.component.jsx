import React, { useState } from "react";
import "./header-mobile.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainLogo from "./assets/logo.png";
import SearchBox from "../search/search.component";
import { Link } from "react-router-dom";
import { auth, signOutUser } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdownMobile from "../cart-dropdown-mobile/cart-dropdown-mobile.component";
import { SearchContext } from "../../contexts/search.context";

import { slide as Menu } from "react-burger-menu";
import { Dock } from "react-dock";
import Hamburger from "hamburger-react";

import { Fragment, useContext } from "react";
import SearchBoxMobile from "../search-mobile/search-mobile.component";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const HeaderMobile = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);

  const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext);

  const [isOpen, setOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenuOpen = () => {
    setOpen(!isOpen);
    console.log("Menu is " + isOpen);
  };

  const toggleMenuClosed = () => {
    setMenuOpen(false);
    console.log("Menu is " + isOpen);
  };

  const toggleSearchOpen = () => setIsSearchOpen(true);
  const toggleSearchClosed = () => setIsSearchOpen(false);

  return (
    <Fragment>
      <div className="header-container-mobile">
        <div className="hamburger-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <div className="header-menu-dock">
            <Dock position="left" size={0.7} isVisible={isOpen}>
              <div className="header-mobile-dock">
                <div className="close-section">
                  <FontAwesomeIcon
                    className="close-button"
                    icon={["fas", "xmark"]}
                    size="2x"
                    onClick={toggleMenuOpen}
                  />
                  <hr className="divider" />
                </div>
                <div className="links-section">
                  <Link
                    className="header-link"
                    to="shop/products"
                    onClick={toggleMenuOpen}
                  >
                    SHOP
                  </Link>
                  <Link
                    className="header-link"
                    to="seasons-deals"
                    onClick={toggleMenuOpen}
                  >
                    HOLIDAY GIFT SHOP
                  </Link>
                  <Link
                    className="header-link"
                    to="about"
                    onClick={toggleMenuOpen}
                  >
                    ABOUT
                  </Link>

                  <Link
                    className="header-link"
                    to="article-of-month"
                    onClick={toggleMenuOpen}
                  >
                    REFER A FRIEND
                  </Link>
                </div>
              </div>
            </Dock>
          </div>
        </div>
        <div className="logo-mobile">
          <Link className="header-link" to="/">
            <img className="mainLogo" src={mainLogo} alt="HERICO" />
          </Link>
        </div>
        <div className="cart-button">
          <CartIcon />
        </div>
        <div className="search-button">
          <FontAwesomeIcon
            className="search-icon"
            icon={["fas", "magnifying-glass"]}
            size="2x"
            onClick={toggleSearchOpen}
          />
          <div className="search-bar-dock">
            <Dock position="top" size={0.7} isVisible={isSearchOpen}>
              <div className="search-mobile-dock">
                <div className="close-section">
                  <FontAwesomeIcon
                    className="close-button"
                    icon={["fas", "xmark"]}
                    size="2x"
                    onClick={toggleSearchClosed}
                  />
                  <hr className="divider" />
                </div>
                <SearchBoxMobile />
              </div>
            </Dock>
            <div />
          </div>
          {<CartDropdownMobile />}
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderMobile;
