import './App.css'
import { Routes, Route } from 'react-router-dom'
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
        <Routes>
          <Route path='/' element={<MovieSearch movies={movies} />} />
          <Route path='/details/:movieId' element={<MovieDetails />} />
          <Route path='/favorite' element={<FavoriteMovies />} />
        </Routes>
      </div>
    </>
  )
}

export default App
