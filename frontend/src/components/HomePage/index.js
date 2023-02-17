import SignedInNav from "../signedInNav";
import "./HomePage.css";
import StoriesIndex from "../StoriesIndex";
import SideBar from "../SideBar";

const HomePage = () => {
  return (
    <>
      <SignedInNav />
      <div className="home-page-container">
        <StoriesIndex className="main-content" />
        <SideBar />
      </div>
    </>
  );
};

export default HomePage;
