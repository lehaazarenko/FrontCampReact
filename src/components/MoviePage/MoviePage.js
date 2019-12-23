import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchResultsList from './../SearchResultsList/SearchResultsList.js';
import MovieHeader from './../MovieHeader/MovieHeader.js';

import { getRelatedFilms, getMovie } from './../../actions/films';

class MoviePage extends Component {
  // Need to implement setState later
  constructor(props) {
    super(props);
    this.movie = {};
    this.loadedMovie = false;
    this.loadedRelatedFilms = false;

    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    return (
      <div className="MoviePage">
        <MovieHeader movie={this.movie} handleLogoClick={this.handleLogoClick} />
        <SearchResultsList results={this.relatedFilms} isRelatedFilms={true} />
      </div>
    )
  }

  shouldComponentUpdate = (nextProps) => {
    if (this.props !== nextProps) {
      this.movie = nextProps.data.movie;

      if (nextProps.data.movie.title) {
        this.loadedMovie = true;
      }

      if (!nextProps.data.movie.relatedFilms.length && this.loadedMovie && !nextProps.data.movie.loading) {
        const searchQuery = 'filter=' + this.movie.genres.join(',');
        this.props.getRelatedFilms(searchQuery);
      }
    }
    return true;
  }

  handleLogoClick = () => {
    this.props.history.push('/search');
  };

  onResultsItemClick = (itemId) => {
    this.props.history.push('/search/' + itemId);
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedFilms: (searchQuery) => {
      dispatch(getRelatedFilms(searchQuery))
    },
    getMovie: (id) => {
      dispatch(getMovie(id))
    }
  }
};

const mapStateToProps = (state) => ({
  data: state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage);
