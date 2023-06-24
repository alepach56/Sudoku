import React, { useState } from 'react';
import './GameBoard.css';
import GridCell from '../GridCell/GridCell';
import DiffButton from '../Button/DiffButton';
import SolveButton from '../Button/SolveButton';

function GameBoard() {
    console.log('GameBoard received events');

  const [grid, setGrid] = useState(
    Array.from({ length: 9 }, () =>
      Array.from({ length: 9 }, () => ({ value: null, color: 'red' }))
    )
  );

  const handleArrowClick = (direction, row, col) => {
    console.log('GameBoard received arrow click');
    const updatedGrid = [...grid];
    console.log(row, col);
    switch (direction) {
      case 'left':
        if (col > 0) {
          col = col - 1;
        }
        break;
      case 'up':
        if (row > 0) {
          row = row - 1;
        }
        break;
      case 'right':
        if (col < grid[row].length - 1) {
          col = col + 1;
        }
        break;
      case 'down':
        if (row < grid.length - 1) {
          row = row + 1;
        }
        break;
      default:
        return;
    }
    console.log(row, col);
    updatedGrid[row][col].color = 'green';
    setGrid(updatedGrid);
  };

  return (
    <div>
      <h1 className="Title">Sudoku With Solver</h1>
      <DiffButton></DiffButton>

      <table className="board-grid">
        <tbody>
            {
                [0,1,2,3,4,5,6,7,8].map((row,rIndex) => {
                    return <tr key = {rIndex}>
                        {[0,1,2,3,4,5,6,7,8].map((col,cIndex) => {
                            return <td key={rIndex+cIndex}>
                                <input className = "cellInput"></input>
                        </td>
                        })}   
                    </tr>
                })
            }
            
        </tbody>
      </table>
      <div className="solveButtonContainer">
        <SolveButton></SolveButton>
      </div>
    </div>
  );
}

export default GameBoard;