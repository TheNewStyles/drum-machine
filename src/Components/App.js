import React, { Component } from 'react';

import '../Styles/App.css';

import { Drumpad } from './Drumpad';
import { Display } from './Display';
import { ToggleButton } from './ToggleButton';
import { VolumeSlider } from './VolumeSlider';

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
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <div className="drumpads-wrapper">
            <Drumpad id="Q" onClick={this.setDisplayText}/>
            <Drumpad id="W" onClick={this.setDisplayText} />
            <Drumpad id="E" onClick={this.setDisplayText} />
            <Drumpad id="A" onClick={this.setDisplayText} />
            <Drumpad id="S" onClick={this.setDisplayText} />
            <Drumpad id="D" onClick={this.setDisplayText}/>
            <Drumpad id="Z" onClick={this.setDisplayText}/>
            <Drumpad id="X" onClick={this.setDisplayText}/>
            <Drumpad id="C" onClick={this.setDisplayText}/>
          </div>
          <Display id="display" displayText={this.getDisplayText()}/>
          <ToggleButton title="Power" />
          <ToggleButton title="Bank" />
          <VolumeSlider />
        </div>
      </div>
    );
  }
}

export default App;
