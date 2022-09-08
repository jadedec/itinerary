import './Home.scss'
// import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Layout from '../../containers/Layout/Layout'

const Home = () => {
  // const [randomItinerary, setRandomItinerary] = useState('')

  // const getRandomItinerary = async () => {
  //   const response = await fetch('http://localhost:8080/random-itinerary')
  //   const randomItinerary = await response.json
  //   setRandomItinerary(randomItinerary)
  // }

  // useEffect(() => {
  //   getRandomItinerary()
  // }, [])

  const randomItinerary = {
    id: 1,
    createdBy: 'Bob',
    destination: 'Barcelona',
    country: 'Spain',
    route: [
      'La Pedrera',
      'Casa Milà',
      'Casa Batlló',
      'Casa Atmetller',
      'Plaza Catalunya',
      'La Rambla',
      'Font de Canaletas',
    ],
  }

  return (
    <>
      <Layout />
    <div className="home">
        <h2 className='home__title'> A trip for you</h2>
        <Card
          id={randomItinerary.id}
          destination={randomItinerary.destination}
          img={randomItinerary.img}
          createdBy={randomItinerary.createdBy}
          country={randomItinerary.country}
          route={randomItinerary.route}
        />
      </div>
</>
  )
}

export default Home
