import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const SearchBar = () => {
    return (
        <div className="search-bar">
            <TextField id="outlined-basic" label="Movie" variant="outlined" />
            <Button variant="contained" sx={{height: '100%'}}>Search...</Button>
        </div>
    )
}
