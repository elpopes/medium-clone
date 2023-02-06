import SignedOutNav from "./components/signedOutNav/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <SignedOutNav />
        <h1>Hello from Medium-Earth</h1>
      </Router>
    </>
  );
}

export default App;
