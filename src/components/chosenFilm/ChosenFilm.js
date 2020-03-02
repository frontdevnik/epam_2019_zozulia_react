import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes, { number } from 'prop-types';
import { Routes } from '../../constans';
import RatingStart from '../movies/ratingStart/RatingStart';
import { deleteMovie, showActorInfo } from './actions';
import style from './chosenFilm.module.scss';

function ChosenFilm(props) {
  const { id, title, posterUrl, stars, likes, genres, actorsIds, director, description } = props.movie;
  const actorsArr = props.actors;
  const actors = [];

  actorsArr.forEach((actor) => {
    if (actorsIds.some(id => actor.id === id)) {
      actors.push(<span key={actor.id} onClick={showActor(actor)} className={style.actor}>{actor.name}</span>);
    }
  })

  const history = useHistory();

  const editMovie = () => {
    history.push(history.location.pathname + '/edit');
  };

  const removeMovie = (id) => () => {
    props.deleteMovie(id);
    history.push(Routes.HOMEPAGE);
  };

  function showActor(actor) {
    return () => {
      props.showActorInfo(actor);
      history.push(Routes.ACTOR + `/${actor.id}`);
    };
  }

  return (
    <>
      <div className={style.shortInfo}>
        <h3>{title}</h3>
        <p>
          Likes:
          {likes}
        </p>
        <RatingStart stars={stars} id={id} />
        <div className={style.buttonContainer}>
          <button onClick={editMovie} className={style.changeButton}>Edit</button>
          <button onClick={removeMovie(id)} className={style.changeButton}>Delete</button>
        </div>
      </div>
      <article className={style.fullInfo}>
        <img className={style.mainImg} src={posterUrl} alt={title} />
        <p>
          <strong>Director: </strong>
          {director}
        </p>
        <p>
          <strong>Actors: </strong>
          {actors}
        </p>
        <p>
          <strong>Genres: </strong>
          {genres}
        </p>
        <p>
          <strong>Description: </strong>
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
  }).isRequired,
  actors: PropTypes.array.isRequired,
  deleteMovie: PropTypes.func,
  showActorInfo: PropTypes.func,
};

const mapStateToProps = state => ({
  movie: state.choosenFilmReducer.choosenFilm,
  actors: state.moviesReducer.actors,
});

const mapDispatchToProps = ({
  deleteMovie,
  showActorInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChosenFilm);
