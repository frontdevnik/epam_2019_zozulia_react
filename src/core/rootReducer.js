import { combineReducers } from 'redux';
import choosenFilmReducer from '../components/chosenFilm/choosenFilmReducer';
import moviesReducer from '../components/movies/moviesReducer';
import loginReducer from '../components/login/loginReducer';
import actorReducer from '../components/actorInfo/actorInfoReducer';
import actorsReducer from '../components/actors/actorsReducer';

export default combineReducers({
  moviesReducer,
  choosenFilmReducer,
  loginReducer,
  actorReducer,
  actorsReducer,
});
