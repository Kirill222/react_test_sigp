import {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import './SearchBar.css'
import {Link} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'

import {setSearchedResultAC, setSearchRequestAC} from '../state/action-creators/'


const API_KEY = '81e6b887'



export const SearchBar = () => {

    const dispatch = useDispatch()
    const totalResults = useSelector(state => state.searchResult.totalResults)


    const [inputValue, setInputValue] = useState('')
    const [data, setData] = useState()

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = async () => {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`)
        setData(response.data)

        dispatch(setSearchedResultAC(response.data))
        dispatch(setSearchRequestAC(inputValue))
    }

    console.log(data)

    return (
        <div className="search-bar">
            <TextField id="outlined-basic" label="Movie" variant="outlined" value={inputValue} onChange={handleInputChange}/>
            <Button variant="contained" sx={{height: '100%'}} onClick={handleClick}>Search...</Button>
            <p>{`${totalResults} items found that suit your search request`}</p>
            <Link to="/favorite">Favorite movies</Link>
        </div>
    )
}
