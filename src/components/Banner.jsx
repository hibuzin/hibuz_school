import React from "react";
import bannerImg from "../assets/banner.png";

function Banner() {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16 / 5", // maintains banner proportion
        minHeight: "200px",    // ensures mobile doesn't shrink too much
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundColor: "#f8fafc",
      }}
    ></div>
  );
}

export default Banner;