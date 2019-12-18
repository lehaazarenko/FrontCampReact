import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchHeader from './../SearchHeader/SearchHeader.js';
import SearchResults from './../SearchResults/SearchResults.js';

import { getFilms, updateSearchBy, updateSortBy, setSearchProps, updateSortDirection } from './../../actions/films';

class SearchPage extends Component {
  // Need to implement setState later
  constructor(props) {
    super(props);
      
    const searchQueryParams = new URLSearchParams(this.props.location.search),
          paramsFromQuery = this.getParamsFromQuery(searchQueryParams);

    this.updateState(paramsFromQuery, this.props.data.films, searchQueryParams.toString());

    if (paramsFromQuery.searchValue && paramsFromQuery.searchBy) {
      this.props.setSearchProps(this.state.searchBy, this.state.searchValue);
      this.props.getFilms(this.state.searchQuery);
    }
  }

  shouldComponentUpdate = (nextProps) => {
    if (this.state.runSearch) {
      this.props.getFilms(this.state.searchQuery);
      this.state.runSearch = false;
    }
    if (nextProps !== this.props) {
      const searchQueryParams = new URLSearchParams(this.props.location.search),
            paramsFromQuery = this.getParamsFromQuery(searchQueryParams);
      this.updateState(paramsFromQuery, nextProps.data.films, searchQueryParams.toString());
    }
    return true;
  };

  render() {
    return (
      <div className="SearchPage">
        <SearchHeader onSearchByChange={this.onSearchByChange}
                      handleSearchRun={this.handleSearchRun}
                      searchBy={this.state.searchBy} 
                      searchValue={this.state.searchValue}
                      searchByOptions={this.state.searchByOptions} />
        <SearchResults onSortByChange={this.onSortByChange}
                       sortBy={this.state.sortBy}
                       sortDirection={this.state.sortDirection}
                       results={this.state.results}
                       sortByOptions={this.state.sortByOptions}
                       total={this.state.total} />
      </div>
    )
  }

  getParamsFromQuery = (searchQueryParams) => {
    return {
      searchBy: searchQueryParams.get('searchBy'),
      searchValue: searchQueryParams.get('search'),
      sortBy: searchQueryParams.get('sortBy'),
      sortDirection: searchQueryParams.get('sortOrder')
    };
  };

  updateState = (paramsFromQuery, newStateProps, searchQuery) => {
    console.log('updateState:', newStateProps.total);
    this.state = {
      searchBy: paramsFromQuery.searchBy || newStateProps.searchBy,
      searchValue: paramsFromQuery.searchValue || newStateProps.searchValue,
      searchByOptions: newStateProps.searchByOptions,
      sortByOptions: newStateProps.sortByOptions,
      searchByChanged: false,
      sortByChanged: false,
      searchQuery: searchQuery,
      sortBy: paramsFromQuery.sortBy || newStateProps.defaultSortBy,
      sortDirection: paramsFromQuery.sortDirection || newStateProps.defaultSortDirection,
      sortDirectionChanged: false,
      results: newStateProps.films || [],
      total: 0 || newStateProps.total,
      runSearch: false,
      sortDirectionOptions: newStateProps.sortDirectionOptions
    }
    console.log('updateState this.state.total:', this.state.total);
  };

  onSearchByChange = (newToggleOption) => {
    if (this.state.searchBy !== newToggleOption) {
      this.state.searchByChanged = true;
      this.state.searchBy = newToggleOption;
      this.props.updateSearchBy(newToggleOption);
    }
  }

  onSortByChange = (newToggleOption) => {
    if (this.state.sortBy !== newToggleOption) {
      this.state.sortByChanged = true;
      this.state.sortBy = newToggleOption;
      this.props.updateSortBy(newToggleOption);
      this.runSearch(this.state.searchValue);
    } else {
      this.state.sortDirection = this.state.sortDirectionOptions.find(option => option !== this.state.sortDirection);
      this.state.sortDirectionChanged = true;
      this.props.updateSortDirection(this.state.sortDirection);
      this.runSearch(this.state.searchValue);
    }
  }

  handleSearchRun = (searchValue) => {
    this.runSearch(searchValue);
  }

  runSearch = (searchValue) => {
    if (searchValue !== this.state.searchValue || this.state.sortByChanged || this.state.sortDirectionChanged) {
      const searchQuery = this.getSearchQuery(searchValue, this.state.searchBy);
      this.state.searchQuery = searchQuery;
      this.state.runSearch = true;
      this.state.sortByChanged = false;
      this.state.sortDirectionChanged = false;
      this.state.searchValue = searchValue;
      this.props.history.push(
        '/search?' + searchQuery
      );
    }
  }

  getSearchQuery = (searchValue, searchBy) => {
    const { sortBy, sortDirection } = this.state,
          searchQueryObject = this.getSearchQueryObject(searchBy, searchValue, sortBy, sortDirection),
          searchQuery = searchQueryObject.toString();
    return searchQuery;
  }

  getSearchQueryObject = (searchBy, searchValue, sortBy, sortDirection) => {
    const searchQueryObject = new URLSearchParams();
    this.setAllSearchQueryProperties(searchQueryObject, searchBy, searchValue, sortBy, sortDirection)
    return searchQueryObject;
  }

  setAllSearchQueryProperties = (searchQueryObject, searchBy, searchValue, sortBy, sortDirection) => {
    searchQueryObject.set('searchBy', searchBy);
    searchQueryObject.set('search', searchValue);
    searchQueryObject.set('sortBy', sortBy);
    searchQueryObject.set('sortOrder', sortDirection);
  }

  setSearchQueryProperty = (searchQueryObject, property) => {
    searchQueryObject.set(Object.keys({property})[0], property);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFilms: (searchQuery) => {
      dispatch(getFilms(searchQuery))
    },
    updateSearchBy: (searchBy) => {
      dispatch(updateSearchBy(searchBy))
    },
    updateSortBy: (sortBy) => {
      dispatch(updateSortBy(sortBy))
    },
    updateSortDirection: (sortDirection) => {
      dispatch(updateSortDirection(sortDirection))
    },
    setSearchProps: (searchBy, searchValue) => {
      dispatch(setSearchProps(searchBy, searchValue))
    }
  }
};

const mapStateToProps = (state) => ({
  data: state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
