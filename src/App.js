import React, {Component} from 'react';
import './App.css';
import GameBoard from './Components/GameBoard/GameBoard';
import DiffButton from './Components/Button/DiffButton'; 

class App extends Component{
  render(){
    return (
      <div className="App">
        <GameBoard></GameBoard>
      </div>
    );
  }
}

export default App;
