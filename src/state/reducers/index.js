import {combineReducers} from 'redux'

import searchResultReducer from './searchResultReducer'
import searchRequestReducer from './searchRequestReducer'
import movieDetailsReducer from './movieDetailsReducer'
import favoriteIconReducer from './favoriteIconReducer'
import favoriteMoviesReducer from './favoriteMoviesReducer'

const reducers = combineReducers({
    searchResult: searchResultReducer,
    request: searchRequestReducer,
    movieDetails: movieDetailsReducer,
    isFavorite: favoriteIconReducer,
    favoriteMovies: favoriteMoviesReducer,
})

export default reducers