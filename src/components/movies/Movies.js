import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import RatingStart from "./ratingStart/RatingStart";
import Likes from "./likes/Likes";
import Loading from "../loading/Loading";
import Error from "../error/Error";

import {
  fetchMovies,
  fetchActors,
  removeMovieReducer,
} from "../../features/movies/actions";

import style from "./movies.module.scss";

export default ({ movies, loading, error }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchActors());
    dispatch(removeMovieReducer());
  }, [dispatch]);

  if (loading && !movies) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <section className={style.movies}>
      {movies.map((movie) => (
        <article key={movie.id} className={style.movie}>
          <img className={style.img} src={movie.posterUrl} alt={movie.title} />
          <h2
            className={style.title}
            onClick={() => {
              history.push(`/movie/${movie.id}`);
            }}
          >
            {movie.title}
          </h2>
          <Likes likes={movie.likes} id={movie.id} movie={movie} />
          <RatingStart stars={movie.stars} id={movie.id} movie={movie} />
        </article>
      ))}
    </section>
  );
};
