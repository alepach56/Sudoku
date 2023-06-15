import React, { useState } from 'react';
import './GridCell.css';

function GridCell() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`grid-cell ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      
    </div>
  );
}

export default GridCell;