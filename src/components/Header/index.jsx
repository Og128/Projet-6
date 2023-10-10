import Logo from '../../assets/logo.png'
import "./styles.scss"
import { NavLink, Link } from "react-router-dom";


function Header() {
    return (
        <>
            <nav className='navbar'>
                <Link to="/Projet_6_ReactJs/home">
                    <img className="navimg" src={Logo} alt="logo Kasa" />
                </Link>
                <ul className='navbar-link'>
                    <NavLink className="navlink" to="/Projet_6_ReactJs/home">Accueil </NavLink>
                    <NavLink className="navlink" to="/Projet_6_ReactJs/about">A Propos </NavLink>
                </ul>
            </nav>
        </>
    )
}

export default Header