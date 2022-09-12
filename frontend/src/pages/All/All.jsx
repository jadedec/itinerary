import './All.scss'
import CardList from '../../containers/CardList/CardList'
import { useState, useEffect } from 'react'
import Layout from '../../containers/Layout/Layout'
//import itineraries from '../../data/itineraries'

const All = () => {
  const [itineraries, setItineraries] = useState([])

  const getItineraries = async () => {
    try{let url = 'http://localhost:8080/itineraries'
    const response = await fetch(url)
    let Itineraries = await response.json
    setItineraries(Itineraries)
    } catch (error) {
      console.log(error);
  }}

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
