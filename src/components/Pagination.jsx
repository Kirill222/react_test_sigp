import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import {useSelector} from 'react-redux'


export default function PaginationRounded() {

const totalResults = useSelector(state => state.searchResult.totalResults)
const numberOfPages = Math.ceil(totalResults/10)

  return (
    <div style={{maxWidth: '960px', margin: '25px auto'}}>
        <Stack spacing={2}>
            <Pagination count={numberOfPages} variant="outlined" shape="rounded" sx={{margin: '0 auto'}}/>
        </Stack>
    </div>
  );
}