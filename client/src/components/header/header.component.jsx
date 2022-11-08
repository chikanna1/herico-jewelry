import React from "react";
import "./header.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainLogo from "./assets/logo.png";
import SearchBox from "../search/search.component";
import { Link } from "react-router-dom";
import { auth, signOutUser } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { Fragment, useContext } from "react";
// import { isCartOpen } from "../../store/cart";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Header = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
      <div className="header-container">
        <div className="header-menu left">
          <Link className="header-link" to="/#/shop/products/all">
            SHOP
          </Link>

          <Link className="header-link" to="/#/seasons-deals">
            HOLIDAY GIFT SHOP
          </Link>
          {/*<Link className="header-link" to="article-of-month">
            HERICO X AFRICA
          </Link>
  */}
        </div>

        <div className="logo">
          <Link className="header-link" to="/">
            <img className="mainLogo" src={mainLogo} alt="HERICO" />
          </Link>
        </div>

        <div className="right-menu">
          <div className="header-menu right">
            <Link className="header-link" to="/#/about">
              ABOUT
            </Link>

            {/*currentUser ? (
              <span className="header-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className="header-link" to="sign-in">
                SIGN IN
              </Link>
            )*/}

            <Link className="header-link" to="/#/brand-ambassador-program">
              AMBASSADOR PROGRAM
            </Link>
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
