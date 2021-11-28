import React, { memo, useEffect } from "react";
import { PiecePicked } from "./PiecePicked";
import { generateRandom } from "../helpers/generateRandom";
import { WinnerText } from "./WinnerText";

import "../styles/Pickups/Pickups.css";

export const Pickups = memo(({ pieceNumber, setpick, setscore }) => {
  let housePick = pieceNumber;
  let winBoolean = null;

  while (housePick === pieceNumber) {
    housePick = generateRandom(1, 5);
  }

  let userPickWinBoolean = null;
  let housePickWinBoolean = null;

  useEffect(() => {
    
    if (userPickWinBoolean) {
      setscore(
        (score) => score + 1
      );  
    }else{
      setscore(
        (score) => score - 1
      );
  
    }
  }, [userPickWinBoolean, housePickWinBoolean, setscore]);

  switch (pieceNumber) {
    case 1:
      if (housePick === 2 || housePick === 3) {
        winBoolean = true;

        userPickWinBoolean = true;
        housePickWinBoolean = false;
      } else {
        winBoolean = false;

        userPickWinBoolean = false;
        housePickWinBoolean = true;
      }
      break;
    case 2:
      if (housePick === 4 || housePick === 5) {
        winBoolean = true;
        userPickWinBoolean = true;
        housePickWinBoolean = false;
      } else {
        winBoolean = false;
        userPickWinBoolean = false;
        housePickWinBoolean = true;
      }
      break;
    case 3:
      if (housePick === 2 || housePick === 5) {
        winBoolean = true;
        userPickWinBoolean = true;
        housePickWinBoolean = false;
      } else {
        winBoolean = false;
        userPickWinBoolean = false;
        housePickWinBoolean = true;
      }
      break;
    case 4:
      if (housePick === 1 || housePick === 3) {
        winBoolean = true;
        userPickWinBoolean = true;
        housePickWinBoolean = false;
      } else {
        winBoolean = false;
        userPickWinBoolean = false;
        housePickWinBoolean = true;
      }
      break;
    case 5:
      if (housePick === 1 || housePick === 4) {
        winBoolean = true;
        userPickWinBoolean = true;
        housePickWinBoolean = false;
      } else {
        winBoolean = false;
        userPickWinBoolean = false;
        housePickWinBoolean = true;
      }
      break;
    default:
      break;
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="pickups">
        <div className="pick1-container">
          <div className={`pick1 ${userPickWinBoolean && "shadow"}`}>
            <PiecePicked pieceNumber={pieceNumber} />
          </div>
          <h3>YOU PICKED</h3>
        </div>
        <div className="pick2-container">
          <div className={`pick2 ${housePickWinBoolean && "shadow"} animate__animated animate__flipInX`}>
            <PiecePicked pieceNumber={housePick} />
          </div>
          <h3>THE HOUSE PICKED</h3>
        </div>
      </div>

      <WinnerText setpick={setpick} winBoolean={winBoolean} />
    </div>
  );
});
