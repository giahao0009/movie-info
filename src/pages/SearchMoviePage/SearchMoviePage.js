import {useContext, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Context from "../../store/context"
import * as actions from '../../store/actions'
import './SearchMoviePage.scss'
import { getSearchMovies } from '../../api/apiCaller'
import playbutton from '../../images/playbutton.png'
import apiConfig from '../../api/apiConfig'

const useQuery = () => new URLSearchParams(useLocation().search)

function SearchMoviePage() {
    const [state, dispatch] = useContext(Context)
    const keywords = useQuery().get('keywords')
    
    useEffect(() => {
        if(keywords){
            const getMovies = async () => {
                await getSearchMovies(keywords)
                        .then((res) => {
                            console.log(res.data.results)
                            dispatch(actions.getSearchMovies(res.data.results))
                        })
            }
            getMovies()
        }
    }, [keywords, state])

    return (
        <div className="list-search-movie">
            {state.moviesSearch.map((movie, index) => {
                let urlPoster = apiConfig.imageW500Path + movie.poster_path
                return (
                    <div key={index} className="movie-item">
                        <img src={urlPoster} />
                        <p>{movie.title || movie.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchMoviePage