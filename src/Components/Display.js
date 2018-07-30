import React, { Component } from 'react'

import '../Styles/Display.css';

export class Display extends Component {
  render() {
    return (
      <div id={this.props.id}>
        {this.props.displayText}
      </div>
    )
  }
}

export default Display
