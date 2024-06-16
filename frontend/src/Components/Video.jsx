import React from "react";

const Video = (props) => {
  return (
    <>
      <div className="video video-container">
        <video className="videoVid" autoPlay muted loop>
          <source src={props.videoURL} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Video;
