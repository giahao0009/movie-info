import logo from '../../images/logo.png'
import './Logo.scss'

function Logo() {
    return (
        <div className="logo">
            <img src={logo}/>
            <p>MovieInfo</p>
        </div>
    )
}

export default Logo