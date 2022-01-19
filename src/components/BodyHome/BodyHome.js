import React, {useEffect, useState, useContext} from 'react'
import {getPopular, getTopRatedMovie, getTvPopular, getTvTopRated} from "../../api/apiCaller"
import HeroSlider from "../HeroSlider/HeroSlider"
import Context from "../../store/context"
import * as actions from '../../store/actions'

function BodyHome() {
    
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

    useEffect(() => {
        const getTv = async () => {
            await getTvPopular(1)
                    .then((res) => {
                        dispatch(actions.setTvPopular(res.data.results))
                    })
        }
        getTv()
    },[])

    useEffect(() => {
        const getTvRated = async () => {
            await getTvTopRated(1)
                    .then((res) => {
                        dispatch(actions.setTvRated(res.data.results))
                    })
        }
        getTvRated()
    },[])

    return (
        <div>
            <HeroSlider 
                title="Popular movie"
                movies={state.moviesPopular}
                btnViewMore= 'true'
            />
            <HeroSlider 
                title="Top movie rated"
                movies={state.moviesRated}
                btnViewMore= 'true'
            />
            <HeroSlider
                title="Popular TV"
                movies={state.tvPopular}
                btnViewMore= 'true'
            />
            <HeroSlider
                title="Top TV rated"
                movies={state.tvRated}
                btnViewMore= 'true'
            />
        </div>
    )
}

export default BodyHome