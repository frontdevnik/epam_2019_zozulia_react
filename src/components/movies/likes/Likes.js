import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  changeLikes,
  changeSelectedMovieLikes,
} from "../../../features/movies/actions";
import style from "./likes.module.scss";

function Likes({ id, likes, movie }) {
  const dispatch = useDispatch();

  const changeAllLikes = (action) => () => {
    dispatch(changeLikes({ id, action }));
    action === "add"
      ? dispatch(changeSelectedMovieLikes({ ...movie, likes: likes + 1 }))
      : dispatch(changeSelectedMovieLikes({ ...movie, likes: likes - 1 }));
  };

  return (
    <div className={style.likes}>
      <button
        type="button"
        className={style.likeButton}
        onClick={changeAllLikes("add")}
      />
      <span className={style.likesAmount}>{likes}</span>
      <button
        type="button"
        className={style.dislikeButton}
        onClick={changeAllLikes("remove")}
      />
    </div>
  );
}

Likes.propTypes = {
  id: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  movie: PropTypes.object,
};

export default Likes;
