import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Cards from '../../components/Card'
import '../../styles/index.scss'
import './styles.scss'
import datalogement from '../../components/Data/logements.json'

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Banner />
        <div className="cards-container">
          {datalogement.map((data) => {
            return (
              <a className="card-link" href={`/Projet_6_ReactJs/logement/${data.id}`} key={data.id}>
                <Cards
                   data={data} />
              </a>
            )
          })}
        </div>
      </div >
      <Footer />
    </>
  );
}

export default App;
