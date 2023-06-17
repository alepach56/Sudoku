import React, { useState } from "react"
import './diffButton.css';

function DiffButton(){
    
    const [selectedButton, setSelectedButton] = useState(null);

    const handleCellClick = (event) => {
        const clickedButton = event.target.getAttribute('data-value');
        setSelectedButton(clickedButton);
    };

    return (
    <div className="diffButtonContainer">
        <button
            className={`diffButtonStyle ${selectedButton === 'Easy' ? 'clicked' : ''}`}
            onClick={handleCellClick}
            data-value="Easy"> Easy
        </button>
        <button
            className={`diffButtonStyle ${selectedButton === 'Medium' ? 'clicked' : ''}`}
            onClick={handleCellClick}
            data-value="Medium" > Medium
        </button>
        <button
            className={`diffButtonStyle ${selectedButton === 'Hard' ? 'clicked' : ''}`}
            onClick={handleCellClick}
            data-value="Hard" > Hard
        </button>
    </div>
    );
}

export default DiffButton;

