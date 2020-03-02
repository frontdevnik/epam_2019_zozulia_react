import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useOfContext } from '../../../context';
import style from './likes.module.scss';

function Likes(props) {
  const { id, likes } = props;
  const { changeLikes } = useOfContext();

  return (
    <div className={style.likes}>
      <button type="button" className={style.likeButton} onClick={changeLikes(id, 'add')} />
      <span className={style.likesAmount}>{likes}</span>
      <button type="button" className={style.dislikeButton} onClick={changeLikes(id, 'remove')} />
    </div>
  );
}

Likes.propTypes = {
  id: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default memo(Likes);
