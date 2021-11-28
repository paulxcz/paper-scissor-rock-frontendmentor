import React from "react";
import iconLizard from "../../images/icon-lizard.svg";

import "../../styles/Pieces/Lizard.css";
export const Lizard = ({ right, bottom, top, left, setpick }) => {
  return (
    <div
      className="lizard-border-gradiant"
      style={{ right: right, bottom: bottom, top: top, left: left }}
      onClick={
        (e)=>{
          e.preventDefault();
          if (typeof setpick != 'undefined') {
            setpick({
              piecePicked: true,
              piece:3
            });
          }
        }
      }
    >
      <div className="icon-container">
        <img src={iconLizard} className="icon" alt="lizard-icon" />
      </div>
    </div>
  );
};
