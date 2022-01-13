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
        payload: fav,
    })
}

//favorite movies array
export const setFavoriteMovieToCollectionAC = (movieObject) => {
    return ({
        type: 'SET_FAVORITE_MOVIE_TO_COLLECTION',
        payload: movieObject,
    })
}

export const removeMovieFromCollectionAC = (movieId) => {
    return ({
        type: 'REMOVE_MOVIE_FROM_COLLECTION',
        payload: movieId,
    })
}


