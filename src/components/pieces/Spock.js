import React from "react";
import iconSpock from "../../images/icon-spock.svg";

import "../../styles/Pieces/Spock.css";

export const Spock = ({ right, bottom, top, left, setpick }) => {
  return (
    <div className="spock-border-gradiant" style={{ right: right, bottom: bottom, top: top, left: left }}
    onClick={
      (e)=>{
        e.preventDefault();
        if (typeof setpick != 'undefined') {
          setpick({
            piecePicked: true,
            piece:5
          });
        }
      }
    }
    >
      <div className="icon-container">
        <img src={iconSpock} className="icon" alt="paper-icon" />
      </div>
    </div>
  );
};
