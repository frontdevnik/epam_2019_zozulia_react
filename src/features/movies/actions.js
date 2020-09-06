import createActions from "../../helpers/createActions";

import {
  CHOOSE_FILM,
  FETCHING_MOVIES,
  ERROR_MOVIES,
  LOADING_MOVIES,
  GET_ACTORS,
  ACTORS_ERROR,
  REMOVE_MOVIE_REDUCER,
  SET_RATING_STARS,
  CHANGE_SELECTED_MOVIE_STARS,
  CHANGE_LIKES,
  CHANGE_SELECTED_MOVIE_LIKES,
} from "./constants";

export const showFullMovieInfo = createActions(CHOOSE_FILM);

const getMovies = createActions(FETCHING_MOVIES);

const getMoviesError = createActions(ERROR_MOVIES);

export const startLoadingMovies = createActions(LOADING_MOVIES);

export const fetchMovies = () => async (dispatch, _, api) => {
  try {
    const data = await api("movies");
    dispatch(getMovies(data));
  } catch (error) {
    dispatch(getMoviesError(error));
  }
};

const getActors = createActions(GET_ACTORS);

const getActorsError = createActions(ACTORS_ERROR);

export const fetchActors = () => async (dispatch, _, api) => {
  try {
    const { data } = await api("actors");
    dispatch(getActors(data));
  } catch (error) {
    dispatch(getActorsError(error));
  }
};

const setStars = createActions(SET_RATING_STARS);

export const setRatingStars = (payload) => async (dispatch, _, api) => {
  await api(`movies/${payload.id}`, "put", payload);
  dispatch(setStars(payload));
};

const changeMovieStars = createActions(CHANGE_SELECTED_MOVIE_STARS);

export const changeSelectedMovieStars = (payload) => async (
  dispatch,
  _,
  api
) => {
  await api(`movies/${payload.id}`, "put", payload);
  dispatch(changeMovieStars(payload));
};

export const changeLikes = createActions(CHANGE_LIKES);

const changeMovieLikes = createActions(CHANGE_SELECTED_MOVIE_LIKES);

export const changeSelectedMovieLikes = (payload) => async (
  dispatch,
  _,
  api
) => {
  await api(`movies/${payload.id}`, "put", payload);
  dispatch(changeMovieLikes(payload));
};

export const removeMovieReducer = createActions(REMOVE_MOVIE_REDUCER);
