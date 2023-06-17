import React, { useState } from 'react';
import './GridCell.css';

function GridCell() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const handleBlur = () => {
    setClicked(false);
  };

  return (
    <div
      className={`grid-cell ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0}
    ></div>
  );
}

export default GridCell;