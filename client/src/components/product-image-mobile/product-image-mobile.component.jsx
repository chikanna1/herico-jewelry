import React, { Component } from "react";
import ReactImageMagnify from "react-image-magnify";
import ImageGallery from "react-image-gallery";

import "./product-image-mobile.styles.scss";

const ProductImageMobile = ({ item }) => {
  console.log("Item is ");
  console.log(item);
  const images = [
    {
      original: item.productImage1,
      thumbnail: item.productImage1,
    },
    {
      original: item.modelImage1,
      thumbnail: item.modelImage1,
    },
    {
      original: item.productImage2,
      thumbnail: item.productImage2,
    },
    {
      original: item.modelImage2,
      thumbnail: item.modelImage2,
    },
  ];

  return (
    <div className="product-image-container-mobile">
      <ImageGallery
        items={images}
        showNav={false}
        showPlayButton={false}
        showFullscreenButton={false}
      />
      ;
    </div>
  );
};

export default ProductImageMobile;
