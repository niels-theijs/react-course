import "./card-container.styles.css"


const CardContainer = ({ object }) => {
    const { id, name, email } = object
    return (
        <div className="card-container">
            <img 
                alt={`monster ${name}`} 
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default CardContainer;