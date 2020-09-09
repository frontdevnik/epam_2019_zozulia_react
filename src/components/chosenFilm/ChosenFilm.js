import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes, { number } from 'prop-types';
import { LoadingWrapper } from '../../hocs/loadingWrapper';

import ChosenFilmUI from './ChosenFilmUI';

import { fetchingMovie } from '../../features/choosenFilm/actions';
import { deleteMovie } from '../../helpers/fetch-movie-api';

import { HOME_PAGE, ACTOR_PAGE } from '../../constants/path-constans';

import style from './chosenFilm.module.scss';

function ChosenFilm({
  loading, movie, error, actors,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchingMovie(id));
  }, [dispatch, id]);

  const { actorsIds } = movie;
  const actorsArr = actors;
  const ModifiedActors = [];

  actorsArr.forEach((actor) => {
    if (actorsIds.some((id) => actor.id === id)) {
      ModifiedActors.push(
        <span key={actor.id} onClick={showActor(actor)} className={style.actor}>
          {actor.name}
        </span>,
      );
    }
  });

  const editMovie = () => {
    history.push(`${history.location.pathname}/edit`);
  };

  const removeMovie = (id) => async () => {
    await deleteMovie(id);

    history.push(HOME_PAGE);
  };

  function showActor(actor) {
    return () => {
      history.push(`${ACTOR_PAGE}/${actor.id}`);
    };
  }

  return (
    <LoadingWrapper loading={loading && !movie} error={error}>
      <ChosenFilmUI
        movie={movie}
        actors={ModifiedActors}
        editMovie={editMovie}
        removeMovie={removeMovie}
      />
    </LoadingWrapper>
  );
}

ChosenFilm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    posterUrl: PropTypes.string,
    stars: PropTypes.number,
    likes: PropTypes.number,
    genres: PropTypes.array,
    actorsIds: PropTypes.arrayOf(number),
    director: PropTypes.string,
    description: PropTypes.string,
  }),
  actors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};

export default ChosenFilm;
