import React, { useRef, useState } from "react";
import rulesBonus from "../images/image-rules-bonus.svg";
import iconClose from "../images/icon-close.svg";

import "../styles/RulesDetails/RulesDetails.css";
export const RulesDetails = ({ setrules }) => {
  const modalContainer = useRef(null);
  const [style, setstyle] = useState('fadeIn')
  const handleClickOutside = ({ target }) => {
    if (modalContainer.current && !modalContainer.current.contains(target)) {
      setstyle('fadeOut');
      setTimeout(() => {
        setrules(false);
      }, 800);
    }
  };
  return (
    <div className="rules-details-background" onClick={handleClickOutside}>
      <div
        className={`rules-details animate__animated animate__${style}`}
        ref={modalContainer}
      >
        <h1>RULES</h1>
        <img src={rulesBonus} className="rule-image" alt="rule" />
        <img
          className="close-rule-details"
          src={iconClose}
          alt="icon-close"
          onClick={(e) => {
            e.preventDefault();
            setstyle('fadeOut');
            setTimeout(() => {
              setrules(false);
            }, 800);
          }}
        />
      </div>
    </div>
  );
};
