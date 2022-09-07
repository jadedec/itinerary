import Nav from '../Navbar/Navbar'

import './Layout.scss'

const Layout = ({ showNavbar = true }) => {
  const layoutJsx = <>{showNavbar && <Nav />}</>

  return <div className="layout">{layoutJsx}</div>
}

export default Layout
