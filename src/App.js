import './App.css'
import {Routes, Route} from "react-router-dom"
import {MovieSearch} from "./pages/MovieSearch"
import {MovieDetails} from "./pages/MovieDetails"
import {FavoriteMovies} from "./pages/FavoriteMovies"
import {useState, useEffect} from 'react'
import axios from 'axios'

import {useSelector} from 'react-redux'


const API_KEY = '81e6b887'

function App() {

const movies = useSelector(state => state.searchResult.Search)
const totalResults = useSelector(state => state.searchResult.totalResults)
const numberOfPages = Math.ceil(totalResults/10)

console.log(totalResults, numberOfPages, movies);

const getData = async () => {
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s="Batman"`)
}

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieSearch />}/>
        <Route path="/details/:movieId" element={<MovieDetails />}/>
        <Route path="/favorite" element={<FavoriteMovies />}/>
      </Routes>
    </div>
  );
}

export default App
