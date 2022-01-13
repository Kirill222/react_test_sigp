import './PosterPlot.css'
//MUI rating
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'


export const PosterPlot = ({source, plot, actors, rating}) => {
    return (
        <div className="poster-plot">

            <div className="poster">
                <img src={source} alt="Poster" className="poster-img" />
            </div>
            <div className="description">
                <h2>Plot</h2>
                <p>{plot}</p>
                <h2>Actors</h2>
                <p>{actors}</p>

                <h2>IMDB rating:</h2>
                <Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly max={10} />
            </div>
            
        </div>
    )
}
