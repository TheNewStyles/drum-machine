import React, { Component } from 'react'

export class VolumeSlider extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <input type="range" min="0" max="100" step="1" defaultValue="1" />
      </div>
    )
  }
}

export default VolumeSlider
