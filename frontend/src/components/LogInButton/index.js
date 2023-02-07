import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModel/LoginForm";

function LoginButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="button">
        Log In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginButton;
