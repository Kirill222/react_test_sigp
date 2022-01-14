import React from 'react'
import {SearchBar} from '../components/SearchBar'
import {SearchResultList} from '../components/SearchResultList'
import Pagination from '../components/Pagination'
import {useSelector} from 'react-redux'


export const MovieSearch = () => {

    const movies = useSelector(state => state.searchResult.Search)

    return (
        <div>
            <h1>Movie search:</h1>      
            <SearchBar />
            {movies ?   <div>
                            <SearchResultList movies={movies} />
                            <Pagination />
                        </div>
                        : <h3>Please, enter the movie title to search</h3>}
            
        </div>
    )
}
