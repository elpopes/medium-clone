import React, { useState } from "react";
import "./ClapButton.css";

const ClapButton = ({ initialClaps }) => {
  const [claps, setClaps] = useState(initialClaps || 0);
  const [clapped, setClapped] = useState(false);

  const handleClap = () => {
    if (!clapped) {
      setClaps(claps + 1);
      setClapped(true);
    } else {
    }
  };

  return (
    <button
      className={`clap-button ${clapped ? "clapped" : ""}`}
      onClick={handleClap}
    >
      Clap {claps > 0 && <span>({claps})</span>}
    </button>
  );
};

export default ClapButton;
