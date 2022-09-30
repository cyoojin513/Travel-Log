// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function EditFilm({updatingIsReleased, getSlideId}) {
  const [ address, setAddress ] = useState("")
  const [ date, setDate ] = useState("")
  const [ note, setNote ] = useState("")
  const [ city, setCity ] = useState("")
  const [ country, setCountry ] = useState("")
  const [ lon, setLon ] = useState("")
  const [ lat, setLat ] = useState("")

  // const [ slideInfo, setSlideInfo ] = useState({
  //   address:'',
  //   encodedAddress:'',
  //   date:'',
  //   note:''
  // })

  const [ errors, setErrors ] = useState([])
  const history = useHistory()
  const params = useParams()
  const slideshowId = params.id

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
      <form onSubmit={(e) => handleSubmit(e)}>
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
          placeholder='year.month.date' 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input 
          type='text'
          name='note'
          placeholder='Note' 
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type='submit'>Next</button>
      </form>
      {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
    </div>
  )
}

export default EditFilm