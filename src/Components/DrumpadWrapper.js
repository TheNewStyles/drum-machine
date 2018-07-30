import React, { Component } from 'react'

import { Drumpad } from '../Components/Drumpad';

import '../Styles/DrumpadWrapper.css';

export class DrumpadWrapper extends Component {
  render() {
    return (
      <div className="drumpads-wrapper">
        <Drumpad id="Q" onClick={this.props.handleClick}/>
        <Drumpad id="W" onClick={this.props.handleClick}/>
        <Drumpad id="E" onClick={this.props.handleClick}/>
        <Drumpad id="A" onClick={this.props.handleClick}/>
        <Drumpad id="S" onClick={this.props.handleClick}/>
        <Drumpad id="D" onClick={this.props.handleClick}/>
        <Drumpad id="Z" onClick={this.props.handleClick}/>
        <Drumpad id="X" onClick={this.props.handleClick}/>
        <Drumpad id="C" onClick={this.props.handleClick}/>
      </div>
    )
  }
}

export default DrumpadWrapper
