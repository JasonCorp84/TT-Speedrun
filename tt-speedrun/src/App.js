import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: 'X'
    }
  }

  checkWinner() {
   let winL = 
    [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
    ]
  }

  handleClick (i) {
    if(this.state.board[i] === null) {
    let newBoard = this.state.board;
    newBoard[i] = this.state.player;
    let newPlayer = this.state.player === 'X' ? 'O' : 'X'
    this.setState({
      board: newBoard,
      player: newPlayer
    })
  }
  this.checkWinner()
  }

  render() {

   const box = this.state.board.map(
    (box,i) =>
    <div key={i} 
    className="box" 
    onClick={() => this.handleClick(i)}>
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
