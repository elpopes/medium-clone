import React from "react";
import "./HeroBanner.css";
import BannerButton from "../BannerButton";
import AnimateMes from "./animees";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="text">
        <h1>Fly, you fools!</h1>
        <h2>There is nothing like looking if you want to find something.</h2>
        <BannerButton />
      </div>
      <AnimateMes />
    </div>
  );
};

export default HeroBanner;
