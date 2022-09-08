import Nav from '../Navbar/Navbar'
import { useState } from 'react'
import './Layout.scss'

const Layout = ({ showNavbar = true }) => {
  const [search, setSearch] = useState('')

  //handle function
  const handleInput = event => {
    setSearch(event.target.value)
  }

  const handleReset = () => setSearch('')
  const layoutJsx = (
    <>{showNavbar && <Nav search={search} handleInput={handleInput} reset={handleReset} />}</>
  )

  return <div className="layout">{layoutJsx}</div>
}

export default Layout
