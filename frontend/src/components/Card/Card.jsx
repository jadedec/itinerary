import "./Card.scss";
import pic from "../../assets/images/pic.png";
//import { Link } from "react-router-dom";

const Card = ({id,destination,img,createdBy,country,route}) => {
    
    const buttonJSX = (
        //<Link to={`/punk-api/beer/${id}`} key={id}>
            <button className="card-content__button">DETAIL</button>
        //</Link>
    )

    return (
        <div className="card">
            {img ? <img className="card-img"
                src={img}
                alt={destination}
                />
            :<img className="card-img"
                src={pic}
                alt={destination}
                />}
            <h3 className="card-name">{destination}</h3>

            <div className="card-content">
            <h3 className="card-content__name">{destination}</h3>
            <p className="card-content__character card-content__character-tagline">{destination} in {country}</p>
                <p className="card-content__character">createdBy: {createdBy} </p>
                <p className="card-content__character"> { route}</p>
            
            {buttonJSX}
            </div>
        </div>

    )
}


export default Card;