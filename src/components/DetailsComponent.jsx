import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'

export const DetailsComponent = () => {

    const {movieId} = useParams()

    const movie = useSelector(state => {
        const mov = state.searchResult.Search.filter(m => {
            return m.imdbID === movieId
        })
        return mov
    })

    console.log(movieId, movie)

    return (
        <div>
            hi
        </div>
    )
}
