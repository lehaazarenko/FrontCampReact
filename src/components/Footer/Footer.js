import React, { Component } from 'react';
import './Footer.css';

// import SearchResultsList from './../SearchResultsList/SearchResultsList.js';
// import ToggleButton from './../ToggleButton/ToggleButton.js';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.results = props.results;
  }

  render() {
    return (
      <div className="Footer">
        <img src="images/netflix-logo.png" className="footer-logo" alt="Logo" />
      </div>
    )
  }
}

export default Footer;
