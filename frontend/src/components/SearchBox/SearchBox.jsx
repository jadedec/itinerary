import './SearchBox.scss'
import InputBox from '../InputBox/InputBox'

const SearchBox = ({ label, search, handleInput }) => {
  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label">
        {label}
      </label>
      <InputBox label={search} className={"search-box"} placeholder={"Search..."} handleInput={handleInput}/>

    </form>
  )
}
export default SearchBox
