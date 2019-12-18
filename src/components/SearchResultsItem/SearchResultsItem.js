import React, { Component } from 'react';
import './SearchResultsItem.css';

class SearchResultsItem extends Component {
  constructor(props) {
    super(props);
    this.item = props.item;
  }

  render() {
    return (
      <div className="SearchResultsItem">
        <img src={this.item.poster_path} alt={`${this.item.title} poster`}/>
        <div className="MovieDescription">
          <div className="movie-main-data">
            <span className="movie-title">{this.item.title}</span>
            <span className="movie-release-year">{new Date(this.item.release_date).getFullYear()}</span>
          </div>
          <span className="movie-gengre">{this.item.gengre}</span>
        </div>
      </div>
    )
  }
}

export default SearchResultsItem;
