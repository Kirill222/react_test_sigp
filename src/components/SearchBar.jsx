import {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './SearchBar.css'

import {useSelector, useDispatch} from 'react-redux'




export const SearchBar = () => {

    const dispatch = useDispatch()
    const totalResults = useSelector(state => state.searchResult.totalResults)

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="search-bar">
            <div className="search-elements">
                <TextField id="outlined-basic" label="Movie" variant="outlined" value={inputValue} onChange={handleInputChange}/>
                <Button variant="contained" sx={{height: '100%'}} onClick={(() => dispatch({type: 'LOAD_DATA_ON_REQUEST', payload: inputValue}))}>Search...</Button>

            </div>
            {totalResults && <p>{`${totalResults} items found that suit your search request`}</p>}
        </div>
    )
}
