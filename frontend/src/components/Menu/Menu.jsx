import './Menu.scss'
import SearchBox from '../SearchBox/SearchBox'
import FilterBoxes from '../FilterBoxes/FilterBoxes'
import close from '../../assets/images/close.svg'

const Menu = ({
  toggleMenu,
  search,
  handleInput,
  handleDestination,
  handleCountry,
}) => {
  return (
    <section className="nav-menu">
      <div className="nav-menu__content">
        <img src={close} alt="Close" className="nav-menu__cross" onClick={toggleMenu} />
        <SearchBox label={'YOUR CHOICE:'} handleInput={handleInput} search={search} />
        <div>
          <FilterBoxes
            label={'High Alcohol'}
            handleFilter={handleDestination}
            className="nav-menu__list"
          />
          <FilterBoxes
            label={'High Acidity'}
            handleFilter={handleCountry}
            className="nav-menu__list"
          />
        </div>
      </div>
    </section>
  )
}

export default Menu
