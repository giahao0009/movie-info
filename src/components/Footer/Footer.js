import Logo from '../Logo/Logo'
import background from '../../images/imagebg.jpg'
import '../../scss/App.scss'
import './Footer.scss'

function Footer(){
    return (
        <footer className="footer" style = {{backgroundImage: `url(${background})`}}>
            <div className="footer-content">
                <div className="footer-content-logo mb-2">
                    <Logo/>
                </div>
                <div className="footer-content-menus">
                    <ul className="footer-content-menu">
                        <li>Home</li>
                        <li>Contact us</li>
                        <li>Term of service</li>
                        <li>About us</li>
                    </ul>
                    <ul className="footer-content-menu">
                        <li>Live</li>
                        <li>FAQ</li>
                        <li>Premium</li>
                        <li>Privacy</li>
                    </ul>
                    <ul className="footer-content-menu">
                        <li>You must watch</li>
                        <li>Recent release</li>
                        <li>Name: Nguyễn Gia Hào</li>
                        <li>Email: haodeptrai55@gmail.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer