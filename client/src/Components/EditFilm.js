// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function EditFilm({updatingIsReleased, getSlideId}) {
  const [ slideInfo, setSlideInfo ] = useState({
    city:'',
    country:'',
    date:'',
    note:''
  })
  // const { city, country, date, note } = slideInfo

  const [ errors, setErrors ] = useState([])
  const history = useHistory()
  const params = useParams()
  const slideshowId = params.id

  useEffect(() => {
    fetch(`/slideshows/${slideshowId}`)
    .then(res => res.json())
    .then(setSlideInfo)
  },[])

  function handleChange(e) {
    const { name, value } = e.target
    setSlideInfo({ ...slideInfo, [name]: value })
  }

  function handlePatch(e){
    e.preventDefault()
    fetch(`/slideshows/${slideshowId}`,{
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(slideInfo)
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
      <form onSubmit={(e) => handlePatch(e)}>
        <input 
          type='text'
          name='city'
          placeholder='City' 
          value={slideInfo.city}
          onChange={handleChange}
        />
        <input 
          type='text'
          name='country'
          placeholder='Country' 
          value={slideInfo.country}
          onChange={handleChange}
        />
        <input 
          type='text'
          name='date'
          placeholder='year.month.date' 
          value={slideInfo.date}
          onChange={handleChange}
        />
        <input 
          type='text'
          name='note'
          placeholder='Note' 
          value={slideInfo.note}
          onChange={handleChange}
        />
        <button type='submit'>Next</button>
      </form>
      {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
    </div>
  )
}

export default EditFilm