import React, { Component } from 'react';

import '../Styles/App.css';

import { Display } from './Display';
import { ToggleButton } from './ToggleButton';
import { VolumeSlider } from './VolumeSlider';
import { DrumpadWrapper } from './DrumpadWrapper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: "",
      on: false
    };

    this.statics = {
      keyToSound: new Map([
        ["q","bass drum 1"],
        ["w","bass drum 2"],
        ["e","bass drum 3"],
        ["a","bass drum 4"],
        ["s","bass drum 5"],
        ["d","buzzer"],
        ["z","symbol"],
        ["x","synth drum"],
        ["c","zoom out"]
      ])
    }

    this.handleDrumClick = this.handleDrumClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handlePowerButtonClick = this.handlePowerButtonClick.bind(this);
  }  

  componentDidMount() {	   
    window.addEventListener("keyup", this.handleKeyPress);	 
  } 	  

  componentWillUnmount() {	   
    window.removeEventListener("keyup", this.handleKeyPress);
  }

  handleKeyPress(e) {    
    if (this.isInKeyEventRange(e)) {
      this.setState({
        displayText: this.statics.keyToSound.get(e.key).toUpperCase() 
      })
      this.playSound(e);
    }    
  }

  isInKeyEventRange(e) {
    const keyEvents = ["q","w","e","a","s","d","z","x","c"];
    return e instanceof KeyboardEvent && keyEvents.indexOf(e.key) > -1 && this.state.on;
  }

  getDisplayText() {
    return this.state.displayText;
  }

  handleDrumClick(e) {
    e.preventDefault();
    if (this.state.on) {
      this.setState({
        displayText: this.statics.keyToSound.get(e.target.id.toLowerCase()).toUpperCase() 
      })
      this.playSound(e);
    }
  }

  handlePowerButtonClick() {
    this.setState({
      on: this.state.on === false ? true : false,
      displayText: ""
    });
  }

  playSound(e) {
    if (e instanceof KeyboardEvent) {
      const audioElement = document.getElementById(e.key.toUpperCase()).firstElementChild;
      audioElement.play();      
    } else {
      e.target.firstElementChild.play();
    }    
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <DrumpadWrapper handleClick={this.handleDrumClick} />          
          <div id="controls">
            <Display id="display" displayText={this.getDisplayText()} />
            <ToggleButton title="Power" handleClick={this.handlePowerButtonClick} />
            <ToggleButton title="Bank" />
            <VolumeSlider />
          </div>          
        </div>
      </div>
    );
  }
}

export default App;
