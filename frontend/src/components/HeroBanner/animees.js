import React, { useEffect, useRef } from "react";

export default function AnimateMes({ height, windowWidth }) {
  const animationDiv = useRef(null);

  useEffect(() => {
    const numMes = 20; // Adjust this value to control the number of "ME"s
    const minWidth = 650;

    const resizeAnimationContainer = () => {
      if (windowWidth >= minWidth) {
        animationDiv.current.style.height = `${height}px`;
      } else {
        animationDiv.current.style.height = "0";
      }
    };

    resizeAnimationContainer();

    if (windowWidth >= minWidth) {
      for (let i = 0; i < numMes; i++) {
        const me = document.createElement("div");
        me.classList.add("me");
        me.textContent = "ME";

        const meWidth = 50; // Adjust this value according to the width set in AnimateMes.css
        const meHeight = 24; // Adjust this value according to the height set in AnimateMes.css
        const xPos =
          Math.random() * (animationDiv.current.clientWidth - meWidth);
        const yPos = Math.random() * (height - meHeight);
        me.style.left = `${xPos}px`;
        me.style.top = `${yPos}px`;

        const delay = Math.floor(Math.random() * 2000);
        me.style.animationDelay = `${delay}ms`;

        animationDiv.current.appendChild(me);
      }
    }
  }, [height, windowWidth]);

  return <div className="animation" ref={animationDiv}></div>;
}
