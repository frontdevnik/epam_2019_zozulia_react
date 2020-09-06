import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import EditFilmForm from "./EditFilmForm";

import { updateMovie } from "../../helpers/fetch-movie-api";

import { HOME_PAGE } from "../../constants/path-constans";

function EditFilm({ movie }) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const updatePost = async (data) => {
    const updatedMovie = { ...movie, ...data };
    await updateMovie(movie.id, updatedMovie);

    history.push(HOME_PAGE);
  };

  return (
    <EditFilmForm goBack={goBack} onSubmit={updatePost} initialValues={movie} />
  );
}

EditFilm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    posterUrl: PropTypes.string,
    stars: PropTypes.number,
    likes: PropTypes.number,
    genres: PropTypes.array,
    actorsIds: PropTypes.array,
    director: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default EditFilm;
