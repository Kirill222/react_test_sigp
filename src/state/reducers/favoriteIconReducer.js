const initialState =  null

const favoriteIconReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FAVORITE_MOVIE":
            return state = action.payload      
        default:
            return state
    }
}

export default favoriteIconReducer