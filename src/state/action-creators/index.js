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