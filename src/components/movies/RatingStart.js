import React from 'react'
import style from './movies.module.scss'
import { useOfContext } from '../../context'

function RatingStart(props) {
  return (
    <div className={style.stars}>
      <RenderStar star={props.stars} id={props.id} />
    </div>
  )
}

function RenderStar(props) {
  const { setRatingStart } = useOfContext();
  const { star, id } = props;
  
  const stars = [];
  
  let starsCount = star;
  
  for (let i = 1; i < 6; i++) {
    starsCount > 0
    ? stars.push(<div key={i} onClick={setRatingStart(id, i)} className={style.starActive}></div>)
    : stars.push(<div key={i} onClick={setRatingStart(id, i)} className={style.star}></div>)
    starsCount--;
  }

  return stars;
}

export default RatingStart
