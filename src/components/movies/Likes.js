import React from 'react'
import style from './movies.module.scss'
import { useOfContext } from '../../context'

function Likes(props) {
  const { id, likes } = props;
  const { changeLikes } = useOfContext();

  return (
    <div className={style.likes}>
      <button className={style.likeButton} onClick={changeLikes(id, 'add')}></button>
      <span className={style.likesAmount}>{likes}</span>
      <button className={style.dislikeButton} onClick={changeLikes(id, 'remove')}></button>
    </div>
  )
}

export default Likes
