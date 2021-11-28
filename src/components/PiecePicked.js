import React from 'react'
import { Lizard } from './pieces/Lizard'

import { Paper } from './pieces/Paper'
import { Rock } from './pieces/Rock'
import { Scissors } from './pieces/Scissors'
import { Spock } from './pieces/Spock'

export const PiecePicked = ({pieceNumber}) => {

    switch (pieceNumber) {
        case 1:
            return <Scissors />
        case 2:
            return <Paper />    
        case 3:
            return <Lizard />    
        case 4:
            return <Rock />    
        case 5:
            return <Spock />    

        default:
            return <h1>El número de pieza no está asociado a ninguna ficha.</h1>;
    }
}
