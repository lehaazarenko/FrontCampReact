import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchResults.css';

import SearchResultsList from './../SearchResultsList/SearchResultsList.js';
import ToggleButton from './../ToggleButton/ToggleButton.js';

import { updateSortBy } from './../../actions/films';

class SearchResults extends Component {

  render() {
    return (
      <div className="SearchResults">
        <div className="search-results-data-wrapper">
          <div className="search-results-data">
              <span className="search-results-count">Movies found: {this.props.total}</span>
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateSortBy: (sortBy) => {
      dispatch(updateSortBy(sortBy))
    }
  }
};

const mapStateToProps = (state) => ({
  data: state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
