import {useEffect, useContext, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {getDetailMovie, getVideos, getSimilarMovie} from '../../api/apiCaller'
import apiConfig from '../../api/apiConfig'
import Button from '../../components/Button/Button'
import Context from '../../store/context'
import {getVideo, openModal} from '../../store/actions'
import Modal from '../../components/Modal/Modal'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import './Detail.scss'

const useQuery = () => new URLSearchParams(useLocation().search)
function Detail() {
    const [state, dispatch] = useContext(Context)
    const [movie, setMovie] = useState({})
    const [similar, setSimilar] = useState([])
    const key = useQuery().get('id')
    
    useEffect(() => {
        const getDetail = async () => {
            await getDetailMovie(key)
                    .then(res => setMovie(res.data))
        }
        getDetail()
    }, [key])

    useEffect(() => {
        const getSimilar = async () => {
            await getSimilarMovie(key)
                    .then(res => setSimilar(res.data.results))
        }
        getSimilar()
    }, [movie])

    console.log(similar)

     const handelOpenModal = async (id) => {
        await getVideos(id)
                .then(res => {
                    dispatch(getVideo(res.data.results[0].key))
                    dispatch(openModal(true))
                })
    }

    return (
        <div>
            <div className="banner" style={{backgroundImage: `url("${apiConfig.imageOriginalPath}${movie.backdrop_path}")`}}></div>
            <div className="detail-container mb-3">
                <div className="detail">
                    <div className="detail-poster">
                        <img src={`${apiConfig.imageW500Path}${movie.poster_path}`}/>
                    </div>
                    <div className="detail-description">
                        <h2 className="mb-1" style={{color: 'white'}}>{movie.title || movie.original_title}</h2>
                        <p className="mb-1">Runtime: {movie.runtime} min</p>
                        <ul className="mb-1">
                            {
                                movie.genres ? movie.genres.map((genres) => {
                                    return (<li key={genres.id}>
                                        {genres.name}
                                    </li>)
                                }) : null
                            }
                        </ul>
                        <p className="mb-1">{movie.overview}</p>
                        <div className="mb-1 vote">
                            <p>Average: {movie.vote_average}</p>
                            <p>Count: {movie.vote_count}</p>
                            <p>Popularity: {movie.popularity}</p>
                        </div>
                        <div className="controller">
                            <Button type='primary' style={{marginRight: '20px'}}>Watch now</Button>
                            <Button type='secondary' onClick={(e) => {handelOpenModal(movie.id)}}>Watch trailer</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <HeroSlider 
                    title="Similar movie"
                    movies={similar}
                />
            </div>
            {state.openModal ? (<Modal/>) : null}
        </div>
    )
}

export default Detail