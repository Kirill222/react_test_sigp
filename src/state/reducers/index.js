import {combineReducers} from 'redux'

import searchResultReducer from './searchResultReducer'
import searchRequestReducer from './searchRequestReducer'
import movieDetailsReducer from './movieDetailsReducer'

const reducers = combineReducers({
    searchResult: searchResultReducer,
    request: searchRequestReducer,
    movieDetails: movieDetailsReducer,
})

export default reducers