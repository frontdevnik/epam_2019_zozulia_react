export const chooseFilm = (payload) => {
  return {
    choosenFilm: payload,
  };
}

export const changeSelectedMovieLikes = (state, payload) => {
  if (state.choosenFilm && state.choosenFilm.id === payload.id) {
    return {
      choosenFilm: {
        ...state.choosenFilm,
        likes: payload.likes,
      },
    };
  }
  return state;
}

export const changeSelectedMovieStars = (state, payload) => {
  if (state.choosenFilm && state.choosenFilm.id === payload.id) {
    return {
      choosenFilm: {
        ...state.choosenFilm,
        stars: payload.stars,
      },
    };
  }
  return state;
}