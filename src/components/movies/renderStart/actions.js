import { SET_RATING_STARS, CHANGE_SELECTED_MOVIE_STARS } from './types';

export const setRatingStars = (payload) => ({
  type: SET_RATING_STARS,
  payload,
});

export const changeSelectedMovieStars = (payload) => ({
  type: CHANGE_SELECTED_MOVIE_STARS,
  payload,
});
