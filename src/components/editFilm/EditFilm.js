import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Routes } from '../../constans';
import { editMovie } from './actions';
import styles from './editFilm.module.scss';

function EditFilm(props) {
  const { id, title, posterUrl, stars, likes, genres, actorsIds, director, description } = props.movie;

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const updatePost = () => {
    const title = document.querySelector('#title').value;
    const posterUrl = document.querySelector('#posterUrl').value;
    const director = document.querySelector('#director').value;
    const genres = document.querySelector('#genres').value;
    const description = document.querySelector('#description').value;

    const updatedMovie = {
      id,
      title,
      posterUrl,
      stars,
      likes,
      genres,
      actorsIds,
      director,
      description,
    };

    props.editMovie(updatedMovie);
    history.push(Routes.HOMEPAGE);
  };

  return (
    <form className={styles.editForm}>
      <label>
        Title:
        <input id='title' defaultValue={title} />
      </label>
      <label>
        Img url:
        <input id='posterUrl' defaultValue={posterUrl} />
      </label>
      <label>
        Director:
        <input id='director' defaultValue={director} />
      </label>
      <label>
        Genres:
        <input id='genres' defaultValue={genres} />
      </label>
      <label>
        Description:
        <textarea id='description' defaultValue={description} />
      </label>
      <div className={styles.buttons}>
        <button type='button' onClick={updatePost}>Submit</button>
        <button type='button' onClick={goBack}>Go back</button>
      </div>
    </form>
  );
}

EditFilm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    posterUrl: PropTypes.string,
    stars: PropTypes.number,
    likes: PropTypes.number,
    genres: PropTypes.array,
    actorsIds: PropTypes.array,
    director: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  editMovie: PropTypes.func,
};

const mapStateToProps = (state) => ({
  movie: state.choosenFilmReducer.choosenFilm,
});

const mapDispatchToProps = ({
  editMovie,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFilm);
