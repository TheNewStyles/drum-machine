import React, { Component } from 'react'

import '../Styles/VolumeSlider.css';

export class VolumeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 100
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const volume = document.getElementById("volume").value / 100;
    const drums = document.getElementsByClassName("clip");
    for (let drum of drums) {
      drum.volume = volume;
    }

    this.setState({
      volume: Math.floor(volume * 100)
    })
  }

  render() {
    return (
      <div id="volume-container">        
        <label htmlFor="volume" ><span>Volume: {this.state.volume}</span></label>
        <input id="volume" type="range" min="0" max="100" step="1" defaultValue="100" onChange={this.handleChange}/>
      </div>
    )
  }
}

export default VolumeSlider
