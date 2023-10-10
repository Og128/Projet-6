import './styles.scss'
import { useLocation } from "react-router-dom";

function Banner() {
  const path = useLocation().pathname;
  const location = path.split("/Projet_6_ReactJs/")[1];
 
  return (
    <div className="banner">
      <div className={`background-banner ${location === '' || '/' ? 'home' : location}`} >
        <h1 className="title-banner">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}
export default Banner;