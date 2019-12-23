import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieHeader.css';

class MovieHeader extends Component {
  constructor(props) {
  	super(props);
  	this.movie = this.props.movie;
  	this.relatedFilms = this.props.relatedFilms || []
  }

  render() {
    return (
      <div className="MovieHeader">
        <img src="images/netflix-logo.png" className="header-logo" alt="Logo" onClick={this.handleLogoClick} />
        <img className="movie-poster" src={this.movie.imageUrl} />
        <div className="movie-description-container">
          <div className="movie-title-container">
        	<h2 className="movie-title">{this.movie.title}</h2>
        	<div className="movie-rating">{this.movie.rating}</div>
          </div>
          <div className="movie-tagline">{this.movie.tagline}</div>
          <div className="movie-data">
          	<div className="movie-year"><span>{this.movie.year}</span> year</div>
          	<div className="movie-runtime"><span>{this.movie.runtime}</span> min</div>
          </div>
          <div className="movie-description">{this.movie.description}</div>
        </div>
      </div>
    )
  }

  shouldComponentUpdate = (nextProps) => {
  	if (this.movie !== nextProps.movie) {
  	  this.movie = nextProps.movie;
  	}
  	return true;
  }

  handleLogoClick = () => {
    this.props.handleLogoClick();
  }
}

// export default MovieHeader;


const mapStateToProps = (state) => ({
  data: state
});

export default connect(
  mapStateToProps
)(MovieHeader);
