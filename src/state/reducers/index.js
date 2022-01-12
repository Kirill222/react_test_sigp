import {combineReducers} from 'redux'

import searchResultReducer from './searchResultReducer'
import searchRequestReducer from './searchRequestReducer'

const reducers = combineReducers({
    searchResult: searchResultReducer,
    request: searchRequestReducer,
})

export default reducers