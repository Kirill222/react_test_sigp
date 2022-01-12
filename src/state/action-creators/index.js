export const setSearchedResult = (searchResult) => {
    return ({
            type: 'SET_SEARCH_RESULT',
            payload: searchResult,
        })    
}