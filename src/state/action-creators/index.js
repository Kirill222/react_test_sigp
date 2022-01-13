export const setSearchedResultAC = (searchResult) => {
    return ({
            type: 'SET_SEARCH_RESULT',
            payload: searchResult,
        })    
}

export const setSearchRequestAC = (request) => {
    return ({
        type: 'SET_SEARCH_REQUEST',
        payload: request,
    })
}

export const setMovieDetailsAC = (movieDetails) => {
    return ({
        type: 'SET_MOVIE_DETAILS',
        payload: movieDetails,
    })
}

export const setFavoriteMovieAC = (fav) => {
    return ({
        type: 'SET_FAVORITE_MOVIE',
        payload: !fav,
    })
}
