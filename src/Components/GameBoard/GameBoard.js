import React, { useState } from 'react';
import './GameBoard.css';
import GridCell from '../GridCell/GridCell';

function GameBoard() {
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill(null)));

  const handleCellClick = (row, col) => {
    // Handle cell click logic here
  };

  const handleKeyDown = (row, col, e) => {
    // Handle keydown logic here
  };

  return (
        <div className="board-grid">
            {grid.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="grid-row">
            {row.map((cellValue, colIndex) => (
                <GridCell
                key={`cell-${rowIndex}-${colIndex}`}
                value={cellValue}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                onKeyDown={(e) => handleKeyDown(rowIndex, colIndex, e)}
                />
            ))}
            </div>
        ))}
        </div>
    
  );
}

export default GameBoard;