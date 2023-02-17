import React from "react";

function DemoUser({ onCredentialChange, onPasswordChange }) {
  const handleDemoUser = () => {
    onCredentialChange("theGrey");
    onPasswordChange("password");
  };

  return (
    <button type="button" onClick={handleDemoUser}>
      Demo User
    </button>
  );
}

export default DemoUser;
