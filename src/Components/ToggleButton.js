import React, { Component } from 'react'

import '../Styles/ToggleButton.css';

export class ToggleButton extends Component {
  render() {
    return (
      <div id="slider-flex">
        <label htmlFor="slider">{this.props.title}</label>
        <div className="slider-container">
          <label className="switch">
            <input type="checkbox" onClick={this.props.handleClick}/>
            <span className="slider"></span>
          </label>
        </div>
      </div>
      
    )
  }
}

export default ToggleButton
