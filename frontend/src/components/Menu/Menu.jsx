import './Menu.scss'
import SearchBox from '../SearchBox/SearchBox'
import close from '../../assets/images/close.svg'

const Menu = ({ toggleMenu, search, handleInput }) => {
  return (
    <section className="nav-menu">
      <div className="nav-menu__content">
        <img src={close} alt="Close" className="nav-menu__cross" onClick={toggleMenu} />
        <SearchBox label={'search by city:'} handleInput={handleInput} search={search} />
        <SearchBox label={'search by country:'} handleInput={handleInput} search={search} />
      </div>
    </section>
  )
}

export default Menu
