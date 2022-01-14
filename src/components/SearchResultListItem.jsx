import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { useNavigate } from "react-router-dom"

export default function SearchResultListItem({movie}) {

    let navigate = useNavigate()    


  return (
    <Card sx={{ maxWidth: 400, display: 'flex'}}>
      <CardMedia
        component="img"
        // height="350"
        image={movie.Poster}
        alt={movie.Title}
        sx={{width: '146px', height: '219px', aspectRatio: 'auto 146 / 219'}}
      />
      <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Typography gutterBottom variant="h5" component="div">{movie.Title}</Typography>
        <Typography gutterBottom variant="h6" component="div">{`Year: ${movie.Year}`}</Typography>
        <Typography gutterBottom variant="h6" component="div">{`Type: ${movie.Type}`}</Typography>
        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Button size="small" onClick={() => navigate(`/details/${movie.imdbID}`)}>Learn More</Button>
      </CardActions>
        
      </CardContent>
      
    </Card>
  );
}