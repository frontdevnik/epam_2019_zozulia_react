import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  setRatingStars,
  changeSelectedMovieStars,
} from "../../../features/movies/actions";
import style from "../ratingStart/ratingStart.module.scss";

function RenderStar({ star, movie }) {
  const dispatch = useDispatch();

  const stars = [];

  let starsCount = star;

  const setStars = (i) => () => {
    dispatch(setRatingStars({ ...movie, stars: i }));
    dispatch(changeSelectedMovieStars({ ...movie, stars: i }));
  };

  for (let i = 1; i < 6; i++) {
    starsCount > 0
      ? stars.push(
          <div key={i} onClick={setStars(i)} className={style.starActive} />
        )
      : stars.push(
          <div key={i} onClick={setStars(i)} className={style.star} />
        );
    starsCount--;
  }

  return stars;
}

RenderStar.propTypes = {
  id: PropTypes.number.isRequired,
  star: PropTypes.number.isRequired,
};

export default RenderStar;
