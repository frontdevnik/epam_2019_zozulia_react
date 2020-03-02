import React from 'react';
import { useOfContext } from '../../context';
import style from './sorting.module.scss';


function SortByName() {
  const { searchByName } = useOfContext();

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

export default SortByName;
