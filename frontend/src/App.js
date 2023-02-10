import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Avatars from "./components/Avatars";

function App() {
  const loggedIn = useSelector((state) => state.session.user);
  return (
    <>
      <Router>
        {loggedIn ? <HomePage /> : <LandingPage />}
        <Avatars />
        <h1>Hello from Medium-Earth</h1>
      </Router>
    </>
  );
}

export default App;
