import React, { Component } from 'react'

import '../Styles/ToggleButton.css';

export class ToggleButton extends Component {
  render() {
    return (
      <div>
        <label htmlFor="slider">{this.props.title}</label>
        <div className="slider-container">
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>
        </div>
      </div>
      
    )
  }
}

export default ToggleButton
