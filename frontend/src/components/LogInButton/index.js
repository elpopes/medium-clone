import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModel/LoginForm";
import "./LogInButton.css";

function LoginButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p onClick={() => setShowModal(true)} className="button">
        Sign In
      </p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginButton;
