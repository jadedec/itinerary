import './Navbar.scss'
import menu from '../../assets/images/menu.svg'

import Menu from '../../components/Menu/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ search, handleInput, reset }) => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="nav">
      {showMenu && <Menu toggleMenu={toggleMenu} search={search} handleInput={handleInput} />}
      <img onClick={toggleMenu} src={menu} className="nav__item" alt="menu icon" />
      <Link to="/home" className="nav__heading" onClick={reset}>
        ITINERARY
      </Link>
      <Link to="/all" className="nav__heading" onClick={reset}>
        ALL
      </Link>
      <Link to="/manage" className="nav__heading" onClick={reset}>
        MANAGE
      </Link>
      <Link to="/new" className="nav__heading" onClick={reset}>
        NEW
      </Link>
    </nav>
  )
}

export default Nav
