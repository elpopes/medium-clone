import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import EditUser from "./EditUser";
import "./Account.css";
// import EditPhoto from "./EditPhoto";
import SignedInNav from "../signedInNav";
import { Redirect } from "react-router-dom";
// import EditUsername from './EditUsername';
import UploadAvatar from "../Avatar/uploadAvatar";

function Account() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <>
      <SignedInNav />
      <div className="account-container">
        <div className="account-header">
          <h1>Account</h1>
        </div>
        <div className="account-info">
          <div
            onClick={() => setShowModal1(true)}
            className="account-info-container"
          >
            <div className="account-info-title">Email address</div>
            <div className="account-info-data">{sessionUser.email}</div>
            {showModal1 && (
              <Modal
                onClick={(e) => {
                  if (e.target.id === "modal-background") {
                    setShowModal1(false);
                  }
                }}
                // onClose={() => setShowModal1(false)}
              >
                <EditUser />
              </Modal>
            )}
          </div>

          <div
            onClick={() => setShowModal2(true)}
            className="account-info-container"
          >
            <div className="account-info-title">Photo</div>
            <div className="account-info-data">{sessionUser.photoUrl}</div>
            {showModal2 && (
              <Modal onClose={() => setShowModal2(false)}>
                <UploadAvatar />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
