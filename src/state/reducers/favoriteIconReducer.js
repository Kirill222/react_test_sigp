const initialState =  false

const favoriteIconReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FAVORITE_MOVIE":
            return action.payload      
        default:
            return state
    }
}

export default favoriteIconReducer