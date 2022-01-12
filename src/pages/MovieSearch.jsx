import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const MovieSearch = () => {
    return (
        <div>
            <h1>Movie search:</h1>
            <div className="search-bar">
                <TextField id="outlined-basic" label="Movie" variant="outlined" />
                <Button variant="contained" sx={{height: '100%'}}>Search...</Button>
            </div>

        </div>
    )
}
