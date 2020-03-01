import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RatingStart from './ratingStart/RatingStart';
import Likes from './likes/Likes';
import { showFullMovieInfo } from './action';
import style from './movies.module.scss';

function Movies(props) {
  const { movies, showFullMovieInfo } = props;
  const history = useHistory();

  return (
    <section className={style.movies}>
      {movies.map((movie) => (
        <article key={movie.id} className={style.movie}>
          <img className={style.img} src={movie.posterUrl} alt={movie.title} />
          <h2
            className={style.title}
            onClick={() => {
              showFullMovieInfo(movie);
              history.push('/movie/' + movie.id);
            }}>
            {movie.title}
          </h2>
          <Likes likes={movie.likes} id={movie.id} />
          <RatingStart stars={movie.stars} id={movie.id} />
        </article>
      ))}
    </section>
  );
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  showFullMovieInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies,
});

const mapDispatchToProps = ({
  showFullMovieInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
