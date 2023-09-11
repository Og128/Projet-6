import './styles.scss'

function Cards(props) {
    
    return (
        <>
            <div className="card" key={props.data.id}>
                <img className="cover-img" src={props.data.cover} alt={props.data.title} />
                <h3 className="card-title">{props.data.title}</h3>
            </div>
        </>
    )
}

export default Cards;