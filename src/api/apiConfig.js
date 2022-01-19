const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/movie',
    genresMovieUrl:'https://api.themoviedb.org/3/genre/movie',
    tvUrl: 'https://api.themoviedb.org/3/tv',    
    searchUrl: 'https://api.themoviedb.org/3/search',
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    language: 'en-US',
    imageW500Path: 'https://image.tmdb.org/t/p/w500',
    imageOriginalPath: 'https://image.tmdb.org/t/p/original'
}

export default apiConfig