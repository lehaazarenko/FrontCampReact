import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ToggleButton.css';

class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.toggleOptions = props.toggleOptions;
    this.selectedOption = props.selectedOption;
  }

  shouldComponentUpdate = (nextProps) => {
    if (nextProps !== this.props) {
      this.selectedOption = nextProps.selectedOption;
    }
    return true;
  };

  render = () => {
    return (
      <div className="ToggleButton">
        {
          this.props.toggleOptions.map((toggleOption, index) => 
            <span className={'toggle-option ' + (toggleOption.value === this.selectedOption ? 'active' : '')}
                  key={index}
                  onClick={(e) => this.handleToggleOptionClick(e, toggleOption.value)}>{toggleOption.title}</span>
          )
        }
      </div>
    )
  }

  handleToggleOptionClick = (e, newSelectedOption) => {
    this.props.onToggleOptionChange(newSelectedOption);
  }
}

const mapStateToProps = (state) => ({
  data: state
});

export default connect(
  mapStateToProps
)(ToggleButton);
