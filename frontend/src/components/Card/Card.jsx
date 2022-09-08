import './Card.scss'
import pic from '../../assets/images/pic.png'
import { Link } from 'react-router-dom'

const Card = ({ id, destination, img, createdBy, country, route }) => {
  const buttonJSX = (
    <Link to={`/itinerary/${id}`} key={id}>
      <button className="card-content__button">DETAIL</button>
    </Link>
  )

  const routeJSX = route.map(place => {
    return ' -> ' + place
  })

  return (
    <div className="card">
      {img ? (
        <img className="card-img" src={img} alt={destination} />
      ) : (
        <img className="card-img" src={pic} alt={destination} />
      )}

      <div className="card-content">
        <h3 className="card-content__name">{destination}</h3>
        <p className="card-content__character card-content__character-tagline">
          {destination} in {country}
        </p>
        <p className="card-content__character">created by: {createdBy} </p>
        <p className="card-content__character"> {routeJSX}</p>

        {buttonJSX}
      </div>
    </div>
  )
}

export default Card
