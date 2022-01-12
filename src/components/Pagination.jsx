import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import axios from 'axios'

import {useSelector, useDispatch} from 'react-redux'
import {setSearchedResultAC} from '../state/action-creators/'


const API_KEY = '81e6b887'



export default function PaginationRounded() {

const dispatch = useDispatch()
const totalResults = useSelector(state => state.searchResult.totalResults)
const request = useSelector(state => state.request)
const numberOfPages = Math.ceil(totalResults/10)

const changePage = async (e, page) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${request}&page=${page}`)
    console.log(response.data)
    dispatch(setSearchedResultAC(response.data))
}

  return (
    <div style={{maxWidth: '960px', margin: '25px auto'}}>
        <Stack spacing={2}>
            <Pagination 
                count={numberOfPages} 
                variant="outlined" 
                shape="rounded" 
                sx={{margin: '0 auto'}} 
                onChange={changePage}
            />
        </Stack>
    </div>
  );
}