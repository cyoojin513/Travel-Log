// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
// Styling
import { FormContainer, Error } from '../Styles/NewFilm.style'

function EditFilm({currentUser, updatingIsReleased, getSlideId}) {
  
  const [ address, setAddress ] = useState("")
  const [ date, setDate ] = useState("")
  const [ note, setNote ] = useState("")
  const [ city, setCity ] = useState("")
  const [ country, setCountry ] = useState("")
  const [ lon, setLon ] = useState("")
  const [ lat, setLat ] = useState("")

  const [ errors, setErrors ] = useState([])
  const history = useHistory()
  const params = useParams()
  const slideshowId = params.id

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
    fetch(`/slideshows/${slideshowId}`)
    .then(res => res.json())
    .then(res => {
      setAddress(res.address)
      setCity(res.city)
      setCountry(res.country)
      setLon(res.lon)
      setLat(res.lat)
      setDate(res.date)
      setNote(res.note)
    })
  },[])

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

  function handleSubmit(e){
    e.preventDefault()
    const slideshow = {
      address: address,
      city: city,
      country: country,
      lon: lon,
      lat: lat,
      date: date, 
      note: note
    }
    handlePatch(slideshow)
  }

  function handlePatch(item) {
    fetch(`/slideshows/${slideshowId}`,{
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(item)
    })
    .then(res => {
      if(res.ok){
        res.json().then(slide =>{
          updatingIsReleased(slide)
          getSlideId(slide.id)
          history.push('/postphotos')
        })
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
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
              name='note'
              placeholder='Travel note' 
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div className='edit-button-grid'>
            <button className='back' onClick={() => history.push(`/user/${currentUser.id}`)}>Back to my page</button>
            <button className='submit' type='submit'>Next</button>
          </div>
        </form>
      </FormContainer>
    </div>
  )
}

export default EditFilm