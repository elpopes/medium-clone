import SignedOutNav from "./components/signedOutNav/index";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "./components/LoginFormModel/LoginForm";

function App() {
  return (
    <>
      <Router>
        <SignedOutNav />
        <LoginForm>
          <h1>Hello from Medium-Earth</h1>
        </LoginForm>
      </Router>
    </>
  );
}

export default App;
