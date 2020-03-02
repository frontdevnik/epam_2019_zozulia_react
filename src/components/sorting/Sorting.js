import React from 'react';
import SortByName from './SortByName';
import { useOfContext } from '../../context';
import style from './sorting.module.scss';

function Sorting() {
  const { sorByLikes, sortByRating, resetSorting } = useOfContext();
  return (
    <div className={style.sorting}>
      <h3>Sort movies: </h3>
      <button type="button" onClick={sorByLikes}>Sort by likes</button>
      <button type="button" onClick={sortByRating}>Sort by rating</button>
      <button type="button" onClick={resetSorting}>Reset filters</button>
      <SortByName />
    </div>
  );
}

export default Sorting;
