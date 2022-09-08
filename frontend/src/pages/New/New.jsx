import './New.scss'

import InputBox from '../../components/InputBox/InputBox'
import Layout from '../../containers/Layout/Layout'
import { useState, useEffect } from 'react'

const New = () => {
  const [submit, setSubmit] = useState(false)

  const handleSubmit = async event => {
    const route = []
    for (let i = 3; i < 8; i++) {
      if (event.target[i].value !== '') {
        route.push(event.target[i].value)
      }
    }

    await fetch(`http://localhost:8080/itinerary/create`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        destination: `${event.target[0].value}`,
        country: `${event.target[1].value}`,
        createdBy: `${event.target[2].value}`,
        route: route,
        note: `${event.target[8].value}`,
      }),
    })
    setSubmit(true)
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  const message = 'new itinerary added successfully'
  const newJSX = (
    <div className="new__form">
      <label className="new__form--label" htmlFor="destination">
        Destination:
      </label>
      <InputBox label={'destination'} placeholder={'the Destination city'} />
      <br />

      <label className="new__form--label" htmlFor="country">
        Country:
      </label>
      <InputBox label={'country'} />
      <br />

      <label className="new__form--label" htmlFor="created by">
        User name:
      </label>
      <InputBox label={'created by'} placeholder={'name...'} />
      <br />

      <label className="new__form--label" htmlFor="route">
        Route:
      </label>
      <div className="new__form--label-list">
        <InputBox label={'route'} placeholder={'first ...'} />
        <InputBox label={'route'} placeholder={'second ...'} />
        <InputBox label={'route'} placeholder={'third ...'} />
        <InputBox label={'route'} placeholder={'fourth ...'} />
        <InputBox label={'route'} placeholder={'fifth ...'} />
      </div>
      <br />

      <label className="new__form--label" htmlFor="note">
        Note:
      </label>
      <InputBox label={'note'} placeholder={'note...'} />
      <br />

      <button className="new__form--button" type="submit" onClick={handleSubmit}>
        CREATE
      </button>
    </div>
  )

  return (
    <>
      <Layout />
      <div className="new">
        <h1>Add new itinerary</h1>
        {submit ? message : newJSX}
      </div>
    </>
  )
}

export default New
