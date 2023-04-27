import React, { useState, useEffect } from "react";

const AnimateMes = () => {
  const message =
    "ME     ME      ME           ME          ME        ME         ME       ME".repeat(
      7
    );

  const generateElements = () => {
    let elements = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") {
        const spaceWidth = Math.floor(Math.random() * 4) + 1;
        elements.push(
          <span className="whitespace" key={`whitespace-${i}`}>
            {new Array(spaceWidth).fill("\u00A0")}
          </span>
        );
      } else {
        elements.push(
          <span className="me" key={`me-${i}`}>
            ME
          </span>
        );
      }
    }
    return elements;
  };

  const [elements] = useState(generateElements);

  useEffect(() => {
    const meElements = document.querySelectorAll(".me");

    meElements.forEach((element) => {
      const randomInterval = Math.floor(Math.random() * 5000) + 6000;
      setInterval(() => {
        element.classList.toggle("blink");
      }, randomInterval);
    });
  }, []);

  return <div className="animation-wrapper">{elements}</div>;
};

export default AnimateMes;
