import React from "react";
import "./video-showcase.styles.scss";
import Video from "./assets/temp-video.mp4";
import ReactPlayer from "react-player";
const url = "https://www.youtube.com/watch?v=xeeIISxzps4";
// const url = "https://vimeo.com/146957840";
// const old_url = "https://vimeo.com/302168664";
const VideoShowcase = () => (
  <div className="video-showcase-container">
    <ReactPlayer
      className="video"
      width="100%"
      height="100%"
      url={url}
      controls={false}
      muted={true}
      autoPlay={true}
      playing={true}
      loop={true}
    />
  </div>
);

export default VideoShowcase;
