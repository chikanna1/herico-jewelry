import React from "react";
import "./about.styles.scss";
import lagos_city from "./assets/lagos-city.jpg";

const AboutPage = () => {
  return (
    <div className="about-us-page-container">
      <div className="about-us-header">
        <h1>Luxury African Jewelry</h1>
        <h1>Motherland Inspired</h1>
        <div className="about-us-header-section">
          <div
            className="about-us-header-image"
            style={{ backgroundImage: `url(${lagos_city})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
