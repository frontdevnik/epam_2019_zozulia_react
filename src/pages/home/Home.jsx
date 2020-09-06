import React from 'react';
import { useSelector } from "react-redux";

import Sorting from '../../components/sorting/Sorting';
import Movies from '../../components/movies/Movies';
import Header from '../../components/header';

import style from './home.module.scss';

export default () => {
    const movies = useSelector((state) => state.moviesReducer.movies);
    const loading = useSelector((state) => state.moviesReducer.loading);
    const error = useSelector((state) => state.moviesReducer.error);

    return (<>
            <Header/>
            <main>
                <section className={style.films}>
                    <Sorting />
                    <Movies movies={movies} loading={loading} error={error}/>
                </section>
            </main>
        </>
    );
}
