import {takeEvery, call, put} from 'redux-saga/effects'
import axios from 'axios'

const API_KEY = '81e6b887'

//LOAD DATA ON REQUEST BLOCK
export function* loadDataOnRequest(action) {
    const inputValue = action.payload
    const response = yield call(axios.get, `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`)
    console.log(response.data.Search)
    yield put({type: 'SET_SEARCH_RESULT', payload: response.data}) 
    yield put({type: 'SET_SEARCH_REQUEST', payload: inputValue})   
}
export function* watchClickSaga() {
    yield takeEvery('LOAD_DATA_ON_REQUEST', loadDataOnRequest)     
}



export default function* rootSaga() {
    console.log('redux-saga')
    yield watchClickSaga()
}