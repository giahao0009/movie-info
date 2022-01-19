import * as types from './types'

const initState = {
    movieNowPlaying: [],
    moviesPopular: [],
    moviesRated: [],
    tvPopular: [],
    tvRated: [],
    moviesSearch: [],
    openModal: false,
    video: ''
}

function reducer(state, action){
    switch(action.type){
        case types.SET_MOVIES_NOW_PLAYING:
            return {
                ...state,
                movieNowPlaying: action.payload
            }
        case types.SET_MOVIES_POPULAR:
            return {
                ...state,
                moviesPopular: action.payload
            }
        case types.SET_MOVIES_RATED:
            return {
                ...state,
                moviesRated: action.payload
            }
        case types.SET_TV_POPULAR:
            return {
                ...state,
                tvPopular: action.payload
            }
        case types.SET_TV_RATED:
            return {
                ...state,
                tvRated: action.payload
            }
        case types.GET_SEARCH_MOVIES:
            return {
                ...state,
                moviesSearch: action.payload
            }
        case types.OPEN_MODAL:
            return {
                ...state,
                openModal: action.payload
            }
        case types.GET_VIDEO:
            return {
                ...state,
                video: action.payload
            }
        default:
            throw new Error('Unknown action type')
    }
}

export {initState}
export default reducer