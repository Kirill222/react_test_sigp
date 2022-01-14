import React from 'react'

import {useSelector} from 'react-redux'
import { SearchResultList } from '../components/SearchResultList'

export const FavoriteMovies = () => {

    const favoriteMovies = useSelector(state => state.favoriteMovies)
    console.log(favoriteMovies)

    return (
        <div>
            {favoriteMovies.length ? <div>
                                        <h1>My favorite movies ({favoriteMovies.length})</h1>
                                        <SearchResultList movies={favoriteMovies}/>
                                    </div>
                                    : <h3>No favorite movies selected</h3>}
        </div>
    )
}
