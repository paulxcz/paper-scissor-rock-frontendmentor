import React, { useState } from "react";
import { FiguresContainer } from "./components/FiguresContainer";
import { Header } from "./components/Header";
import { Rules } from "./components/Rules";
import { RulesDetails } from "./components/RulesDetails";

import 'animate.css';

export const PinPon = () => {
  const [rules, setrules] = useState(false);
  const [score, setscore] = useState(0)
  return (
    <div className="app-container">
      <Header score={score}/>
      <FiguresContainer setscore={setscore} />
      <Rules setrules = {setrules} />
      {
          (rules) && <RulesDetails setrules= {setrules}/>
      }
    </div>
  );
};
