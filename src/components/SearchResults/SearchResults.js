import React, { Component } from 'react';
import './SearchResults.css';

import SearchResultsList from './../SearchResultsList/SearchResultsList.js';
import ToggleButton from './../ToggleButton/ToggleButton.js';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.results = props.results;
  }

  render() {
    const searchResultsCount = 7;
    const toggleOptions = ['release date', 'rating'];
    return (
      <div className="SearchResults">
        <div className="search-results-data-wrapper">
          <div className="search-results-data">
              <span className="search-results-count">{searchResultsCount} movies found</span>
              <ToggleButton toggleOptions={toggleOptions} />
          </div>
        </div>
        <SearchResultsList results={this.results} />
      </div>
    )
  }
}

export default SearchResults;
