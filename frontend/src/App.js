import SignedOutNav from "./components/signedOutNav/index";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import HeroBanner from "./components/HeroBanner";

function App() {
  const loggedIn = useSelector((state) => state.session.user);
  return (
    <>
      <Router>
        <SignedOutNav />
        <HeroBanner />
        <h1>Hello from Medium-Earth</h1>
      </Router>
    </>
  );
}

export default App;
