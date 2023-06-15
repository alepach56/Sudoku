import React from "react"
import './diffButton.css';

function DiffButton(){
    

    return (
        <div className = "diffButtonContainer">
            <button className = "diffButtonStyle"> Easy </button>
            <button className = "diffButtonStyle"> Medium </button>
            <button className = "diffButtonStyle"> Hard </button>
        </div>
    );
}

export default DiffButton;

