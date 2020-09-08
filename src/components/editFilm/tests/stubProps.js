export const editFilmFormProps = {
    goBack: () => {},
    onSubmit: () => {},
    initialValues: {
        id: 1,
        title: 'Title',
        posterUrl: 'Url',
        stars: 5,
        likes: 5,
        genres: ['action'],
        actorsIds: [1],
        director: 'Director',
        description: 'Description',
    }
};

export const editFilmProps = {
    movie: {
        id: 1,
        title: 'Title',
        posterUrl: 'Url',
        stars: 5,
        likes: 5,
        genres: ['action'],
        actorsIds: [1],
        director: 'Director',
        description: 'Description',
    }
}
