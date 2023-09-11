// import { useState } from "react";
import { useParams } from "react-router-dom";
import './styles.scss'
import datalogement from '../../components/Data/logements.json'
import { useState, useEffect, useRef } from "react";

function Gallery() {
    const timerRef = useRef(null)
    const [slideIndex, setSlideIndex] = useState(0);
    const { id } = useParams();
    const logementId = datalogement.filter((el) => {
        return el.id === id
    })
    const prevSlide = () => {
        const isFirstSlide = slideIndex === 0
        const newIndex = isFirstSlide ? logementId[0].pictures.length - 1 : slideIndex - 1;
        setSlideIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = slideIndex === logementId[0].pictures.length - 1;
        const newIndex = isLastSlide ? 0 : slideIndex + 1;
        setSlideIndex(newIndex);
    }
    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            nextSlide();
        }, 5000)
    })

    return (
        <>
            <div className="container-gallery">
                {logementId.map((item) => {
                    return <img className="gallery-img" src={item.pictures[slideIndex]} alt={item.title} key={item.id} />
                })}
                <div className={logementId[0].pictures.length === 1 ? "none" : 'slide-number'}>{`${slideIndex + 1} / ${logementId[0].pictures.length}`}</div>
                <button onClick={prevSlide} className={logementId[0].pictures.length === 1 ? "none" : "gallery-arrow left"}><svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                    <path d="M0.959961 72.9877L8.03996 80.0677L47.64 40.4677L8.03996 0.867676L0.959961 7.94768L33.48 40.4677L0.959961 72.9877Z" fill="white" />
                </svg></button>
                <button onClick={nextSlide} className={logementId[0].pictures.length === 1 ? "none" : "gallery-arrow right"}><svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.959961 72.9877L8.03996 80.0677L47.64 40.4677L8.03996 0.867676L0.959961 7.94768L33.48 40.4677L0.959961 72.9877Z" fill="white" />
                </svg></button>
            </div>
        </>
    )
}

export default Gallery;