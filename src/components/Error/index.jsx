import Header from '../Header'
import "./styles.scss"
import { Link } from "react-router-dom";
import Footer from '../Footer'

function Error() {
    return (
        <>
            <div className='main'>
                <Header />
                <main className='error'>
                    <p className='num-error'>404</p>
                    <p className="msg-error">Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/" className="return-link">Retourner sur la page d'accueil</Link>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Error