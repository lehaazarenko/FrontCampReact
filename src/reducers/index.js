import { combineReducers } from 'redux';

import films from './films';
import movie from './movie';
// import filterTracks from './filterTracks';

export default combineReducers({
  films,
  movie
  // playlists,
  // filterTracks
});
