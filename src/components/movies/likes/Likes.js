import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeLikes, changeSelectedMovieLikes } from './actions';
import style from './likes.module.scss';

function Likes(props) {
  const { id, likes, changeLikes, changeSelectedMovieLikes } = props;

  const changeAllLikes = (action) => () => {
    changeLikes({ id, action });
    action === 'add'
      ? changeSelectedMovieLikes({ id, likes: likes + 1 })
      : changeSelectedMovieLikes({ id, likes: likes - 1 });
  };

  return (
    <div className={style.likes}>
      <button type="button" className={style.likeButton} onClick={changeAllLikes('add')} />
      <span className={style.likesAmount}>{likes}</span>
      <button type="button" className={style.dislikeButton} onClick={changeAllLikes('remove')} />
    </div>
  );
}

Likes.propTypes = {
  id: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  changeLikes: PropTypes.func.isRequired,
  changeSelectedMovieLikes: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({
  changeLikes,
  changeSelectedMovieLikes,
});

export default connect(null, mapDispatchToProps)(Likes);
