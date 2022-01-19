import {useContext, useEffect} from 'react'
import Context from "../../store/context"
import GenresMovies from "../../components/GenresMovies/GenresMovies"
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import {getPopular, getTopRatedMovie} from "../../api/apiCaller"
import * as actions from '../../store/actions'
import './Movies.scss'

function Movies() {
    const [state, dispatch] = useContext(Context)

    useEffect(() => {
        const getMovies = async () => {
            await getPopular(1)
                    .then((res) => {
                        dispatch(actions.setMoviesPopular(res.data.results))
                    })
        }
        getMovies()
    }, [])

    useEffect(() => {
        const getMovies = async () => {
            await getTopRatedMovie(1)
                    .then((res) => {
                        dispatch(actions.setMoviesRated(res.data.results))
                    })
        }
        getMovies()
    }, [])

    return (
        <div className="movies-page">
            
            <GenresMovies/>
             <HeroSlider 
                title="Popular movie"
                movies={state.moviesPopular}
            />
            <HeroSlider 
                title="Top movie rated"
                movies={state.moviesRated}
            />
        </div>
    )
}

export default Movies