import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchResults.css';

import SearchResultsList from './../SearchResultsList/SearchResultsList.js';
import ToggleButton from './../ToggleButton/ToggleButton.js';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.total = props.total;
  }

  shouldComponentUpdate = (nextProps) => {
    if (nextProps.data.films.total !== this.total) {
      this.total = nextProps.data.films.total;
    }
    return true;
  }

  render() {
    return (
      <div className="SearchResults">
        <div className="search-results-data-wrapper">
          <div className="search-results-data">
              <span className="search-results-count">Movies found: {this.total}</span>
              <ToggleButton toggleOptions={this.props.sortByOptions}
                            selectedOption={this.props.sortBy}
                            onToggleOptionChange={this.props.onSortByChange} />
          </div>
        </div>
        <SearchResultsList results={this.props.results} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state
});

export default connect(
  mapStateToProps
)(SearchResults);
