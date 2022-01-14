const initialState =  {}

const movieDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MOVIE_DETAILS":
            return {...state, ...action.payload, Ratings: [...action.payload.Ratings]}      
        default:
            return state
    }
}

export default movieDetailsReducer