import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchResultsList.css';

import SearchResultsItem from './../SearchResultsItem/SearchResultsItem.js';

class SearchResultsList extends Component {
  constructor(props) {
    super(props);
    this.searchResults = props.results || [];
    this.relatedGenres = [];
    this.total = 0;
  }

  shouldComponentUpdate = (nextProps) => {
    if (nextProps !== this.props) {
      if (this.props.isRelatedFilms) {
        this.searchResults = nextProps.data.movie.relatedFilms;
        this.relatedGenres = nextProps.data.movie.genres;
        this.total = nextProps.data.movie.relatedFilms.length;
      } else {
        this.searchResults = nextProps.data.films.films;
        this.total = nextProps.data.films.total;
      }
    }
    return true;
  };

  render() {
    return (
      <div className="SearchResultsList">
        {
          this.props.isRelatedFilms ?
            <div className="related-films">Films by genres: {this.relatedGenres.join(', ')}</div>
            : null
        }
        {
          this.total ? 
            <div className="search-results-list-wrapper">
              {this.searchResults.map(item => 
                <SearchResultsItem item={item} key={item.id} onResultsItemClick={this.props.onResultsItemClick} />
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
