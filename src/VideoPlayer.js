import React, { useRef } from "react";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef();

  return (
    <div>
      <video src={src} ref={videoRef} />
      <button
        onClick={() => {
          videoRef.current.play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          videoRef.current.pause();
        }}
      >
        Pause
      </button>
    </div>
  );
};

export default VideoPlayer;
