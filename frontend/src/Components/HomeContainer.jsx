import React from "react";
import tvFrame from "../assets/tvFrame.png";
import { Video } from "./CompIndex";
import VideoFlix from "../assets/videoTv.mp4";
const homeContainer = () => {
  return (
    <div>
      <hr className="border-5 mb-5" />
      <div className="tvContainer">
        <div className="text-center leftTvText">
          <h2 className="hc-title">Enjoy on your TV</h2>
          <p className="hc-caption mt-3">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="d-center">
          <img className="tvFrame" src={tvFrame} alt="" />
          <Video videoURL={VideoFlix} />
        </div>
      </div>
    </div>
  );
};

export default homeContainer;
