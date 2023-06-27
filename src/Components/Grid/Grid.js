import './Grid.css';
import React, {Component, useState} from 'react';

class Grid extends Component{
    state = {
        isActive: null
    };
    toggleActive = rIndex => {
        if (rIndex === this.setState.isActive){
            this.setState({
                isActive: null
            });
        }
        else{
            this.setState({
                isActive: rIndex
            });
        }
    };

    render(){
        return(
            <table className="board-grid">
                <tbody className = "tableHover">
                {
                    [0,1,2,3,4,5,6,7,8].map((row, rIndex) => {
                        return <tr 
                            style = {
                                this.state.isActive === rIndex
                                ? {backgrpound : 'red'}
                                : {background: 'orange'}
                            }
                            key = {rIndex}
                            onClick = {() => this.toggleActive(rIndex)} >
                            {[0,1,2,3,4,5,6,7,8].map((col,cIndex) => {
                                return <td 
                                style = {
                                this.state.isActive === cIndex
                                ? {backgrpound : 'blue'}
                                : {background: 'green'}
                            }
                                key={rIndex+cIndex}>
                                    <input className = "cellInput"></input>
                            </td>
                            })}   
                        </tr>
                    })
                }
                
                </tbody>
            </table>
    );

    }
    // const [clicked, setClicked] = useState(false);

    
}
export default Grid;