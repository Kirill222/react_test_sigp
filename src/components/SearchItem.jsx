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

export const SearchItem = ({ movie }) => {
  console.log(movie.Title)
  return (
    <ItemCard>
      <PosterWrapper>
        <PosterImg src={movie.Poster} />
      </PosterWrapper>
      <CardContent>
        <CardTitle>{movie.Title}</CardTitle>
        <CardYear>Year: {movie.Year}</CardYear>
        <CardType>Type: {movie.Type}</CardType>
        <CardDetailsLink to={`/details/${movie.imdbID}`}>
          Learn more...
        </CardDetailsLink>
      </CardContent>
    </ItemCard>
  )
}
