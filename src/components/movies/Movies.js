import React from 'react'
import style from './movies.module.scss'
import RatingStart from './RatingStart'
import Likes from './Likes'
import { useOfContext } from '../../context'

function Movies() {
  const { movies, showFullMovieInfo } = useOfContext();

  return (
    <section className={style.movies}>
      {movies.map(movie => (
        <article key={movie.id} className={style.movie}>
          <img className={style.img} src={movie.posterUrl} alt={movie.title}/>
          <h2 className={style.title} onClick={showFullMovieInfo(movie.id)}>{movie.title}</h2>
          <Likes likes={movie.likes} id={movie.id} />
          <RatingStart stars={movie.stars} id={movie.id} />
        </article>
      ))}
    </section>
  )
}

export default Movies