import React from 'react';
import {useSelector} from "react-redux";

import EditFilm from '../../components/editFilm/EditFilm';
import Header from '../../components/header';

export default () => {
    const movie = useSelector(state => state.choosenFilmReducer.choosenFilm);

    return (
        <>
            <Header/>
            <EditFilm movie={movie}/>
        </>
    );
}
