import React from 'react'

import '../styles/Header/Header.css'

export const Header = ({score}) => {


    return (
        <div className="score-board">
            <ul>
                <li>ROCK</li>
                <li>PAPER</li>
                <li>SCISSORS</li>
                <li>LIZARD</li>
                <li>SPOCK</li>
            </ul>
            <div className="score">
                <b>SCORE</b>
                <h1>{score}</h1>
            </div>
        </div>
    )
}
