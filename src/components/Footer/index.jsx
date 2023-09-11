import './styles.scss'
import Logo from '../../assets/LogoFooter.png'

function Footer() {
    return (
        <div>
            <footer className='footer'>
                <img className="img-footer" src={Logo} alt="Logo kasa" />
                <p className='msg-footer'>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    )
}

export default Footer;