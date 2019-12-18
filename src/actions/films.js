import axios from 'axios';

export function getFilms(searchQuery) {
  const baseUrl = 'http:\/\/reactjs-cdp.herokuapp.com/';
  const moviesUrl = baseUrl + 'movies';
  return {
  	type: 'GET_FILMS',
    payload: axios.get(`${moviesUrl}?${searchQuery}`)
  };
};

export function updateSearchBy(searchBy) {
  return {
  	type: 'UPDATE_SEARCH_BY',
  	payload: searchBy
  }
};

export function updateSortBy(sortBy) {
  return {
    type: 'UPDATE_SORT_BY',
    payload: sortBy
  }
};

export function updateSortDirection(sortDirection) {
  return {
    type: 'UPDATE_SORT_DIRECTION',
    payload: sortDirection
  }
};

export function setSearchProps(searchBy, searchValue) {
  return {
    type: 'SET_SEARCH_PROPS',
    payload: {
      searchBy,
      searchValue
    }
  };
};

export default {
  getFilms,
  updateSearchBy
};
