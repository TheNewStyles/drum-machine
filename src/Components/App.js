import React, { Component } from 'react';

import '../Styles/App.css';
import { Drumpad } from './Drumpad';
import { Display } from './Display';

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
          <Display id="display" displayText={this.getDisplayText()}/>
          <Drumpad id="Q" onClick={this.setDisplayText}/>
          <Drumpad id="W" />
          <Drumpad id="E" />
          <Drumpad id="A" />
          <Drumpad id="S" />
          <Drumpad id="D"/>
          <Drumpad id="Z"/>
          <Drumpad id="X"/>
          <Drumpad id="C"/>
        </div>
      </div>
    );
  }
}

export default App;
