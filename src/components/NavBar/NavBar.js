import React, {useState, useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './NavBar.scss'
import {useScrollY} from '../hooks'
import Logo from '../Logo/Logo'
import MovieSearch from '../MovieSearch/MovieSearch'

const arrayLink = [
    {
        display: 'Homepage',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movies'
    },
   
]

function NavBar() {
    const [displayMenu, setDisplayMenu] = useState(false)
    const [scrollY]  = useScrollY()
    const location = useLocation()
    const navigate = useNavigate()
    const active = arrayLink.findIndex(e => e.path === location.pathname)
    
    const handleOpenMenu = () => {
        setDisplayMenu(!displayMenu)
        if (displayMenu) {
            document.querySelector('.navbar').style.overflow = 'visible';
            document.querySelector('.navbar').style.backgroundColor = '#0f0f0f';
        }else {
            document.querySelector('.navbar').style.overflow = 'hidden';
        }
    }

    const handleGoHome = () => {
        navigate('movie-info/')
    }

    return (
        <React.Fragment>
            <nav className="navbar"
                 style={scrollY < 50 ? {backgroundColor: 'transparent'} : null}
            >   
                <div onClick = {handleGoHome}>
                    <Logo/>
                </div>
                <ul 
                    className="navbar-list"
                >
                    {
                        arrayLink.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to ={e.path}>{e.display}</Link>
                            </li>
                        ))
                    }
                    <li><MovieSearch/></li>
                </ul>
               
                <div className="menu-icon" onClick={handleOpenMenu}>
                    <AiOutlineMenu/>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default NavBar