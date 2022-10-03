import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
// Styling
import { FormContainer, Error } from '../Styles/NewFilm.style'

function NewFilm({currentUser, updateSlideshows, getSlideId}) {
  const [ address, setAddress ] = useState("")
  const [ date, setDate ] = useState("")
  const [ note, setNote ] = useState("")
  const [ city, setCity ] = useState("")
  const [ country, setCountry ] = useState("")
  const [ lon, setLon ] = useState("")
  const [ lat, setLat ] = useState("")

  const [ errors, setErrors ] = useState([])
  const history = useHistory()

  useEffect(() => {
    if (!currentUser) {
      fetch('/me').then((res) => {
        if (!res.ok) {
            history.push('/loginerror')
        }
      })
    }
  }, [])

  useEffect(() => {
    if (address) {
      fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=4bf748cc72c4440b8860db33cb8c88fe`)
        .then(resp => resp.json())
        .then((res) => {
          const geocodeResult = res.features[0].properties
          setCity(geocodeResult.city)
          setCountry(geocodeResult.country)
          setLon(geocodeResult.lon)
          setLat(geocodeResult.lat)
      })
    }
  }, [address])

  function handleSubmit(e) {
    e.preventDefault()
    const slideshow = {
      address: address,
      city: city,
      country: country,
      lon: lon,
      lat: lat,
      date: date, 
      note: note, 
      user_id: currentUser.id,
      isReleased: false
    }
    handlePost(slideshow, `/postphotos`)
  }

  function handlePost(item, urlAddress) {
    fetch('/slideshows',{
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(item)
    }).then(res => {
      if (res.ok) {
          res.json().then(slide => {
            updateSlideshows(slide)
            getSlideId(slide.id)
            history.push(urlAddress)
          })
      } else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
      }
    })
  }

  return (
    <div>
      {errors? errors.map(error => <Error><div className='error-text'> {error[0]} {error[1]} </div></Error>) :null}
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='first-row'>
            <input 
              type='text'
              name='address'
              placeholder='Address' 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input 
              type='text'
              name='date'
              placeholder='Year.month.date' 
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className='second-row'>
            <textarea
              // type='text'
              name='note'
              placeholder='Travel note' 
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div className='button-grid'>
            <button type='submit' className='new-film-button'>Next</button>
          </div>
        </form>
      </FormContainer>
    </div>
  )
}

export default NewFilm