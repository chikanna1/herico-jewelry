import React from "react";
import "./about.styles.scss";
import lagos_city from "./assets/lagos-city.jpg";
import nigerianWoman from "./assets/nigerianWoman.jpg";
import coupleHoldingHands from "./assets/couple-hold-hands.jpg";
import herico_rep from "./assets/herico-rep.jpg";

const AboutPage = () => {
  return (
    <div className="about-us-page-container">
      <div className="about-us-header">
        <h1>Our Brand</h1>

        <div className="about-us-top-section">
          <div
            className="about-us-top-section-image"
            style={{ backgroundImage: `url(${herico_rep})` }}
          />
          <h2>
            "When I go to a Culture Event -- even after for so long, I am
            excited to see the creativity in dress. With our Jewelry, and
            without, the beauty in Culture gets me very excited."
          </h2>
        </div>
      </div>
      <div className="about-sections">
        <div className="about-section">
          <hr />
          <h3>OUR VISION</h3>
          <hr />
          <p>
            After half a decade of being in the world of Jewelry, Herico Jewelry
            was able to break the rules of the fine jewelry industry by creating
            something geared much more heavily towards African, Caribbean and
            even Asian Cultures. Our Team's primary goal in the beginning has
            been to bring a different element of swag to African Dress with our
            jewelry. After years in the business, we are breaking culture
            boundaries and creating a new element of fashion amongst African
            Dress.
          </p>
        </div>
        <div className="about-section">
          <hr />
          <h3>OUR BRAND DNA</h3>
          <hr />
          <p>
            Our Team's primary goal in the beginning has been to bring a
            different element of swag to African Dress with our jewelry. After
            years in the business, we are breaking culture boundaries and
            creating a new element of fashion amongst African Dress. Herico
            Jewelry is African Created and African Operated. Our drive and
            inspiration comes from our desire to witness the cross between
            luxury and culture styles.
          </p>
        </div>
        <div className="about-section">
          <hr />
          <h3>OUR HISTORY</h3>
          <hr />
          <p>
            Every Herico Jewelry Piece is carefully chosen, designed and ensured
            for quality and timelessness. Our pieces are designed to last, while
            looking amazing on you. Every piece is created in 18-karat gold and
            our pieces are designed to stand the test of time. We as a team has
            been in the jewelry world for a little less than a decade, and by
            that notion, we are experts on what we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
