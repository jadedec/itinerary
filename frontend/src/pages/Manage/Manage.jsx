import './Manage.scss'

import Layout from '../../containers/Layout/Layout'
import { useState } from 'react'
import InputBox from '../../components/InputBox/InputBox'

const Manage = () => {
  const [target, setTarget] = useState([])
  const [valid, setValid] = useState(false)
  const [deleted, setDeleted] = useState(false)

  const handleTarget = async event => {
    const response = await fetch(`http://localhost:8080/itinerary/${event.target.value}`)

    if (response.ok) {
      const itineraryToDelete = await response.json
      setTarget(itineraryToDelete)
      setValid(true)
    } else {
      setValid(false)
    }
  }

  const handleDelete = async () => {
    await fetch(`http://localhost:8080/itinerary/${target.id}`, {
      method: 'DELETE',
    })
    setDeleted(true)
  }

  return (
    <>
      <Layout />
      <div className="manage">
        <h1>Mange your itineraries</h1>
        {!deleted && (
          <form onSubmit={valid ? handleDelete : handleTarget}>
            <label htmlFor="target to delete">Itinerary ID:</label>
            <InputBox label={'TO DELETE'} className={'manage'} placeholder={'Itinerary ID...'} />
            <button
              className="manage__button"
              type="submit"
              onClick={handleDelete}
              disabled={valid}
            >
              DELETE
            </button>
          </form>
        )}
      </div>
    </>
  )
}

export default Manage
