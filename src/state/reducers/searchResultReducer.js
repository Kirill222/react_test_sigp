const initialState =  {}

const searchResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SEARCH_RESULT":
            return {...state, ...action.payload}        
        default:
            return state
    }
}

export default searchResultReducer