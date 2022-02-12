import { SearchFormElement, SearchInput, SearchButton } from './TestFormStyles'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const SearchForm = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch({ type: 'LOAD_DATA_ON_REQUEST', payload: inputValue })
  }

  return (
    <SearchFormElement onSubmit={onSubmitHandler}>
      <SearchInput
        type='text'
        placeholder='Movie Search'
        value={inputValue}
        onChange={handleInputChange}
      />
      <SearchButton type='submit'>Search</SearchButton>
    </SearchFormElement>
  )
}
