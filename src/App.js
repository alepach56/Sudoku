import React, {Component} from 'react';
import './App.css';
import GameBoard from './Components/GameBoard';
import Input from './Components/Input';

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1> Sudoku With Solver</h1>
          <Input></Input>
          <GameBoard></GameBoard>
          
        
        
      </div>
    );
  }
}

export default App;
