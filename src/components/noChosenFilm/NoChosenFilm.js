import React from 'react';
import styles from './noChosenFilm.module.scss';

function NoChosenFilm() {
  return (
    <h1 className={styles.mainText}>Select a movie to see its full description</h1>
  );
}

export default NoChosenFilm;
