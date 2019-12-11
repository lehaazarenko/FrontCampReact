import React, { Component } from 'react';
import './SearchSection.css';

import ToggleButton from './../ToggleButton/ToggleButton.js';
import ErrorBoundary from './../ErrorBoundary/ErrorBoundary.js';

class SearchSection extends Component {
  render() {
    const toggleOptions = ['title', 'gengre'];
    return(
      <div className="SearchSection">
        <label>Find your movie</label>
        <div className="SearchField">
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="SearchOptions">
          <span className="toggle-options-caption">Search by</span>
          <ErrorBoundary>
            <ToggleButton toggleOptions={toggleOptions} />
          </ErrorBoundary>
        </div>
      </div>
    )
  }
}

export default SearchSection;
