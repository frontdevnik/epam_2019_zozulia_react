import React from 'react';
import {useSelector} from "react-redux";

import ChosenFilm from '../../components/chosenFilm/ChosenFilm';
import Header from '../../components/header';

import styles from './movie.module.scss';

export default () => {
    const movie = useSelector(state => state.choosenFilmReducer.choosenFilm);
    const loading = useSelector(state => state.choosenFilmReducer.loading);
    const error = useSelector(state => state.choosenFilmReducer.error);
    const actors = useSelector(state => state.actorsReducer.actors);

    return (
        <>
            <Header />
            <section className={styles.singleFims}>
                <ChosenFilm movie={movie} loading={loading} error={error} actors={actors}/>
            </section>
        </>
    );
}
