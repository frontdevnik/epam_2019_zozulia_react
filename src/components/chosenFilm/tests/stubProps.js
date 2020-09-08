export const loadingProps = {
    movie: null,
    actors: [],
    loading: true,
    error: null
};

export const errorProps = {
    movie: null,
    actors: [],
    loading: false,
    error: ' '
};

export const chosenFilmStars = 5;

export const chosenFilmProps = {
    movie: {actorsIds: [1], stars: chosenFilmStars},
    actors: [],
    loading: false,
    error: null
};

export const chosenFilmId = 1

export const chosenFilmUIProps = {
    movie: {
        title: 'Title',
        posterUrl: 'Url',
        stars: chosenFilmStars,
        likes: 5,
        genres: [],
        director: 'Director',
        description: 'Description',
        id: chosenFilmId
    },
    actors: ['Actor'],
    editMovie: jest.fn(),
    removeMovie: jest.fn(),
    choosenFilm_likes: "Likes",
    choosenFilm_edit: "Likes",
    choosenFilm_delete: "Delete",
    choosenFilm_director: "Director",
    choosenFilm_actors: "Actors",
    choosenFilm_genres: "Genres",
    choosenFilm_description: "Description"
};

