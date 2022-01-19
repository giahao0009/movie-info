import {SET_MOVIES_POPULAR, 
        SET_MOVIES_NOW_PLAYING, 
        SET_MOVIES_RATED,
        SET_TV_POPULAR,
        SET_TV_RATED, 
        GET_SEARCH_MOVIES,
        OPEN_MODAL,
        GET_VIDEO} from './types'

export const setMoviesPopular = payload => ({
    type: SET_MOVIES_POPULAR, 
    payload
})

export const setMoviesRated = payload => ({
    type: SET_MOVIES_RATED,
    payload
})

export const setTvPopular = payload => ({
    type: SET_TV_POPULAR,
    payload
})

export const setTvRated = payload => ({
    type: SET_TV_RATED,
    payload
})

export const setMoviesNowPlaying = payload => ({
    type: SET_MOVIES_NOW_PLAYING, 
    payload
})

export const getSearchMovies = payload => ({
    type: GET_SEARCH_MOVIES,
    payload
})

export const openModal = payload => ({
    type: OPEN_MODAL,
    payload
})

export const getVideo = payload => ({
    type: GET_VIDEO,
    payload
})