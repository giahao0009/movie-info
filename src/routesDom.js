import {Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Movies from './pages/Movies/Movies'
import Detail from './pages/Detail/Detail'
import NotFound from './pages/NotFound/NotFound'
import SearchMoviePage from './pages/SearchMoviePage/SearchMoviePage'

function RoutesDom() {
    return (
        <Routes>
            <Route exact path="movie-info/" element={<Homepage/>}/>
            <Route path="movies" element={<Movies/>}/>
            <Route path="detail" element={<Detail/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="searchMovie" element={<SearchMoviePage />}/>
        </Routes>
    )
}

export default RoutesDom