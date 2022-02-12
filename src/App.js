import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MovieSearch } from './pages/MovieSearch'
import { MovieDetails } from './pages/MovieDetails'
import { FavoriteMovies } from './pages/FavoriteMovies'

import { useSelector } from 'react-redux'
import ResponsiveAppBar from './components/ResponsiveAppBar'

function App() {
  const movies = useSelector((state) => state.searchResult.Search)
  const totalResults = useSelector((state) => state.searchResult.totalResults)
  const numberOfPages = Math.ceil(totalResults / 10)

  console.log(totalResults, numberOfPages, movies)

  return (
    <>
      <ResponsiveAppBar />
      <div className='App'>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route
            path='/react_test_sigp/'
            element={<MovieSearch movies={movies} />}
          />
          <Route
            path='/react_test_sigp/details/:movieId'
            element={<MovieDetails />}
          />
          <Route
            path='/react_test_sigp/favorite'
            element={<FavoriteMovies />}
          />
          <Route path='*' element={<Navigate to='/react_test_sigp/' />} />
        </Routes>
      </div>
    </>
  )
}

export default App
