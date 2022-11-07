import React from "react";
import "./hero-mobile.styles.scss";
import heroImage from "./assets/african-women-jewelry.jpg";
import leftsideImage from "./assets/igboman.jpg";
// import rightsideImage from "./assets/igbowoman.jpg";
import rightsideImage from "./assets/herico-model.jpg";
import Button from "../../components/button/button.component";
import { Link } from "react-router-dom";

const HeroMobile = () => (
  <div className="hero-container-mobile">
    <div className="hero-text-mobile">
      <h2 className="hero-title-text">New In: Lux Traditional Necklace</h2>
      <p className="hero-subtitle-text">
        Have you seen one of these before at an event? Probably Not. It's new,
        It's one of a kind, and it's calling your name
      </p>
    </div>
    <div
      className="image-side-mobile"
      style={{ backgroundImage: `url(${rightsideImage})` }}
    >
      <div className="shop-button-section">
        <div className="shop-title-text">
          <p className="shop-subtitle">LUXURY AFRICAN JEWELRY</p>
        </div>
        <Link to="/shop/products/all">
          <Button>Shop Now</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default HeroMobile;
