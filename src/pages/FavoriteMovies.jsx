import React from 'react'

import { SearchResultList } from '../components/SearchResultList'

export const FavoriteMovies = () => {    

    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'))

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
