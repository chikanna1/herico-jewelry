import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import MyReactImageMagnify from "./MyReactImageMagnify";

class MyImageGallery extends Component {
  myRenderItem() {
    return <MyReactImageMagnify {...this.props} />;
  }

  render() {
    const properties = {
      // thumbnailPosition: "bottom",
      useBrowserFullscreen: false,
      showPlayButton: false,
      renderItem: this.myRenderItem.bind(this),
      items: [
        {
          original: "https://placeimg.com/640/480/any/1",
          thumbnail: "https://placeimg.com/250/150/any/1",
        },
        {
          original: "https://placeimg.com/640/480/any/2",
          thumbnail: "https://placeimg.com/250/150/any/2",
        },
        {
          original: "https://placeimg.com/640/480/any/3",
          thumbnail: "https://placeimg.com/250/150/any/3",
        },
      ],
    };

    return <ImageGallery {...properties} />;
  }
}

export default MyImageGallery;
