import React from 'react'
import style from './sorting.module.scss'
import { useOfContext } from '../../context'


function SortByName() {
  const { searchByName } = useOfContext();

  return (
    <div className={style.search}>
      <button 
      className={style.search} 
      onClick={(event) => searchByName(event.target.nextSibling.value)}>
      </button>
      <input 
      type='search' 
      placeholder='Search by name' 
      onKeyPress={(event) => event.which === 13 ? searchByName(event.target.value) : null}>
      </input>
    </div>
  )
}

export default SortByName
