import React, { Component } from 'react'

import { Drumpad } from '../Components/Drumpad';

import bassDrum1 from '../Audio/bass-drum-1.wav';
import bassDrum2 from '../Audio/bass-drum-2.mp3';
import bassDrum3 from '../Audio/bass-drum-3.wav';
import bassDrum4 from '../Audio/bass-drum-4.wav';
import synthDrum1 from '../Audio/synth-drum-1.wav';
import buzzer from '../Audio/buzzer.wav';
import symbol from '../Audio/symbol-1.wav';
import soundEffect from '../Audio/sound-effect.wav';
import zoomOut from '../Audio/zoomout.wav';

import '../Styles/DrumpadWrapper.css';

export class DrumpadWrapper extends Component {
  constructor(props) {
    super(props);
    this.qSound = bassDrum1;
    this.wSound = bassDrum2;
    this.eSound = bassDrum3;
    this.aSound = bassDrum4;
    this.sSound = synthDrum1;
    this.zSound = buzzer;
    this.xSound = symbol;
    this.cSound = zoomOut;
  }

  render() {
    return (
      <div className="drumpads-wrapper">
        <Drumpad id="Q" source={this.qSound} color1="var(--off-white-color)" color2="var(--purple-color)" onClick={this.props.handleClick}/>
        <Drumpad id="W" source={bassDrum2} color1="var(--light-blue-color)" color2="var(--purple-color)" onClick={this.props.handleClick}/>
        <Drumpad id="E" source={bassDrum3} color1="var(--off-white-color)" color2="var(--grey-color)" onClick={this.props.handleClick}/>
        <Drumpad id="A" source={bassDrum4} color1="var(--grey-color)" color2="var(--off-white-color)" onClick={this.props.handleClick}/>
        <Drumpad id="S" source={synthDrum1} color1="var(--off-white-color)" color2="var(--light-blue-color)" onClick={this.props.handleClick}/>
        <Drumpad id="D" source={buzzer} color1="var(--black-color)" color2="var(--grey-color)" onClick={this.props.handleClick}/>
        <Drumpad id="Z" source={symbol} color1="var(--off-white-color)" color2="var(--purple-color)" onClick={this.props.handleClick}/>
        <Drumpad id="X" source={soundEffect} color1="var(--off-white-color)" color2="var(--purple-color)" onClick={this.props.handleClick}/>
        <Drumpad id="C" source={zoomOut} color1="var(--off-white-color)" color2="var(--purple-color)" onClick={this.props.handleClick}/>
      </div>
    )
  }
}

export default DrumpadWrapper
