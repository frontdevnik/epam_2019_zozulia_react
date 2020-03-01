import { CHOOSE_FILM, CHANGE_SELECTED_MOVIE_LIKES, CHANGE_SELECTED_MOVIE_STARS } from './types';
import { chooseFilm, changeSelectedMovieLikes, changeSelectedMovieStars } from './helpers';

const initialState = {
  choosenFilm: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHOOSE_FILM:
      return chooseFilm(action.payload);
    case CHANGE_SELECTED_MOVIE_LIKES:
      return changeSelectedMovieLikes(state, action.payload);
    case CHANGE_SELECTED_MOVIE_STARS:
      return changeSelectedMovieStars(state, action.payload);
    default:
      return state;
  }
}
