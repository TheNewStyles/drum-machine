import React, { Component } from 'react'

export class VolumeSlider extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const drums = document.getElementsByClassName("drumpad");
    drums.clips = 0.1 ? 0.99 : 0.1;
  }

  render() {
    return (
      <div>
        <input type="range" min="0" max="100" step="1" defaultValue="1" onChange={this.handleChange}/>
      </div>
    )
  }
}

export default VolumeSlider
