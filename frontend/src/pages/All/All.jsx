import './All.scss'
import CardList from '../../containers/CardList/CardList'
import { useState, useEffect } from 'react'
import Layout from '../../containers/Layout/Layout'

const All = () => {
  const [itineraries, setItineraries] = useState([])

  const getItineraries = async () => {
    let url = 'http://localhost:8080/itineraries'
    const response = await fetch(url)
    let Itineraries = await response.json
    setItineraries(Itineraries)
  }

  useEffect(() => {
    getItineraries()
  }, [])

  return (
    <>
      <Layout />
      <CardList itinerariesArr={itineraries} />
    </>
  )
}

export default All
