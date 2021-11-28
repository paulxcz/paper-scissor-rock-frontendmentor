import React from "react";
import iconScissors from "../../images/icon-scissors.svg";

import "../../styles/Pieces/Scissors.css";

export const Scissors = ({ right, bottom, top, left, setpick }) => {
  return (
    <div className="scissors-border-gradiant" style={{ right: right, bottom: bottom, top: top, left: left}}
    onClick={
      (e)=>{
        e.preventDefault();
        if (typeof setpick != 'undefined') {
          setpick({
            piecePicked: true,
            piece:1
          });
        }
      }
    }
    >
      <div className="icon-container">
        <img src={iconScissors} className="icon" alt="scissors-icon" />
      </div>
    </div>
  );
};
