import React, { Component } from 'react';
import './ToggleButton.css';

class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.toggleOptions = props.toggleOptions;
  }
  render() {
    return (
      <div className="ToggleButton">
        <span className="first-toggle-option">{this.toggleOptions[0]}</span>
        <span className="second-toggle-option">{this.toggleOptions[1]}</span>
      </div>
    )
  }
}

export default ToggleButton;
