import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import DropDown from "../../components/Dropdown";
import './styles.scss'

function About() {
    return (
        <>
            <div className="main">
                <Header />
                <Banner />
                <div className="container-dropdown">
                    <DropDown
                        key="1"
                        title="Fidélité"
                        text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
                    />
                    <DropDown
                        key="2"
                        title="Respect"
                        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une excluse de notre plateforme" />
                    <DropDown
                        key="3"
                        title="Service"
                        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une excluse de notre plateforme"
                    />
                    <DropDown
                        key="4"
                        title="Sécurité"
                        text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipe de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;