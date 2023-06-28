import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
  state = {
    activeRow: null,
    activeColumn: null,
    selectedCells: [],
  };

  toggleCellSelection = (row, col) => {
    const cellId = `${row}-${col}`;
    this.setState((prevState) => {
      const selectedCells = [...prevState.selectedCells];
      const index = selectedCells.indexOf(cellId);
      if (index !== -1) {
        selectedCells.splice(index, 1);
      } else {
        selectedCells.push(cellId);
      }
      return { selectedCells };
    });
  };

  isCellSelected = (row, col) => {
    const cellId = `${row}-${col}`;
    return this.state.selectedCells.includes(cellId);
  };

  
  toggleActiveColumn = (rIndex, cIndex) => {
    if (cIndex === this.state.activeColumn) {
      this.setState({
        activeRow: null,
        activeColumn: null,
      });
    } else {
      this.setState({
        activeRow: rIndex,
        activeColumn: cIndex,
      });
    }
  };
isBoxHighlighted = (rIndex, cIndex) => {
    const activeRow = this.state.activeRow;
    const activeColumn = this.state.activeColumn;

    if (activeRow === null || activeColumn === null) {
      return false;
    }

    const activeBoxRow = Math.floor(activeRow / 3);
    const activeBoxCol = Math.floor(activeColumn / 3);
    const cellBoxRow = Math.floor(rIndex / 3);
    const cellBoxCol = Math.floor(cIndex / 3);

    return activeBoxRow === cellBoxRow && activeBoxCol === cellBoxCol;
  };


  render() {
    return (
      <table className="board-grid">
        <tbody className="tableHover">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => (
            <tr key={rIndex}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => (
                <td
                
                  key={rIndex + cIndex}
                  className={
                    (rIndex < 3 && cIndex < 9) ||
                    (rIndex >= 3 && rIndex < 6 && cIndex >= 9 && cIndex < 18) ||
                    (rIndex >= 6 && rIndex < 9 && cIndex >= 18)
                      ? 'green'
                      : ''
                  }
                  
                  style={{
                    
                    border:
                      (row === 0 && (col < 3 || col > 5)) ||
                      (row === 1 && (col < 3 || col > 5)) ||
                      (row === 2 && (col < 3 || col > 5)) ||
                      
                      (row === 3 && col >= 3 && col < 6) ||
                      (row === 4 && col >= 3 && col < 6) ||
                      (row === 5 && col >= 3 && col < 6) ||


                      (row === 6 && (col < 3 || col > 5)) ||
                      (row === 7 && (col < 3 || col > 5)) ||
                      (row === 8 && (col < 3 || col > 5))
                        ? '3px solid gray'
                        : '',
                    
                    background:
                      this.state.activeRow === rIndex ||
                      this.state.activeColumn === cIndex ||
                      this.isBoxHighlighted(rIndex, cIndex)
                        ? 'green'
                        : '',
                        
                  }}
                  onClick={() => this.toggleActiveColumn(rIndex, cIndex)}
                >
                  <input className="cellInput"></input>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Grid;