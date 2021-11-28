import React from "react";
import iconRock from "../../images/icon-rock.svg";

import "../../styles/Pieces/Rock.css";

export const Rock = ({ right, bottom, top, left, setpick }) => {
  return (
    <div className="rock-border-gradiant" style={{ right: right, bottom: bottom, top: top, left: left}}
    onClick={
      (e)=>{
        e.preventDefault();
        if (typeof setpick != 'undefined') {
          setpick({
            piecePicked: true,
            piece:4
          });
        }
      }
    }
    >
      <div className="icon-container">
        <img src={iconRock} className="icon" alt="rock-icon" />
      </div>
    </div>
  );
};
