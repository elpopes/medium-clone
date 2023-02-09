import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "../SignUpForm";
import "./SignUpButton.css";

function SignUpButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="sign-up-button">
        Get Started
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}

export default SignUpButton;
