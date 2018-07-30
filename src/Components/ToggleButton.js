import React, { Component } from 'react'

export class ToggleButton extends Component {
  render() {
    return (
      <div>
        <button>{this.props.title}</button>
      </div>
    )
  }
}

export default ToggleButton
