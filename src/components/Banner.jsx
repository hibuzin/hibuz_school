import React from "react";
import bannerImg from "../assets/banner.png";

function Banner() {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
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