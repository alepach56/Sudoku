import React, { useState } from 'react';
import './GridCell.css';

function GridCell({ row, col, value, onClick, onArrowClick }) {
  const [clicked, setClicked] = useState(false);
  const [number, setNumber] = useState(null);

  const handleCellClick = () => {
    setClicked(true);
  };

  const handleBlur = () => {
    setClicked(false);
  };

  const handleArrowClick = (direction) => {
    console.log('GridCell received arrow click');
    handleBlur();
    onArrowClick(direction, row, col); // Call the onArrowClick callback with direction, row, and col as arguments
  };

  const handleKeyDown = (event) => {
    const arrowKeyCodes = [37, 38, 39, 40];
    if (arrowKeyCodes.includes(event.keyCode)) {
      let direction;
      switch (event.keyCode) {
        case 37:
          direction = 'left';
          break;
        case 38:
          direction = 'up';
          break;
        case 39:
          direction = 'right';
          break;
        case 40:
          direction = 'down';
          break;
        default:
          return;
      }
      handleArrowClick(direction);
    }

    if (event.keyCode === 8 || event.keyCode === 46) {
      setNumber(null);
    }

    const num = Number(event.key);
    if (!isNaN(num) && num < 10 && num >= 0) {
      setNumber(num);
    }
  };

  return (
    <div
      className={`grid-cell ${clicked ? 'clicked' : ''}`}
      onBlur={handleBlur}
      tabIndex={0}
      onClick={handleCellClick}
      onKeyDown={handleKeyDown}
    >
      {number !== null && <span className="inputtedNumber">{number}</span>}
    </div>
  );
}

export default GridCell;