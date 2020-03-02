import { CHOOSE_FILM, CHANGE_SELECTED_MOVIE_LIKES, CHANGE_SELECTED_MOVIE_STARS } from './types';

const initialState = {
  choosenFilm: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHOOSE_FILM:
      return {
        choosenFilm: action.payload,
      };
    case CHANGE_SELECTED_MOVIE_LIKES:
      if (state.choosenFilm && state.choosenFilm.id === action.payload.id) {
        return {
          choosenFilm: {
            ...state.choosenFilm,
            likes: action.payload.likes,
          },
        };
      }
      return state;
    case CHANGE_SELECTED_MOVIE_STARS:
      if (state.choosenFilm && state.choosenFilm.id === action.payload.id) {
        return {
          choosenFilm: {
            ...state.choosenFilm,
            stars: action.payload.stars,
          },
        };
      }
      return state;
    default:
      return state;
  }
}
