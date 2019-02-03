import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: 'X',
      winner: null
    }
  }
  endGame() {
    this.setState({
      board: Array(9).fill(null)
    })
  }
  checkWinner() {
   let winL = 
    [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"],
    ]

    for (let i = 0; i < winL.length; i++) {
      const [a,b,c] = winL[i];

      if((this.state.board[a])) {
        
        if(this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
          this.setState({
            winner: this.state.player
          })
        
      }
      }
    }
    if(this.state.winner) {
      this.endGame()
    }
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
