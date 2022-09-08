import './InputBox.scss'

const InputBox = ({ label, className, placeholder, handleInput }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onInput={handleInput}
      name={label}
      className={className + '__input'}
    />
  )
}
export default InputBox
