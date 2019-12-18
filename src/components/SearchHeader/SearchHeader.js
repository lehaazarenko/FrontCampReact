import React, { Component } from 'react';
import './SearchHeader.css';

import SearchSection from './../SearchSection/SearchSection.js';

class SearchHeader extends Component {

  render() {
    return (
      <div className="SearchHeader">
        <img src="images/netflix-logo.png" className="header-logo" alt="Logo" />
        <SearchSection searchBy={this.props.searchBy}
                       searchValue={this.props.searchValue}
                       onSearchByChange={this.props.onSearchByChange}
                       searchByOptions={this.props.searchByOptions}
                       handleSearchRun={this.props.handleSearchRun} />
      </div>
    )
  }
}

export default SearchHeader;
