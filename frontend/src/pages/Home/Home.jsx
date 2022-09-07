import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <p>
        Everyone wants their journey to be wonderful, and making an itinerary in advance is a great
        help. Here you can make your own itinerary to make it more well-planned and organised.
        <br />
        Anyway, enjoy your trip!
      </p>

      <Link to="/all" className="home__link">
        All
      </Link>
      <p className="home__explanation">
        Show all itineraries or search and filter for who you want.
      </p>

      <Link to="/new" className="home__link">
        New
      </Link>
      <p className="home__explanation">
        Update the database by adding a new entry or editing an existing one
      </p>

      <Link to="/manage" className="home__link">
        Manage
      </Link>
      <p className="home__explanation">Something wrong? Delete an entry from the database</p>
    </div>
  )
}

export default Home
