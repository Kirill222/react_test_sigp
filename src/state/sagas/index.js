import { takeEvery, call, put, all } from 'redux-saga/effects'
import axios from 'axios'

const API_KEY = '81e6b887'

//LOAD DATA ON REQUEST BLOCK
export function* loadDataOnRequest(action) {
  const inputValue = action.payload
  const response = yield call(
    axios.get,
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`
  )
  console.log(response.data.Search)
  yield put({ type: 'SET_SEARCH_RESULT', payload: response.data })
  yield put({ type: 'SET_SEARCH_REQUEST', payload: inputValue })
}
export function* watchLoadOnRequest() {
  yield takeEvery('LOAD_DATA_ON_REQUEST', loadDataOnRequest)
}

//LOAD MOVIE DETAILS BLOCK
export function* loadMovieDetails(action) {
  const movieId = action.payload
  const response = yield call(
    axios.get,
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
  )
  console.log(response.data)
  yield put({ type: 'SET_MOVIE_DETAILS', payload: response.data })
}
export function* watchLoadMovieDetails() {
  yield takeEvery('LOAD_MOVIE_DETAILS', loadMovieDetails)
}

//PAGINATION BLOCK
export function* loadNewPage(action) {
  const { request, page } = action.payload
  const response = yield call(
    axios.get,
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${request}&page=${page}`
  )
  yield put({ type: 'SET_SEARCH_RESULT', payload: response.data })
}

export function* watchPagination() {
  yield takeEvery('PAGINATION', loadNewPage)
}

export default function* rootSaga() {
  console.log('redux-saga')
  yield all([watchLoadOnRequest(), watchLoadMovieDetails(), watchPagination()])
}
