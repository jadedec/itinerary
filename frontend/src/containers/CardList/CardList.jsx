import './CardList.scss'
import Card from '../../components/Card/Card'

const CardList = ({ itinerariesArr }) => {
  const cardListJSX = itinerariesArr.map(itinerary => {
    return (
      <Card
        key={itinerary.id}
        id={itinerary.id}
        destination={itinerary.destination}
        img={itinerary.image_url}
        country={itinerary.country}
        route={itinerary.route}
      />
    )
  })

  const message = <p>Sorry. No itinerary has been found.</p>

  return (
    <div className="cardList">
      {itinerariesArr.length?cardListJSX:message}
    </div>
  )
}

export default CardList
