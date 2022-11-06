import React from "react";
import "./homepage-mobile.styles.scss";
import HeroMobile from "../../components/hero-mobile/hero-mobile.component";
import ProductShowcaseMobile from "../../components/product-showcase-mobile/product-showcase-mobile.component";
import VideoShowcaseMobile from "../../components/video-showcase-mobile/video-showcase-mobile.component";
import JewelryShowcase from "../../components/jewelry-showcase/jewelry-showcase.component";
import Footer from "../../components/footer/footer.component";
import HomepageReviewsMobile from "../../components/homepage-reviews-mobile/homepage-reviews-mobile.component";
import WhyHericoMobile from "../../components/why-herico-mobile/why-herico-mobile.component";

const HomePageMobile = () => (
  <div className="homepage-container">
    <HeroMobile />
    <ProductShowcaseMobile />
    <VideoShowcaseMobile />
    <HomepageReviewsMobile />
    <WhyHericoMobile />
    <JewelryShowcase size="mobil" />
  </div>
);

export default HomePageMobile;
