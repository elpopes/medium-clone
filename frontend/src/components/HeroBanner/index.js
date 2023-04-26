import React, { useRef, useState, useEffect } from "react";
import "./HeroBanner.css";
import BannerButton from "../BannerButton";
import AnimateMes from "./animees";

const HeroBanner = () => {
  const heroBannerRef = useRef(null);

  const [height, setHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (heroBannerRef.current) {
      setHeight(heroBannerRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero-banner" ref={heroBannerRef}>
      <div className="text">
        <h1>Fly, you fools!</h1>
        <h2>There is nothing like looking if you want to find something.</h2>
        <BannerButton></BannerButton>
      </div>
      <div className="animation">
        <AnimateMes height={height} windowWidth={windowWidth} />
      </div>
    </div>
  );
};

export default HeroBanner;
