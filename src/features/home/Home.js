import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sorting from '../../components/sorting/Sorting';
import Movies from '../../components/movies/Movies';
import ChosenFilm from '../../components/chosenFilm/ChosenFilm';
import NoChosenFilm from '../../components/noChosenFilm/NoChosenFilm';
import style from './home.module.scss';

class Home extends Component {
  render() {
    return (
      <main>
        <h1 className={style.header}>Movies</h1>
        <section className={style.films}>
          <Sorting />
          <Movies />
        </section>
        <section className={style.singleFims}>
          {this.props.choosenFilm ? <ChosenFilm /> : <NoChosenFilm />}
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  choosenFilm: state.choosenFilmReducer.choosenFilm,
});

export default connect(mapStateToProps)(Home);
