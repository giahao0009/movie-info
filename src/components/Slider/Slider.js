import React,{useLayoutEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import './Slider.scss'
import SwiperCore, {Navigation, Autoplay} from 'swiper'
import apiConfig from '../../api/apiConfig'
import {getNowPlaying, getVideos} from '../../api/apiCaller'
import Button from '../Button/Button'
import Context from '../../store/context'
import {setMoviesNowPlaying, getVideo, openModal} from '../../store/actions'

function Slider(){
    SwiperCore.use([Autoplay, Navigation])
    const navigate = useNavigate()
    const [state, dispatch] = useContext(Context)
    useLayoutEffect(()=> {
        const getMovie = async () => {
            await getNowPlaying(1)
                    .then(res => {
                        dispatch(setMoviesNowPlaying(res.data.results))
                    })
        }
        getMovie()
    }, [])

    const handelOpenModal = async (id) => {
        await getVideos(id)
                .then(res => {
                    dispatch(getVideo(res.data.results[0].key))
                    dispatch(openModal(true))
                })
    }

    const handleOpenDetail = (id) => {
        navigate(`/detail?id=${id}`)
    }

    return (
        <div className="slider mb-3">
            <Swiper 
                loop={true} 
                navigation={true} 
                centeredSlides={true}
                autoplay={{
                    "delay": 5000,
                    "disableOnInteraction": true
                }}
            >
                 {state.movieNowPlaying.map((movie) => {
                     if(!movie.backdrop_path) return false
                     else{
                        let urlImage = apiConfig.imageOriginalPath + movie.backdrop_path
                        let urlPoster = apiConfig.imageW500Path + movie.poster_path
                        return (
                            <SwiperSlide key={movie.id}>
                                
                                    <div className="swiper-image" style={{backgroundImage: `url("${urlImage}")`}}>
                                        <img src={urlPoster} />
                                        <div className="description">
                                            <h1 className="mb-1">{movie.title || movie.original_title}</h1>
                                            <p  className="mb-2">{movie.overview}</p>
                                            <div className="control">
                                                <Button type = "primary" onClick={(e) => handleOpenDetail(movie.id)}>Watch now</Button>
                                                <Button type = "secondary" onClick={(e) => {handelOpenModal(movie.id)}}>Watch trailer</Button>
                                            </div>
                                        </div>
                                    </div>
                                
                            </SwiperSlide>
                        )
                     }
                 })}
            </Swiper>
        </div>
    )
}

export default Slider