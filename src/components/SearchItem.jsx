import {
  ItemCard,
  PosterImg,
  CardContent,
  CardTitle,
  CardYear,
  CardType,
  CardDetailsLink,
  PosterWrapper,
} from './SearchItemStyles'

import noposter from '../assets/images/noposter.png'

export const SearchItem = ({ movie }) => {
  console.log(movie.Title)

  return (
    <ItemCard>
      <PosterWrapper>
        <PosterImg src={movie.Poster !== 'N/A' ? movie.Poster : noposter} />
      </PosterWrapper>
      <CardContent>
        <CardTitle>{movie.Title}</CardTitle>
        <CardYear>Year: {movie.Year}</CardYear>
        <CardType>Type: {movie.Type}</CardType>
        <CardDetailsLink to={`/react_test_sigp/details/${movie.imdbID}`}>
          Learn more...
        </CardDetailsLink>
      </CardContent>
    </ItemCard>
  )
}
