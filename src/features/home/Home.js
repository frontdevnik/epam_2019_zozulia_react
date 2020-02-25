import React, { Component } from 'react'
import style from './home.module.scss'
import { listOfFilms } from '../../utils/helpers'
import Sorting from '../../components/sorting/Sorting'
import Movies from '../../components/movies/Movies'
import ChosenFilm from '../../components/chosenFilm/ChosenFilm'
import { Context } from '../../context'
import NoChosenFilm from '../../components/noChosenFilm/NoChosenFilm'

export default class Home extends Component {

  state = {
    ...listOfFilms,
    choosenFilm: null
  }

  updatedFilms = this.state.movies;

  sorByLikes = () => {
    const currentMovies = [...this.state.movies];
    currentMovies.sort((prev, next) => next.likes - prev.likes)
    this.setState({
      movies: currentMovies
    })
  }

  sortByRating = () => {
    const currentMovies = [...this.state.movies];
    currentMovies.sort((prev, next) => next.stars - prev.stars)
    this.setState({
      movies: currentMovies
    })
  }

  changeLikes = (id, action) => () => {
    let changedMoviesLikes = (action === 'add'
      ? this.state.movies.map(
        movie => movie.id === id ? { ...movie, likes: movie.likes + 1 } : movie
      )
      : this.state.movies.map(
        movie => movie.id === id ? { ...movie, likes: movie.likes - 1 } : movie
      )
    )
    let choosenFilm = this.state.choosenFilm;
    if (this.state.choosenFilm && this.state.choosenFilm.id === id) {
      choosenFilm = changedMoviesLikes.filter(movie => movie.id === id ? movie : null)[0];
    }
    this.updatedFilms = changedMoviesLikes;
    this.setState({
      movies: changedMoviesLikes,
      choosenFilm
    })
  }

  searchByName = (name) => {
    const allMovies = [...this.updatedFilms];
    const suitableMovies = allMovies.filter(({ title }) => new RegExp(name, 'i').test(title))
    this.setState({
      movies: suitableMovies
    })
  }

  setRatingStart = (id, count) => () => {
    const currentFilms = [...this.state.movies];
    let choosenFilm = this.state.choosenFilm;
    if (this.state.choosenFilm && this.state.choosenFilm.id === id) {
      choosenFilm = currentFilms.filter(movie => movie.id === id ? { ...movie, stars: count } : null)[0];
      choosenFilm.stars = count;
    }
    const updateFilm = currentFilms.map(movie => movie.id === id ? { ...movie, stars: count } : movie)
    this.updatedFilms = updateFilm;
    this.setState({
      movies: updateFilm,
      choosenFilm
    })
  }

  resetSorting = () => {
    const allMovies = [...this.updatedFilms];
    this.setState({
      movies: allMovies
    })
  }

  showFullMovieInfo = (id) => () => {
    const allVisibleFilms = [...this.state.movies];
    const choosenFilm = allVisibleFilms.filter(movie => movie.id === id)[0];
    this.setState({
      choosenFilm
    })
  }

  contextsMethods = () => ({
    sorByLikes: this.sorByLikes,
    sortByRating: this.sortByRating,
    changeLikes: this.changeLikes,
    searchByName: this.searchByName,
    setRatingStart: this.setRatingStart,
    resetSorting: this.resetSorting,
    showFullMovieInfo: this.showFullMovieInfo,
    movies: this.state.movies,
  })

  render() {
    return (
      <Context.Provider value={this.contextsMethods()} >
        <main>
          <h1 className={style.header}>Movies</h1>
          <section className={style.films}>
            <Sorting />
            <Movies />
          </section>
          <section className={style.singleFims}>
            {this.state.choosenFilm ? <ChosenFilm movie={this.state.choosenFilm} /> : <NoChosenFilm />}
          </section>
        </main>
      </Context.Provider>
    )
  }
}