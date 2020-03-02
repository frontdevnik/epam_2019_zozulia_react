import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchByName } from './actions';
import style from './sorting.module.scss';

function SortByName(props) {
  const { searchByName } = props;

  return (
    <div className={style.search}>
      <button
        type="button"
        className={style.search}
        onClick={(event) => searchByName(event.target.nextSibling.value)}
      />
      <input
        type="search"
        placeholder="Search by name"
        onKeyPress={(event) => event.which === 13 ? searchByName(event.target.value) : null}
      />
    </div>
  );
}

SortByName.propTypes = {
  searchByName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchByName: state.searchByName,
});

const mapDispatchToProps = ({
  searchByName,
});

export default connect(mapStateToProps, mapDispatchToProps)(SortByName);
