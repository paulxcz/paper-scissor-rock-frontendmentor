import React from "react";

import "../styles/WinnerText/WinnerText.css";

export const WinnerText = ({ winBoolean = true, setpick }) => {
  return (
    <div className="winner-text-container">
      {winBoolean ? <h1>YOU WIN</h1> : <h1>YOU LOSE</h1>}
      <button
        onClick={(e) => {
          e.preventDefault();
          setpick({
            piecePicked: false,
            piece: null,
          });
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  );
};
