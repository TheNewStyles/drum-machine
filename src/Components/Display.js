import React, { Component } from 'react'

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
