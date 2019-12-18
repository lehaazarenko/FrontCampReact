import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchResultsList.css';

import SearchResultsItem from './../SearchResultsItem/SearchResultsItem.js';

class SearchResultsList extends Component {
  constructor(props) {
    super(props);
    this.results = props.results;
    this.searchResults = [];
    this.total = 0;
  }

  shouldComponentUpdate = (nextProps) => {
    if (nextProps !== this.props) {
      this.searchResults = nextProps.data.films.films;
      this.total = nextProps.data.films.total;
    }
    return true;
  };

  render() {
    return (
      <div className="SearchResultsList">
        {
          this.total ? 
            <div className="search-results-list-wrapper">
              {this.searchResults.map(item => 
                <SearchResultsItem item={item} key={item.id} />
              )}
            </div>
            : <div className="no-results-found">No films found</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state
});

export default connect(
  mapStateToProps
)(SearchResultsList);

// export default SearchResultsList;
