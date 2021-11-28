import React, { useState } from "react";
import { Pickups } from "./Pickups";
import { FiguresToPick } from "./FiguresToPick";
import "../styles/FiguresContainer/FigureContainer.css";

export const FiguresContainer = ({setscore}) => {
  const [pick, setpick] = useState({
    piecePicked: false,
    piece: null,
  });
    
  const { piecePicked, piece } = pick;
  return (
    <>
      {piecePicked ? (
        <Pickups pieceNumber={piece} setpick={setpick} setscore={setscore}/>
      ) : (
        <FiguresToPick setpick={setpick} />
      )}
    </>
  );
};
