import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { IconContext } from "react-icons";

import {
    setMovieDetailsAC, 
    setFavoriteMovieAC, 
    setFavoriteMovieToCollectionAC,
    removeMovieFromCollectionAC,
} from '../state/action-creators/'

import DetailsTable from './DetailsTable'
import { PosterPlot } from './PosterPlot'




const API_KEY = '81e6b887'

export const DetailsComponent = () => {

    const {movieId} = useParams()
    const dispatch = useDispatch()
    const movie = useSelector(state => state.movieDetails)
    const isFavorite = useSelector(state => state.isFavorite)
    const favoriteMovies = useSelector(state => state.favoriteMovies)
    console.log(isFavorite);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)

            dispatch(setMovieDetailsAC(response.data))
        }
        getData()
    }, [movieId, dispatch])

    useEffect(() => {
        if(favoriteMovies.includes(movie.imdbID)) {
            dispatch(setFavoriteMovieAC(true))
        } else {
            dispatch(setFavoriteMovieAC(false))
        }
    })

    console.log(movie);  
    
    const handleFavIcon = () => {
        console.log(favoriteMovies)        

        if(!favoriteMovies.includes(movie.imdbID)) {
            dispatch(setFavoriteMovieAC(true))
            dispatch(setFavoriteMovieToCollectionAC(movie.imdbID))
        }

        if(favoriteMovies.includes(movie.imdbID)) {
            dispatch(setFavoriteMovieAC(false))
            dispatch(removeMovieFromCollectionAC(movie.imdbID))            
        }        
        console.log(favoriteMovies)
    }

    return (
        <div>
            <IconContext.Provider value={{ color: "gold"}}>
                <h1>{movie.Title} ({movie.Year}) {!isFavorite ? <AiOutlineStar style={{alignSelf: 'center'}} onClick={handleFavIcon} /> : <AiFillStar onClick={handleFavIcon} />}</h1>
            </IconContext.Provider>

            <PosterPlot source={movie.Poster} plot={movie.Plot} actors={movie.Actors} rating={movie.imdbRating}/>

            <DetailsTable movie={movie} />

        </div>
    )
}
