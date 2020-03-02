import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RatingStart from '../movies/ratingStart/RatingStart';
import style from './chosenFilm.module.scss';

function ChosenFilm(props) {
  const { id, title, posterUrl, stars, likes, genres, actors, director, description } = props.movie;

  return (
    <>
      <div className={style.shortInfo}>
        <h3>{title}</h3>
        <p>
          Likes:
          {likes}
        </p>
        <RatingStart stars={stars} id={id} />
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
    actors: PropTypes.array,
    director: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  movie: state.choosenFilmReducer.choosenFilm,
});

export default connect(mapStateToProps)(ChosenFilm);
