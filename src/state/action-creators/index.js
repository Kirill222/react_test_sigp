export const setSearchedResultAC = (searchResult) => {
    return ({
            type: 'SET_SEARCH_RESULT',
            payload: searchResult,
        })    
}