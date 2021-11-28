import React from "react";
import { Lizard } from "./pieces/Lizard";
import { Paper } from "./pieces/Paper";
import { Rock } from "./pieces/Rock";
import { Scissors } from "./pieces/Scissors";
import { Spock } from "./pieces/Spock";
import pentagon from "../images/bg-pentagon.svg";
export const FiguresToPick = ({setpick}) => {
  return (
    <div className="figures-container animate__animated animate__fadeIn">
      <img src={pentagon} className="pentagon" alt="pentagon" />
      <Scissors setpick={setpick} />
      <Paper setpick={setpick} />
      <Lizard setpick={setpick} />
      <Rock setpick={setpick} />
      <Spock setpick={setpick} />
    </div>
  );
};
