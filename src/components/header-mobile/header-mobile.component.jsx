import React, { useState } from "react";
import "./header-mobile.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainLogo from "./assets/logo.png";
import SearchBox from "../search/search.component";
import { Link } from "react-router-dom";
import { auth, signOutUser } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdownMobile from "../cart-dropdown-mobile/cart-dropdown-mobile.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { slide as Menu } from "react-burger-menu";
import { Dock } from "react-dock";
import Hamburger from "hamburger-react";

import { Fragment, useContext } from "react";

const HeaderMobile = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const [isOpen, setOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const toggleMenuOpen = () => {
    setOpen(!isOpen);
    console.log("Menu is " + isOpen);
  };

  const toggleMenuClosed = () => {
    setMenuOpen(false);
    console.log("Menu is " + isOpen);
  };

  return (
    <Fragment>
      <div className="header-container-mobile">
        <div className="hamburger-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <div className="header-menu-dock">
            <Dock
              className="header-mobile-dock"
              position="left"
              size={0.89}
              isVisible={isOpen}
            >
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
                <Link className="header-link" to="shop">
                  SHOP
                </Link>
                <Link className="header-link" to="seasons-deals">
                  HOLIDAY GIFT SHOP
                </Link>
                <Link className="header-link" to="about">
                  ABOUT
                </Link>

                <Link className="header-link" to="article-of-month">
                  REFER A FRIEND
                </Link>
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
          <SearchBox />
        </div>
        {<CartDropdownMobile />}
      </div>
    </Fragment>
  );
};

export default HeaderMobile;
