import React from 'react'
import SearchResultListItem from './SearchResultListItem'
import {useSelector, useDispatch} from 'react-redux'
import './SearchResultList.css'


export const SearchResultList = () => {

    const movies = useSelector(state => state.searchResult.Search)

    return (
        <div className='search-result-list'>
            {
                movies.map(m => {
                    return <SearchResultListItem movie={m} key={m.imdbID}/>
                })
            }
        </div>
    )
}
