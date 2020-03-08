import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes, { number } from 'prop-types';
import { Routes } from '../../constans';
import RatingStart from '../movies/ratingStart/RatingStart';
import { fetchingMovie } from './actions';
import api from '../../core/callApi';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import withTranslation from '../../hocs/withTranslation';
import style from './chosenFilm.module.scss';

function ChosenFilm(props) {
  const history = useHistory();
  const { id } = useParams();
  const { fetchingMovie, loading, movie, error, choosenFilm_likes, choosenFilm_edit, choosenFilm_delete, choosenFilm_director, choosenFilm_actors, choosenFilm_genres, choosenFilm_description } = props;

  useEffect(() => {
    fetchingMovie(id);
  }, [fetchingMovie, id]);

  if (loading && !movie) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const { title, posterUrl, stars, likes, genres, actorsIds, director, description } = movie;
  const actorsArr = props.actors;
  const actors = [];

  actorsArr.forEach((actor) => {
    if (actorsIds.some(id => actor.id === id)) {
      actors.push(<span key={actor.id} onClick={showActor(actor)} className={style.actor}>{actor.name}</span>);
    }
  });

  const editMovie = () => {
    history.push(history.location.pathname + '/edit');
  };

  const removeMovie = (id) => async () => {
    await api(`movies/${id}`, 'delete');
    history.push(Routes.HOMEPAGE);
  };

  function showActor(actor) {
    return () => {
      history.push(Routes.ACTOR + `/${actor.id}`);
    };
  }

  return (
    <>
      <div className={style.shortInfo}>
        <h3>{title}</h3>
        <p>
          {choosenFilm_likes}:
          {likes}
        </p>
        <RatingStart stars={stars} id={+id} />
        <div className={style.buttonContainer}>
          <button onClick={editMovie} className={style.changeButton}>{choosenFilm_edit}</button>
          <button onClick={removeMovie(id)} className={style.changeButton}>{choosenFilm_delete}</button>
        </div>
      </div>
      <article className={style.fullInfo}>
        <img className={style.mainImg} src={posterUrl} alt={title} />
        <p>
          <strong>{choosenFilm_director}: </strong>
          {director}
        </p>
        <p>
          <strong>{choosenFilm_actors}: </strong>
          {actors}
        </p>
        <p>
          <strong>{choosenFilm_genres}: </strong>
          {genres}
        </p>
        <p>
          <strong>{choosenFilm_description}: </strong>
          {description}
        </p>
      </article>
    </>
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
  fetchingMovie: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
};

const mapStateToProps = (state) => ({
  movie: state.choosenFilmReducer.choosenFilm,
  loading: state.choosenFilmReducer.loading,
  error: state.choosenFilmReducer.error,
  actors: state.actorsReducer.actors,
});

const mapDispatchToProps = ({
  fetchingMovie,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withTranslationWords = withTranslation(['choosenFilm_likes', 'choosenFilm_edit', 'choosenFilm_delete', 'choosenFilm_director', 'choosenFilm_actors', 'choosenFilm_genres', 'choosenFilm_description']);

export default withTranslationWords(withConnect(ChosenFilm));
