import React, { Component } from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from "react-slick";

const TestProductImage = (item) => {
  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Wristwatch by Ted Baker London",
          isFluidWidth: false,
          width: 650,
          height: 600,
          src: item.productImage1,
        },
        largeImage: {
          src: item.productImage1,
          width: 1200,
          height: 1800,
        },
        enlargedImageContainerDimensions: {
          width: "100%",
          height: "100%",
        },
      }}
    />
  );
};

export default TestProductImage;
