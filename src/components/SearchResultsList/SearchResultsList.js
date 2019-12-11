import React, { Component } from 'react';
import './SearchResultsList.css';

import SearchResultsItem from './../SearchResultsItem/SearchResultsItem.js';

class SearchResultsList extends Component {
  constructor(props) {
    super(props);
    this.results = props.results;
  }
  render() {
    return (
      <div className="SearchResultsList">
        <div className="search-results-list-wrapper">
          {this.results.map(item => 
            <SearchResultsItem item={item} />
          )}
        </div>
      </div>
    )
  }
}

export default SearchResultsList;
