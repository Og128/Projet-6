import './styles.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logements from '../../components/Logements'
import datalogement from '../../components/Data/logements.json'
import { useParams } from 'react-router-dom'
import Error from '../../components/Error'


function Logement() {
    const { id } = useParams()
    const logement = datalogement.find(e => e.id === id);
    
    if (logement === undefined) {
        return (
            <>
                <Error />
            </>
        )
    }
    return (
        <>
            <div className='main'>
                <Header />
                <Logements
                    logement={logement} />
            </div>
            <Footer />
        </>
    )
}

export default Logement;