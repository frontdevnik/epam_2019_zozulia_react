import { CHANGE_LIKES, CHANGE_SELECTED_MOVIE_LIKES } from './types';

export const changeLikes = (payload) => ({
  type: CHANGE_LIKES,
  payload,
});

export const changeSelectedMovieLikes = (payload) => ({
  type: CHANGE_SELECTED_MOVIE_LIKES,
  payload,
});
