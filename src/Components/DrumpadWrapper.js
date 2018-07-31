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
    // state = {
    //   //some state passed from 
    // }

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
        <Drumpad id="Q" source={this.qSound} onClick={this.props.handleClick}/>
        <Drumpad id="W" source={bassDrum2} onClick={this.props.handleClick}/>
        <Drumpad id="E" source={bassDrum3} onClick={this.props.handleClick}/>
        <Drumpad id="A" source={bassDrum4} onClick={this.props.handleClick}/>
        <Drumpad id="S" source={synthDrum1} onClick={this.props.handleClick}/>
        <Drumpad id="D" source={buzzer} onClick={this.props.handleClick}/>
        <Drumpad id="Z" source={symbol} onClick={this.props.handleClick}/>
        <Drumpad id="X" source={soundEffect} onClick={this.props.handleClick}/>
        <Drumpad id="C" source={zoomOut} onClick={this.props.handleClick}/>
      </div>
    )
  }
}

export default DrumpadWrapper
