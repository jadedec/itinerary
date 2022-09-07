import './All.scss'
import CardList from '../../containers/CardList/CardList'
import Nav from '../../containers/Navbar/Navbar'
import { useState, useEffect } from 'react'

const All = () => {
  const [itineraries, setItineraries] = useState([])

  const [search, setSearch] = useState('')

  //handle function
  const handleInput = event => {
    setSearch(event.target.value)
  }

  const handleReset = () => setSearch('')

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
      <Nav search={search} handleInput={handleInput} reset={handleReset} />

      <CardList itinerariesArr={itineraries} />
    </>
  )
}

export default All
