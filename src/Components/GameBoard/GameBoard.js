import React, { useState } from 'react';
import './GameBoard.css';
import GridCell from '../GridCell/GridCell';
import DiffButton from '../Button/DiffButton';
import SolveButton from '../Button/SolveButton';
function GameBoard() {
    console.log('GameBoard received events');
    const [grid, setGrid] = useState(Array(9).fill(Array(9).fill(null)));

    return (
        <div>
            <h1 className = "Title"> Sudoku With Solver</h1> 
            <DiffButton></DiffButton> 
            

            <div className="board-grid" tabIndex={0}>
                {grid.map((row, rowIndex) => (
                <div key={`row-${rowIndex}`} className="grid-row">
                    {row.map((cellValue, colIndex) => (
                    <GridCell row = {rowIndex} col = {colIndex}
                        key={`cell-${rowIndex}-${colIndex}`}
                        value={cellValue}
                        
                
                />
                ))}
                </div>
            ))}
            </div>
            <div className='solveButtonContainer'>
                <SolveButton> </SolveButton>
            </div>
        </div>
    
    );
}

export default GameBoard;
