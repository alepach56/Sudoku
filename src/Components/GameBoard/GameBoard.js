import React, { useState } from 'react';
import './GameBoard.css';
import GridCell from '../GridCell/GridCell';

function GameBoard() {
    console.log('GameBoard received events');
    const [grid, setGrid] = useState(Array(9).fill(Array(9).fill(null)));

  
    return (
        <div className="board-grid" tabIndex={0}>
            {grid.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="grid-row">
            {row.map((cellValue, colIndex) => (
                <GridCell row = {rowIndex} col = {colIndex}
                key={`cell-${rowIndex}-${colIndex}`}
                value={cellValue}
              //  onClick={() => handleCellClick(rowIndex, colIndex)}
              //  onKeyDown={(e) => handleKeyDown(rowIndex, colIndex, e)}
                
                />
            ))}
            </div>
        ))}
        </div>
    
    );
}

export default GameBoard;

/*
  const handleKeyDown = (row, col, e) => {
    console.log('User pressed: ');
    if (e >= 0 && e < 10){
        console.log(e);
    }
  };

  const handleCellClick = (row, col) => {
    // Handle cell click logic here
    
  };
*/