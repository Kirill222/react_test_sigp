import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import { useSelector, useDispatch } from 'react-redux'

export default function PaginationRounded() {
  const dispatch = useDispatch()
  const totalResults = useSelector((state) => state.searchResult.totalResults)
  const request = useSelector((state) => state.request)
  const numberOfPages = Math.ceil(totalResults / 10)

  const changePage = async (e, page) => {
    window.scrollTo(0, 0)
    dispatch({ type: 'PAGINATION', payload: { request, page } })
  }

  return (
    <div style={{ maxWidth: '960px', margin: '25px auto' }}>
      <Stack spacing={2}>
        <Pagination
          count={numberOfPages}
          variant='outlined'
          shape='rounded'
          sx={{ margin: '0 auto' }}
          onChange={changePage}
        />
      </Stack>
    </div>
  )
}
