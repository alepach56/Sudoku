import React, { useState } from 'react';
import './GridCell.css';

function GridCell({row, col, val, onClick}) {
    
    const [clicked, setClicked] = useState(false);
    const[number, setNumber] = useState(null);

    const handleCellClick = () => {
        console.log('GridCell received events');
        setClicked(true);
    };

    const handleBlur = () => {
        setClicked(false);
    };

    

    const handleKeyDown = event => {
        if(event.keyCode == 8 || event.keyCode == 46){
            setNumber(null);
        }
        const num = Number(event.key);
        if (!isNaN(num) && num < 10 && num >=0){
            setNumber(num);
        }
    };

    return (
        <div
            className={`grid-cell ${clicked ? 'clicked' : ''}`}
            onBlur={handleBlur}
            tabIndex={0}
            onClick ={event => handleCellClick(event)}
            onKeyDown = {handleKeyDown}
        >
            {number !== null && <span className= "inputtedNumber">{number} </span>}
        </div>
  );
}

export default GridCell;