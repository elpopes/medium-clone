import SignedInNav from "../signedInNav";
import UserAvatar from "../Avatar/UserAvatar";
import Trending from "../Trending";

const HomePage = () => {
  return (
    <>
      <SignedInNav />
      <UserAvatar />
      <Trending />
    </>
  );
};

export default HomePage;
