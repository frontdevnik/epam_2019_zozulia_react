import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SortByName from './SortByName';
import { sorByLikes, sortByRating, resetSorting } from './actions';
import style from './sorting.module.scss';

function Sorting(props) {
  const { sorByLikes, sortByRating, resetSorting } = props;

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

Sorting.propTypes = {
  sorByLikes: PropTypes.func.isRequired,
  sortByRating: PropTypes.func.isRequired,
  resetSorting: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({
  sorByLikes,
  sortByRating,
  resetSorting,
});

export default connect(null, mapDispatchToProps)(Sorting);
