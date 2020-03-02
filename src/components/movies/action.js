import { CHOOSE_FILM } from './types';

export const showFullMovieInfo = (payload) => ({
  type: CHOOSE_FILM,
  payload,
});
