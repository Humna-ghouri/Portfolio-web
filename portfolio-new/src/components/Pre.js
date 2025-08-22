import React from "react";
import "./Preloader.css"; // Create this CSS file

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="matrix-loader">
        <div className="loader-text">LOADING SYSTEM...</div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <div className="binary-code">
          01001000 01110101 01101101 01101110 01100001 00100000 01000111 01101000 01101111 01110101 01110010 01101001
        </div>
      </div>
    </div>
  );
}

export default Pre;