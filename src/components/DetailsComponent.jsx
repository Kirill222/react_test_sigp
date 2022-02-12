import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import {
  setFavoriteMovieAC,
  setFavoriteMovieToCollectionAC,
  removeMovieFromCollectionAC,
} from '../state/action-creators/'

import DetailsTable from './DetailsTable'
import { PosterPlot } from './PosterPlot'

export const DetailsComponent = () => {
  const { movieId } = useParams()
  const dispatch = useDispatch()
  const movie = useSelector((state) => state.movieDetails)
  const isFavorite = useSelector((state) => state.isFavorite)
  const favoriteMovies = useSelector((state) => state.favoriteMovies)
  console.log(isFavorite)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    dispatch({ type: 'LOAD_MOVIE_DETAILS', payload: movieId })
  }, [movieId, dispatch])

  const ifHasArray = favoriteMovies.filter((fm) => {
    return fm.imdbID === movie.imdbID
  })

  //check favorite on page load
  useEffect(() => {
    if (ifHasArray[0]) {
      dispatch(setFavoriteMovieAC(true))
    } else {
      dispatch(setFavoriteMovieAC(false))
    }
  }, [ifHasArray, dispatch])

  const handleFavIcon = () => {
    console.log(favoriteMovies)

    if (!ifHasArray[0]) {
      localStorage.setItem(
        'favoriteMovies',
        JSON.stringify([
          ...favoriteMovies,
          {
            imdbID: movie.imdbID,
            Title: movie.Title,
            Year: movie.Year,
            Type: movie.Type,
            Poster: movie.Poster,
          },
        ])
      )

      dispatch(setFavoriteMovieAC(true))
      dispatch(
        setFavoriteMovieToCollectionAC({
          imdbID: movie.imdbID,
          Title: movie.Title,
          Year: movie.Year,
          Type: movie.Type,
          Poster: movie.Poster,
        })
      )
    }
    if (ifHasArray[0]) {
      const filtered = favoriteMovies.filter((fm) => {
        return fm.imdbID !== ifHasArray[0].imdbID
      })
      localStorage.setItem('favoriteMovies', JSON.stringify([...filtered]))

      dispatch(setFavoriteMovieAC(false))
      dispatch(removeMovieFromCollectionAC(movie.imdbID))
    }
    console.log(favoriteMovies)
  }

  return (
    <div>
      <IconContext.Provider value={{ color: 'gold' }}>
        <h1>
          {movie.Title} ({movie.Year}){' '}
          {!isFavorite ? (
            <AiOutlineStar
              style={{ alignSelf: 'center' }}
              onClick={handleFavIcon}
            />
          ) : (
            <AiFillStar onClick={handleFavIcon} />
          )}
        </h1>
      </IconContext.Provider>

      <PosterPlot
        source={movie.Poster}
        plot={movie.Plot}
        actors={movie.Actors}
        rating={movie.imdbRating}
      />

      <DetailsTable movie={movie} />
    </div>
  )
}
