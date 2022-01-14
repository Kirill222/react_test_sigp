import React from 'react'
import SearchResultListItem from './SearchResultListItem'
import './SearchResultList.css'


export const SearchResultList = ({movies}) => {    

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
