import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null)
    }
  }

  handleClick (e) {
    console.log(e.target);
  }

  render() {

   const box = this.state.board.map(
    (box,i) =>
    <div key={i} 
    className="box" 
    onClick={(e) => this.handleClick(e)}>
    {box}
    </div>)

    return (
      <div className="container">
      <h1>Tic Tac Toe</h1>
        <div className="board">
          {box}
        </div>
      </div>
    );
  }
}

export default App;
