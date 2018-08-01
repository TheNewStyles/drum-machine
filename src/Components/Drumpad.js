import React, { Component } from 'react'

import '../Styles/Drumpad.css';

export class Drumpad extends Component {
  constructor(props) {
    super(props);      
    this.state = ({
      color1: this.props.color1,
      color2: this.props.color2
    })
  }  
    
  render() {
    let divStyle = {
      background: "linear-gradient(55deg," + this.state.color1 + "," + this.state.color2 + ")",
      backgroundSize: "100% 100%",
      animation: "AnimateBackground 5s ease infinite"
    };

    return (
      <div id={this.props.id} style={divStyle} onClick={this.props.onClick} className="drumpad">
        {this.props.id}
        <audio src={this.props.source} className="clip"></audio>
      </div>
    )
  }
}

export default Drumpad
