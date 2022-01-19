import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper'
import {useNavigate} from 'react-router-dom'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./HeroSlider.scss"
import apiConfig from '../../api/apiConfig'
import Button from '../Button/Button'
import playbutton from '../../images/playbutton.png'

function HeroSlider({title, movies, btnViewMore}) {
    const navigate = useNavigate()

    SwiperCore.use([Navigation]);

    const handleOpenDetail = (id) => {
        navigate(`/detail?id=${id}`)
    }
    return (
        <div className="hero-slider section mb-3">
            <div className= "title mb-1">
                <h3>{title}</h3>
                {btnViewMore ? (<Button type = "secondary" onClick={() => {navigate('/movies')}}>View more</Button>) : null}
            </div>
            <Swiper     
                spaceBetween={10} 
                navigation={true} 
                loop={true} 
                loopFillGroupWithBlank={true} 
                loop={true}
                breakpoints= {{
                    "490": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 3,
                        "spaceBetween": 40
                    },
                    "1000": {
                        "slidesPerView": 4,
                        "spaceBetween": 50
                    },
                    "1200": {
                        "slidesPerView": 5,
                        "spaceBetween": 50
                    }
                }}
            >   
                {movies.map((movie) => {
                    let urlPoster = apiConfig.imageW500Path + movie.poster_path
                    return (
                        <SwiperSlide key={movie.id}>
                            <img src={urlPoster} />
                            <img className="play-btn" src={playbutton} onClick={(e) => handleOpenDetail(movie.id)}/>
                            <p>{movie.title || movie.name}</p>
                        </SwiperSlide>
                    )    
                })}
            </Swiper>
        </div>
    )
}

export default HeroSlider;