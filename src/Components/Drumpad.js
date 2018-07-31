import React, { Component } from 'react'

import '../Styles/Drumpad.css';

export class Drumpad extends Component {
  render() {
    return (
      <div id={this.props.id} onClick={this.props.onClick} className="drumpad">
        {this.props.id}
        <audio src={this.props.source} className="clip"></audio>
      </div>
    )
  }
}

export default Drumpad
