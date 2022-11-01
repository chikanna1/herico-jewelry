import React, { Component, useState, useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from "react-slick";
import ImageGallery from "react-image-gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Grid from "@material-ui/core/Grid";
import ReactDelayRender from "react-delay-render";

import "./product-image.styles.scss";
// import "./styles/react-slick.css";

const ProductImage = ({ item }) => {
  let productImage = item.productImage1;

  const [thumbnailOneActive, setThumbnailOneActive] = useState(false);
  const [thumbnailTwoActive, setThumbnailTwoActive] = useState(false);
  const [thumbnailThreeActive, setThumbnailThreeActive] = useState(false);
  const [thumbnailFourActive, setThumbnailFourActive] = useState(false);

  const [displayImage1, setDisplayImage] = useState(productImage);

  const setActiveImage = (activeImage) => {
    switch (activeImage) {
      case 1:
        setDisplayImage(item.productImage1);
        setThumbnailOneActive(true);
        setThumbnailTwoActive(false);
        setThumbnailThreeActive(false);
        setThumbnailFourActive(false);
        return "active";
      case 2:
        setDisplayImage(item.modelImage1);
        setThumbnailTwoActive(true);
        setThumbnailOneActive(false);
        setThumbnailThreeActive(false);
        setThumbnailFourActive(false);
        return "active";
      case 3:
        setDisplayImage(item.productImage2);
        setThumbnailThreeActive(true);
        setThumbnailTwoActive(false);
        setThumbnailOneActive(false);
        setThumbnailFourActive(false);
        return "active";
      case 4:
        setDisplayImage(item.modelImage2);
        setThumbnailFourActive(true);
        setThumbnailTwoActive(false);
        setThumbnailOneActive(false);
        setThumbnailThreeActive(false);
        return "active";
      default:
        return "NULL";
    }
  };

  return (
    <div className="product-image-container">
      <ReactImageMagnify
        key={item.id}
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: false,
            width: 650,
            height: 600,
            src: displayImage1,
          },
          largeImage: {
            src: displayImage1,
            width: 1200,
            height: 1800,
          },
          enlargedImageContainerDimensions: {
            width: "100%",
            height: "100%",
          },
        }}
      />
      <div className="thumbnail-navigator">
        <div className="thumbnail-image">
          <img
            src={item.productImage1}
            alt="Product Image"
            onClick={() => setActiveImage(1)}
            className={thumbnailOneActive ? `active` : ``}
          />
        </div>
        <div className="thumbnail-image">
          <img
            src={item.modelImage1}
            alt="Product Image"
            onClick={() => setActiveImage(2)}
            className={thumbnailTwoActive ? `active` : ``}
          />
        </div>
        <div className="thumbnail-image">
          <img
            src={item.productImage2}
            alt="Product Image"
            onClick={() => setActiveImage(3)}
            className={thumbnailThreeActive ? `active` : ``}
          />
        </div>
        <div className="thumbnail-image">
          <img
            src={item.modelImage2}
            alt="Product Image"
            onClick={() => setActiveImage(4)}
            className={thumbnailFourActive ? `active` : ``}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
