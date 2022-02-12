import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './SearchBar.css'

import { useSelector, useDispatch } from 'react-redux'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const totalResults = useSelector((state) => state.searchResult.totalResults)

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch({ type: 'LOAD_DATA_ON_REQUEST', payload: inputValue })
  }

  return (
    <div className='search-bar'>
      <form onSubmit={onSubmitHandler} className='search-elements'>
        <TextField
          id='outlined-basic'
          label='Movie'
          variant='outlined'
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type='submit' variant='contained' sx={{ height: '100%' }}>
          Search...
        </Button>
      </form>
      {totalResults && (
        <p>{`${totalResults} items found that suit your search request`}</p>
      )}
    </div>
  )
}
