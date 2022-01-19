import {useState, useEffect} from 'react'
import {getGenreMovies} from '../../api/apiCaller'
import './GenresMovies.scss'

function GenresMovies() {
    const [genreMovies, setGenreMovies] = useState([])

    useEffect(() => {
        const getGenre = async () => {
            await getGenreMovies()
                    .then((data) => {
                        setGenreMovies(data.data.genres)
                    })
        }
        getGenre()
    }, [])

    return (
        <ul className="list-genres section mb-2">
            {genreMovies.map((genre) => (
                <li key={genre.id}>
                    {genre.name}
                </li>
            ))}
        </ul>
    )
}

export default GenresMovies