import {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import './MovieSearch.scss'



function MovieSearch() {
    const [keywords, setKeywords] = useState('')
    const navigate = useNavigate()

    const handleChangeInput = (e) => {
        let keywords = e.target.value
        setKeywords(keywords)
        keywords.length > 0 ? navigate(`/searchMovie?keywords=${keywords.trim()}`) : navigate('/')
    }

    return (
            <div className="search-box">
                <input
                    type='text' 
                    placeholder="Enter name movie ..."
                    onChange={(e) => handleChangeInput(e)}
                    value={keywords}
                />
                <AiOutlineSearch/>
            </div>
    )
}

export default MovieSearch