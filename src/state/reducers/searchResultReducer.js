const initialState =  {
    Search: [
    {
    Title: "Superman/Batman: Apocalypse",
    Year: "2010",
    imdbID: "tt1673430",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    Title: "Batman Beyond: Return of the Joker",
    Year: "2000",
    imdbID: "tt0233298",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNmRmODEwNzctYzU1MS00ZDQ1LWI2NWMtZWFkNTQwNDg1ZDFiXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
    },
    {
    Title: "Superman/Batman: Public Enemies",
    Year: "2009",
    imdbID: "tt1398941",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    Title: "Batman: Bad Blood",
    Year: "2016",
    imdbID: "tt4870838",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BZWZiZmZhYmQtYjVkZi00MWIzLWEzM2MtYzhkNjliNzc2MTMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    Title: "Batman vs. Robin",
    Year: "2015",
    imdbID: "tt4324274",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjI0ODY2MDE5Nl5BMl5BanBnXkFtZTgwMTk0NTcyNTE@._V1_SX300.jpg"
    },
    {
    Title: "Batman",
    Year: "1966-1968",
    imdbID: "tt0059968",
    Type: "series",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTkzNDY5NTg5MF5BMl5BanBnXkFtZTgwNzI4NzM1MjE@._V1_SX300.jpg"
    },
    {
    Title: "Batman: Arkham Asylum",
    Year: "2009",
    imdbID: "tt1282022",
    Type: "game",
    Poster: "https://m.media-amazon.com/images/M/MV5BMWE1MGI0ZmItNzU2My00Mzk5LThkNTMtMmFiMjRiZDNlNzkwXkEyXkFqcGdeQXVyNjgyODQ1Mzk@._V1_SX300.jpg"
    },
    {
    Title: "Batman Ninja",
    Year: "2018",
    imdbID: "tt7451284",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjFlMDc2NGMtYjkyMS00MTlhLTgxNWItMmYxZjc5NzVhMGE0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg"
    },
    {
    Title: "The New Batman Adventures",
    Year: "1997-1999",
    imdbID: "tt0118266",
    Type: "series",
    Poster: "https://m.media-amazon.com/images/M/MV5BY2JkYjE4MWYtMGJlZC00OWVhLWJlMmUtNGQzYjM0ZDUxNGI2XkEyXkFqcGdeQXVyMjM5NDQzNTk@._V1_SX300.jpg"
    },
    {
    Title: "Batman: Gotham by Gaslight",
    Year: "2018",
    imdbID: "tt7167630",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BYTJhNjYyMGItODdhOC00ZTZmLTk1MTMtZDRhMmZkYTRiOGJkXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_SX300.jpg"
    }
    ],
    totalResults: "492",
    Response: "True"
    }

const searchResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload
        case "withdraw":
            return state - action.payload
        default:
            return state
    }
}

export default searchResultReducer