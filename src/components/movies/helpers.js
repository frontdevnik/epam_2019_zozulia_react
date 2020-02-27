export const changeLikes = (state, action) => {
  const { movies, updatedFilms } = state;
  const { id, action: act } = action.payload;

  let updateMovies;
  let updateUpdatedFilms;

  switch (act) {
    case 'add':
      updateMovies = movies.map((movie) => movie.id === id ? { ...movie, likes: movie.likes + 1 } : movie);
      updateUpdatedFilms = updatedFilms.map((movie) => movie.id === id ? { ...movie, likes: movie.likes + 1 } : movie);
      return { ...state, movies: updateMovies, updatedFilms: updateUpdatedFilms };
    case 'remove':
      updateMovies = movies.map((movie) => movie.id === id ? { ...movie, likes: movie.likes - 1 } : movie);
      updateUpdatedFilms = updatedFilms.map((movie) => movie.id === id ? { ...movie, likes: movie.likes - 1 } : movie);
      return { ...state, movies: updateMovies, updatedFilms: updateUpdatedFilms };
    default:
      return { ...state, movies: state.movies };
  }
};

export const setRatingStars = (state, action) => {
  const { movies, updatedFilms } = state;
  const { id, stars } = action.payload;

  const updateMovies = movies.map((movie) => movie.id === id ? { ...movie, stars } : movie);
  const updateUpdatedFilms = updatedFilms.map((movie) => movie.id === id ? { ...movie, stars } : movie);

  return { ...state, movies: updateMovies, updatedFilms: updateUpdatedFilms };
};

export const sortByLikes = (state) => {
  const { movies } = state;
  const updateMovies = [...movies];
  updateMovies.sort((prev, next) => next.likes - prev.likes);
  return { ...state, movies: updateMovies };
};

export const sortByRating = (state) => {
  const { movies } = state;
  const updateMovies = [...movies];
  updateMovies.sort((prev, next) => next.stars - prev.stars);
  return { ...state, movies: updateMovies };
};

export const resetFilters = (state) => {
  const { updatedFilms } = state;
  return { ...state, movies: updatedFilms };
};

export const searchByName = (state, action) => {
  const { updatedFilms } = state;
  const allMovies = [...updatedFilms];
  const choosenMovies = allMovies.filter(({ title }) => new RegExp(action.payload, 'i').test(title));
  return { ...state, movies: choosenMovies };
};
