import React, { Component } from 'react';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row1: ['','',''],
      row2: ['','',''],
      row3: ['','','']
      }
  }
  render() { 
    const style = {
      height: '100px',
      border: "1px solid black",
      display: 'inline',
      float: 'left',
      width: '33%'
    }
    return ( 
      <div style={{width: '50%', justifySelf: 'center'}}>
        {this.state.row1.map(e => <div style={style}>{e}</div>)}
        {this.state.row2.map(e => <div style={style}>{e}</div>)}
        {this.state.row3.map(e => <div style={style}>{e}</div>)}
      </div>
     );
  }
}
 
export default Board;