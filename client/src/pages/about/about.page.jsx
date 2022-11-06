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
            When I look at a diamond -- even after doing this for almost 20
            years -- I get excited, like it's my first time seeing them when I
            was six years old at my grandfather's office."
          </h2>
        </div>
      </div>
      <div className="about-sections">
        <div className="about-section">
          <hr />
          <h3>OUR VISION</h3>
          <hr />
          <p>
            After a decade of dealing with the art of diamonds, Jade harnessed
            her years of experience to break the rules of the fine jewelry
            industry and to create a new sense of individuality that pushes the
            boundaries of design into something more authentic and personal.
            Jade’s artistry is forging the path for a new style of jewelry- one
            that juxtaposes vintage silhouettes with a modern sensibility to
            present a new kind of classic.
          </p>
        </div>
        <div className="about-section">
          <hr />
          <h3>OUR BRAND DNA</h3>
          <hr />
          <p>
            Storytelling, along with the personalized nature of jewelry, are at
            the forefront of the Jade Trau brand. The most beautiful piece of
            jewelry is a piece that is worn; creating luxury pieces that wear
            beautifully and comfortably is our philosophy. Just as Jade’s
            approach to design evolves organically around the diamond to enhance
            its inherent beauty, each piece of Jade Trau jewelry is made to
            transform and bring out the personality of its wearer.
          </p>
        </div>
        <div className="about-section">
          <hr />
          <h3>OUR HISTORY</h3>
          <hr />
          <p>
            Every Jade Trau piece is a reimagined, timeless design and crafted
            in the heart of New York City. Emphasizing the science behind the
            artistry, Jade Trau honors the intricacies of the materials by
            focusing on designs that ensure the personality and story of each
            stone is fully realized. Every collection is handmade in 18-karat
            gold, platinum, and ethically-sourced, natural diamonds- ensuring
            that your Jade Trau piece will shine on for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
