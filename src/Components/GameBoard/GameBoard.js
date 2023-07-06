import React, { useState } from 'react';
import './GameBoard.css';
import GridCell from '../GridCell/GridCell';
import DiffButton from '../Button/DiffButton';
import SolveButton from '../Button/SolveButton';
import Grid from '../Grid/Grid';

function GameBoard() {
    console.log('GameBoard received events');

  const [grid, setGrid] = useState(
    Array.from({ length: 9 }, () =>
      Array.from({ length: 9 }, () => ({ value: null, color: 'red' }))
    )
  );

  

  return (
    <div>
      <h1 className="Title">Sudoku With Solver</h1>
        <DiffButton></DiffButton>
        <div className="board-grid" tabIndex={0}>
        {grid.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="grid-row">
            {row.map((cell, colIndex) => (
              <GridCell
                key={`cell-${rowIndex}-${colIndex}`}
                row={rowIndex}
                col={colIndex}
                value={cell.value}
                color={cell.color}
              />
            ))}
          </div>
        ))}
      </div>
      {
       // <Grid></Grid>
      }
      <div className="solveButtonContainer">
        <SolveButton></SolveButton>
      </div>
    </div>
  );
}

export default GameBoard;