import SignedOutNav from "./components/signedOutNav/index";
import { BrowserRouter as Router } from "react-router-dom";
import { Modal } from "./context/Modal";
import LoginForm from "./components/LoginFormModel/LoginForm";
import HeroBanner from "./components/HeroBanner";

function App() {
  return (
    <>
      <Router>
        <SignedOutNav />
        <HeroBanner />
        <Modal>
          <LoginForm>
            <h1>Hello from Medium-Earth</h1>
          </LoginForm>
        </Modal>
      </Router>
    </>
  );
}

export default App;
