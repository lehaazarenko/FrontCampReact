const initialState = {
  relatedFilms: [],
  loading: false
};

export default function movie(state = initialState, action) {
  switch(action.type) {
    case 'GET_MOVIE_PENDING':
      return {
        ...state,
        loading: true
      }

    case 'GET_MOVIE_FULFILLED':
      const movieData = action.payload.data; 
      return {
        ...state,
        title: movieData.title,
        rating: movieData.vote_average,
        imageUrl: movieData.poster_path,
        genres: movieData.genres,
        description: movieData.overview,
        runtime: movieData.runtime,
        year: new Date(movieData.release_date).getFullYear(),
        tagline: movieData.tagline,
        loading: false
      }

    case 'GET_MOVIE_REJECTED': 
      return {
        ...state,
        error: action.payload.message,
        loading: false
      }

    case 'GET_RELATED_FILMS_PENDING':
      return {
        ...state,
        loading: true
      }

    case 'GET_RELATED_FILMS_FULFILLED':
      const relatedFilmsData = action.payload.data.data; 
      return {
        ...state,
        relatedFilms: relatedFilmsData,
        loading: false
      }

    case 'GET_RELATED_FILMS_REJECTED': 
      return {
        ...state,
        error: action.payload.message,
        loading: false
      }

    default: 
      return state;
  }


}
