import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import choosenFilmReducer from "./features/choosenFilm/reducers";
import moviesReducer from "./features/movies/reducers";
import loginReducer from "./features/login/reducers";
import actorReducer from "./features/actor/reducers";
import actorsReducer from "./features/actors/reducers";

export default combineReducers({
  moviesReducer,
  choosenFilmReducer,
  loginReducer,
  actorReducer,
  actorsReducer,
  form: formReducer,
});
