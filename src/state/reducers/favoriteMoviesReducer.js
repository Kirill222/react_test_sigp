const initialState =  ['']

const favoriteMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FAVORITE_MOVIE_TO_COLLECTION":
            return [...state, action.payload] 
        case "REMOVE_MOVIE_FROM_COLLECTION":
            const filtered = state.filter(m => {
                return m !== action.payload
            })
            return [...filtered]   
        default:
            return state
    }
}

export default favoriteMoviesReducer