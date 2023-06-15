import React, { useState} from "react"
import './GameBoard.css';
import GridCell from '../GridCell/GridCell';



function GameBoard () {

    
    return (
    <div className="grid">
      {[...Array(9)].map((_, row) => (
        <div key={`row-${row}`} className="grid-row">
          {[...Array(9)].map((_, col) => (
            <GridCell key={`cell-${row}-${col}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
export default GameBoard