import React from "react";
import "./loading.css";
function Loading({ loadingColor, width = "14px", height = "14px" }: any) {
  const loadingDefault = "#fff";
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100%" }}
    >
      <div
        className="dot1"
        style={{
          background: loadingColor ? loadingColor : loadingDefault,
          width: width,
          height: height,
        }}
      ></div>
      <div
        className="dot2"
        style={{
          background: loadingColor ? loadingColor : loadingDefault,
          width: width,
          height: height,
        }}
      ></div>
      <div
        className="dot3"
        style={{
          background: loadingColor ? loadingColor : loadingDefault,
          width: width,
          height: height,
        }}
      ></div>
      <div
        className="dot4"
        style={{
          background: loadingColor ? loadingColor : loadingDefault,
          width: width,
          height: height,
        }}
      ></div>
      <div
        className="dot5"
        style={{
          background: loadingColor ? loadingColor : loadingDefault,
          width: width,
          height: height,
        }}
      ></div>
    </div>
  );
}

export default Loading;
