const initialState = {
  searchBy: 'title',
  searchByOptions: [
    {
      title: 'Title',
      value: 'title'
    }, {
      title: 'Gengre',
      value: 'genres'
    }
  ],
  searchValue: '',
  sortBy: 'vote_average',
  sortDirection: 'desc',
  films: [],
  loading: false,
  defaultSortBy: 'vote_average',
  sortByOptions: [
    {
      title: 'Release date',
      value: 'release_date'
    }, {
      title: 'Rating',
      value: 'vote_average'
    }
  ],
  defaultSortDirection: 'desc',
  sortDirectionOptions: ['desc', 'asc'],
  total: 0
};

export default function films(state = initialState, action) {

  switch (action.type) {
    case 'GET_FILMS_PENDING':
      return {
        ...state,
        loading: true
      };

    case 'GET_FILMS_FULFILLED':
      const searchData = action.payload.data; 
      return {
        ...state,
        films: searchData.data,
        loading: false,
        total: searchData.total
      }

    case 'GET_FILMS_REJECTED':
      return {
        ...state,
        loading: false,
        total: 0,
        error: action.payload.message
      }

    case 'UPDATE_SEARCH_BY':
      return {
        ...state,
        searchBy: action.payload
      }

    case 'UPDATE_SORT_BY':
      return {
        ...state,
        sortBy: action.payload
      }

    case 'UPDATE_SORT_DIRECTION':
      return {
        ...state,
        sortDirection: action.payload
      }

    case 'SET_SEARCH_PROPS':
      return {
        ...state,
        searchBy: action.payload.searchBy,
        searchValue: action.payload.searchValue
      }

    default:
      return state;
  }
}
