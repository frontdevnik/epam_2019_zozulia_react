import React from 'react'
import style from './chosenFilm.module.scss'
import RatingStart from '../movies/RatingStart';

function ChosenFilm(props) {
  const { id, title, posterUrl, stars, likes, genres, actors, director, description } = props.movie;

  return (
    <>
      <div className={style.shortInfo}>
        <h3>{title}</h3>
        <p>Likes: {likes}</p>
        <RatingStart stars={stars} id={id} />
      </div>
      <article className={style.fullInfo}>
        <img className={style.mainImg} src={posterUrl} alt={title}/>
        <p><strong>Director: </strong>{director}</p>
        <p><strong>Actors: </strong>{actors}</p>
        <p><strong>Genres: </strong>{genres}</p>
        <p><strong>Description: </strong>{description}</p>
      </article>
    </>
  )
}

export default ChosenFilm
