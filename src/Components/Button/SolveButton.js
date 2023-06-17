import React, {useState} from "react";
import './SolveButton.css';

function SolveButton(){
    const [selectedButton, setSelectedButton] = useState(null);

    const handleCellClick = (event) => {
        const clickedButton = event.target.getAttribute('data-value');
        setSelectedButton(clickedButton);
    };

    return(
        <div className = "abuttonContainer"> 
            <button className={'SolveButtonStyle'} onClick={handleCellClick}>
                Solve
            </button>
            <button className={'ResetButtonStyle'} onClick={handleCellClick}> 
                Reset
            </button>
        </div>
    );
}

export default SolveButton;