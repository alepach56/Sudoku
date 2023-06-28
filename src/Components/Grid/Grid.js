import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
  state = {
    activeRow: null,
    activeColumn: null,
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
                      ? 'gray'
                      : ''
                  }
                  style={{
                    backgroundColor:
                      this.state.activeRow === rIndex ||
                      this.state.activeColumn === cIndex ||
                      this.isBoxHighlighted(rIndex, cIndex)
                        ? 'gray'
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