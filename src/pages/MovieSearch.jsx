import React from 'react'
import {SearchBar} from '../components/SearchBar'
import {SearchResultList} from '../components/SearchResultList'
import Pagination from '../components/Pagination'


export const MovieSearch = () => {
    return (
        <div>
            <h1>Movie search:</h1>      
            <SearchBar />
            <SearchResultList />
            <Pagination />
        </div>
    )
}
