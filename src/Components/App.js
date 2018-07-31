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
      displayText: ""
    };

    this.setDisplayText = this.setDisplayText.bind(this);
  }

  getDisplayText() {
    return this.state.displayText;
  }

  setDisplayText(e) {
    e.preventDefault();
    this.setState({
      displayText: e.target.id
    })
    this.playSound(e);
  }

  playSound(e) {
    e.target.firstElementChild.play();
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <DrumpadWrapper handleClick={this.setDisplayText} />
          <Display id="display" displayText={this.getDisplayText()} />
          <ToggleButton title="Power" />
          <ToggleButton title="Bank" />
          <VolumeSlider />
        </div>
      </div>
    );
  }
}

export default App;
