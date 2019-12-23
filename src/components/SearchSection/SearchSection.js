import React, { Component } from 'react';
import './SearchSection.css';
import { connect } from 'react-redux';

import ToggleButton from './../ToggleButton/ToggleButton.js';

import { getFilms, updateSearchBy, setSearchProps } from './../../actions/films';

class SearchSection extends Component {

  render() {
    return(
      <div className="SearchSection">
        <label>Find your movie</label>
        <div className="SearchField">
          <input type="text" ref="searchInput" defaultValue={this.props.searchValue} />
          <button onClick={this.handleSearchRun}>Search</button>
        </div>
        <div className="SearchOptions">
          <span className="toggle-options-caption">Search by</span>
          <ToggleButton toggleOptions={this.props.searchByOptions}
                        selectedOption={this.props.searchBy}
                        onToggleOptionChange={this.props.onSearchByChange} />
        </div>
      </div>
    )
  }

  handleInputChange = (event) => {
    this.props.searchValue = event.target.value;
  };

  handleSearchRun = (e) => {
    const searchValue = this.refs.searchInput.value;
    this.props.handleSearchRun(searchValue);
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFilms: (searchQuery) => {
      dispatch(getFilms(searchQuery))
    },
    updateSearchBy: (searchBy) => {
      dispatch(updateSearchBy(searchBy))
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
)(SearchSection);
