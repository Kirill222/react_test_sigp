import {DetailsComponent} from '../components/DetailsComponent'
import {useSelector} from 'react-redux'


export const MovieDetails = () => {

    const favoriteMovies = useSelector(state => state.favoriteMovies)
    console.log(favoriteMovies)

    return (
        <div>               
            <DetailsComponent />
        </div>
    )
}
