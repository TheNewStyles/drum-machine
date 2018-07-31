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
    const keyEvents = ["q","w","e","a","s","d","z","x","c"];
    if (e instanceof KeyboardEvent && keyEvents.indexOf(e.key) > -1 && this.state.on) {
      this.setState({
        displayText: e.key.toUpperCase()
      })
      this.playSound(e);
    }    
  }

  getDisplayText() {
    return this.state.displayText;
  }

  handleDrumClick(e) {
    e.preventDefault();
    if (this.state.on) {
      this.setState({
        displayText: e.target.id
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
