import React from 'react'
import './SearchResultList.css'

import { SearchItem } from './SearchItem'

export const SearchResultList = ({ movies }) => {
  return (
    <div className='search-result-list'>
      {movies.map((m) => {
        return <SearchItem movie={m} key={m.imdbID} />
      })}
    </div>
  )
}
