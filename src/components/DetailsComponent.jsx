import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import {setMovieDetailsAC} from '../state/action-creators/'

const API_KEY = '81e6b887'

export const DetailsComponent = () => {

    const {movieId} = useParams()
    const dispatch = useDispatch()
    const movie = useSelector(state => state.movieDetails)

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)

            dispatch(setMovieDetailsAC(response.data))
        }
        getData()
    }, [movieId, dispatch])

    console.log(movie);   

    return (
        <div>
            hi
        </div>
    )
}
