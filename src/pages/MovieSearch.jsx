import React from 'react'
import { SearchResultList } from '../components/SearchResultList'
import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'

import { SearchForm } from '../components/SearchForm'

export const MovieSearch = () => {
  const movies = useSelector((state) => state.searchResult.Search)

  return (
    <div>
      <h1>Movie search:</h1>

      <SearchForm />
      {movies ? (
        <div>
          <SearchResultList movies={movies} />
          <Pagination />
        </div>
      ) : (
        <h3>Please, enter the movie title to search</h3>
      )}
    </div>
  )
}
