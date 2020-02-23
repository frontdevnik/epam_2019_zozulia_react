import React from 'react'
import style from './sorting.module.scss'
import SortByName from './SortByName'
import { useOfContext } from '../../context'

function Sorting() {
  const { sorByLikes, sortByRating, resetSorting } = useOfContext();
  return (
    <div className={style.sorting}>
      <h3>Sort movies: </h3>
      <button onClick={sorByLikes}>Sort by likes</button>
      <button onClick={sortByRating}>Sort by rating</button>
      <button onClick={resetSorting}>Reset filters</button>
      <SortByName />
    </div>
  )
}

export default Sorting
