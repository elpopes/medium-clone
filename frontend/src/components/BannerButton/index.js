import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "../SignUpForm";
import "./BannerButton.css";

function BannerButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="sign-in-button">
        Adventure here
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}

export default BannerButton;
