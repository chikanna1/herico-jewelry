import React from "react";
import "./homepage.styles.scss";
import Hero from "../../components/hero/hero.component";
import ProductShowcase from "../../components/product-showcase/product-showcase.component";
import VideoShowcase from "../../components/video-showcase/video-showcase.component";
import HomepageReviews from "../../components/homepage-reviews/homepage-reviews.component";
import WhyHerico from "../../components/why-herico/why-herico.component";
import JewelryShowcase from "../../components/jewelry-showcase/jewelry-showcase.component";
import Footer from "../../components/footer/footer.component";
import SignUpPopup from "../../components/sign-up-popup/sign-up-popup.component";
import { selectPopupAlreadyOpened } from "../../store/popup/popup.selector";
import { useSelector } from "react-redux";

const HomePage = () => {
  const popupAlreadyOpened = useSelector(selectPopupAlreadyOpened);
  console.log(popupAlreadyOpened);

  return (
    <div className="homepage-container">
      {/*<SignUpPopup />*/}
      <Hero />
      <ProductShowcase />
      <VideoShowcase />
      <HomepageReviews />
      <WhyHerico />
      <JewelryShowcase />
    </div>
  );
};

export default HomePage;
