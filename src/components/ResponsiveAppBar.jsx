import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'

const ResponsiveAppBar = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl' sx={{ maxWidth: '960px', margin: '0 auto' }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <MenuItem>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                <Typography textAlign='center'>Home</Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to='/favorite'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Typography textAlign='center'>Favorite movies</Typography>
              </Link>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
