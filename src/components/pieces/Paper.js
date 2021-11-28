import React from "react";
import iconPaper from "../../images/icon-paper.svg";

import "../../styles/Pieces/Paper.css";

export const Paper = ({ right, bottom, top, left, setpick }) => {
  return (
    <div className="paper-border-gradiant" style={{ right: right, bottom: bottom, top: top, left: left}}
    onClick={
      (e)=>{
        e.preventDefault();
        if (typeof setpick != 'undefined') {
          setpick({
            piecePicked: true,
            piece:2
          });
        }
      }
    }
    >
      <div className="icon-container">
        <img src={iconPaper} className="icon" alt="paper-icon" />
      </div>
    </div>
  );
};
