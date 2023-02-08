import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";

function App() {
  const loggedIn = useSelector((state) => state.session.user);
  return (
    <>
      <Router>
        {loggedIn ? <HomePage /> : <LandingPage />}
        <h1>Hello from Medium-Earth</h1>
      </Router>
    </>
  );
}

export default App;
