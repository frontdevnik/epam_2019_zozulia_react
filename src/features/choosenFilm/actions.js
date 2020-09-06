import createActions from "../../helpers/createActions";

import {
  SHOW_ACTOR,
  CHOOSE_FILM,
  ERROR_MOVIE,
  REMOVE_MOVIE_REDUCER,
} from "./constants";

export const showActorInfo = createActions(SHOW_ACTOR);

const getMovie = createActions(CHOOSE_FILM);

const errorMovie = createActions(ERROR_MOVIE);

export const fetchingMovie = (id) => async (dispatch, _, api) => {
  try {
    const { data } = await api(`movies/${id}`);
    dispatch(getMovie(data));
  } catch (error) {
    dispatch(errorMovie(error));
  }
};

export const removeMovieReducer = createActions(REMOVE_MOVIE_REDUCER);
