import './Home.scss'
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Layout from '../../containers/Layout/Layout'

const Home = () => {
  const [randomItinerary, setRandomItinerary] = useState('')

  const getRandomItinerary = async () => {
    const response = await fetch('http://localhost:8080/random-itinerary')
    const randomItinerary = await response.json
    setRandomItinerary(randomItinerary)
  }

  useEffect(() => {
    getRandomItinerary()
  }, [])

  return (
    <Layout>
      <div className="home">
        <p>Enjoy your holiday!</p>

        <h2> A trip for you</h2>
        <Card
          id={randomItinerary.id}
          destination={randomItinerary.destination}
          img={randomItinerary.img}
          createdBy={randomItinerary.createdBy}
          country={randomItinerary.country}
          route={randomItinerary.route}
        />
      </div>
    </Layout>
  )
}

export default Home
