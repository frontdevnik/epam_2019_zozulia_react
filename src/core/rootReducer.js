import { combineReducers } from 'redux';
import choosenFilmReducer from '../components/chosenFilm/choosenFilmReducer';
import moviesReducer from '../components/movies/moviesReducer';

export default combineReducers({
  moviesReducer,
  choosenFilmReducer,
});
