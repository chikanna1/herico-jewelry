import React from "react";
import "./why-herico-mobile.styles.scss";
import firstImage from "./assets/why-herico-first-image.jpg";
import secondImage from "./assets/why-herico-second-image.jpeg";
import thirdImage from "./assets/why-herico-third-image.webp";

// const rightsideImage =
//   "https://i.pinimg.com/564x/3d/a1/90/3da190775b376d0fb708321e43783509.jpg";

const leftsideImage =
  "https://i.pinimg.com/564x/db/fe/a1/dbfea149aa639439e9234f615b78cad1.jpg";

const jewelryFirstImage =
  "https://i.pinimg.com/564x/fb/df/6c/fbdf6c973876b290374b3920fe8a4861.jpg";

const WhyHericoMobile = () => (
  <div className="why-herico-container-mobile">
    <div className="right-side">
      <div className="image-text-box">
        <div
          className="jewelry-image first-image"
          style={{ backgroundImage: `url(${firstImage})` }}
        />
        <div className="jewelry-text">
          <h3>Ethically Produced</h3>
          <p>
            All of our gold is 100% recycled, sustainably handmade, casted,
            polished and perfected by seventh generation craftsmen.
          </p>
        </div>
      </div>
      <div className="image-text-box">
        <div
          className="jewelry-image second-image"
          style={{ backgroundImage: `url(${secondImage})` }}
        />
        <div className="jewelry-text">
          <h3>Highest Quality</h3>
          <p>
            Every single design goes through a rigorous 5-step testing process
            by our in-house team.
          </p>
        </div>
      </div>
      <div className="image-text-box">
        <div
          className="jewelry-image"
          style={{ backgroundImage: `url(${thirdImage})` }}
        />
        <div className="jewelry-text">
          <h3>One of a Kind</h3>
          <p>So you can shine your brightest and wear it worry-free.</p>
        </div>
      </div>
    </div>
  </div>
);

export default WhyHericoMobile;
