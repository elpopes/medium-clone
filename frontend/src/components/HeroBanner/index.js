import "./HeroBanner.css";
import BannerButton from "../BannerButton";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="text">
        <h1>Fly, you fools!</h1>
        <h3>"There is nothing like looking if you want to find something."</h3>
        <BannerButton></BannerButton>
      </div>
      <div className="animation"></div>
    </div>
  );
};

export default HeroBanner;
