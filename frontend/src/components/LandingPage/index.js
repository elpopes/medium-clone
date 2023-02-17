import SignedOutNav from "../signedOutNav";
import HeroBanner from "../HeroBanner";
import Trending from "../Trending";
import StoriesIndex from "../StoriesIndex";

const LandingPage = () => {
  return (
    <>
      <SignedOutNav />
      <HeroBanner />
      <Trending />
      <StoriesIndex />
    </>
  );
};

export default LandingPage;
