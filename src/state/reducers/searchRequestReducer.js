const initialState =  'Batman'

const searchRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SEARCH_REQUEST":
            return action.payload      
        default:
            return state
    }
}

export default searchRequestReducer