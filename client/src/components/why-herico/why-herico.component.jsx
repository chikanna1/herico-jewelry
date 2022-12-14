import React from "react";
import "./why-herico.styles.scss";
import { Controller, Scene } from "react-scrollmagic";
import leftsideImage from "./assets/herico-model.jpg";
import firstImage from "./assets/why-herico-first-image.jpg";
import secondImage from "./assets/why-herico-second-image.jpeg";
import thirdImage from "./assets/why-herico-third-image.webp";
// const rightsideImage =
//   "https://i.pinimg.com/564x/3d/a1/90/3da190775b376d0fb708321e43783509.jpg";

const jewelryFirstImage =
  "https://i.pinimg.com/564x/fb/df/6c/fbdf6c973876b290374b3920fe8a4861.jpg";

const WhyHerico = () => (
  <div className="why-herico-container">
    <Controller>
      <Scene duration={"185%"} triggerHook={0.11} pin>
        <div
          className="left-side"
          style={{ backgroundImage: `url(${leftsideImage})` }}
        ></div>
      </Scene>
    </Controller>

    <div className="right-side">
      <div className="image-text-box">
        <div
          className="jewelry-image"
          style={{ backgroundImage: `url(${firstImage})` }}
        />
        <div className="jewelry-text">
          <h3>Highest Quality</h3>
          <p>
            Home is where our heart of gold is, so we like to keep things close
            by. All of our gold is 100% recycled, sustainably handmade, casted,
            polished and perfected by seventh generation craftsmen. Every single
            design goes through a rigorous 5-step testing process by our
            in-house team so you can shine your brightest and wear it
            worry-free.
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
            Home is where our heart of gold is, so we like to keep things close
            by. All of our gold is 100% recycled, sustainably handmade, casted,
            polished and perfected by seventh generation craftsmen. Every single
            design goes through a rigorous 5-step testing process by our
            in-house team so you can shine your brightest and wear it
            worry-free.
          </p>
        </div>
      </div>
      <div className="image-text-box">
        <div
          className="jewelry-image"
          style={{ backgroundImage: `url(${thirdImage})` }}
        />
        <div className="jewelry-text">
          <h3>Highest Quality</h3>
          <p>
            Home is where our heart of gold is, so we like to keep things close
            by. All of our gold is 100% recycled, sustainably handmade, casted,
            polished and perfected by seventh generation craftsmen. Every single
            design goes through a rigorous 5-step testing process by our
            in-house team so you can shine your brightest and wear it
            worry-free.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WhyHerico;
