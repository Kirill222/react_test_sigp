import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export default function DetailsTable({ movie }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: '960px', margin: '0 auto', background: '#d1c4e9' }}
    >
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row'>
              Rated:
            </TableCell>
            <TableCell align='right'>{movie.Rated}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Released:
            </TableCell>
            <TableCell align='right'>{movie.Released}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Runtime:
            </TableCell>
            <TableCell align='right'>{movie.Runtime}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Genre:
            </TableCell>
            <TableCell align='right'>{movie.Genre}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Director:
            </TableCell>
            <TableCell align='right'>{movie.Director}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Writer:
            </TableCell>
            <TableCell align='right'>{movie.Writer}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Language:
            </TableCell>
            <TableCell align='right'>{movie.Language}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Country:
            </TableCell>
            <TableCell align='right'>{movie.Country}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Awards:
            </TableCell>
            <TableCell align='right'>{movie.Awards}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Metascore:
            </TableCell>
            <TableCell align='right'>{movie.Metascore}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              imdbRating:
            </TableCell>
            <TableCell align='right'>{movie.imdbRating}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              imdbVotes:
            </TableCell>
            <TableCell align='right'>{movie.imdbVotes}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Type:
            </TableCell>
            <TableCell align='right'>{movie.Type}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              DVD:
            </TableCell>
            <TableCell align='right'>{movie.DVD}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              BoxOffice:
            </TableCell>
            <TableCell align='right'>{movie.BoxOffice}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Production:
            </TableCell>
            <TableCell align='right'>{movie.Production}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Website:
            </TableCell>
            <TableCell align='right'>{movie.Website}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component='th' scope='row'>
              Response:
            </TableCell>
            <TableCell align='right'>{movie.Response}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
