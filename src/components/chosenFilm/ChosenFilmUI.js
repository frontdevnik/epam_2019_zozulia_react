import React from "react";
import RatingStart from "../movies/ratingStart/RatingStart";
import withTranslation from "../../hocs/withTranslation";
import style from "./chosenFilm.module.scss";

const ChosenFilmUI = ({
  movie: { title, posterUrl, stars, likes, genres, director, description, id },
  actors,
  editMovie,
  removeMovie,
  choosenFilm_likes,
  choosenFilm_edit,
  choosenFilm_delete,
  choosenFilm_director,
  choosenFilm_actors,
  choosenFilm_genres,
  choosenFilm_description,
}) => (
  <>
    <div className={style.shortInfo}>
      <h3>{title}</h3>
      <p>
        {choosenFilm_likes}:{likes}
      </p>
      <RatingStart stars={stars} id={+id} />
      <div className={style.buttonContainer}>
        <button onClick={editMovie} className={style.changeButton}>
          {choosenFilm_edit}
        </button>
        <button onClick={removeMovie(id)} className={style.changeButton}>
          {choosenFilm_delete}
        </button>
      </div>
    </div>
    <article className={style.fullInfo}>
      <img className={style.mainImg} src={posterUrl} alt={title} />
      <p>
        <strong>{choosenFilm_director}: </strong>
        {director}
      </p>
      <p>
        <strong>{choosenFilm_actors}: </strong>
        {actors}
      </p>
      <p>
        <strong>{choosenFilm_genres}: </strong>
        {genres}
      </p>
      <p>
        <strong>{choosenFilm_description}: </strong>
        {description}
      </p>
    </article>
  </>
);

const withTranslationWords = withTranslation([
  "choosenFilm_likes",
  "choosenFilm_edit",
  "choosenFilm_delete",
  "choosenFilm_director",
  "choosenFilm_actors",
  "choosenFilm_genres",
  "choosenFilm_description",
]);

export const TestChosenFilmUI = ChosenFilmUI;

export default withTranslationWords(ChosenFilmUI);
