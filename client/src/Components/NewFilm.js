import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function NewFilm({currentUser, updateSlideshows, getSlideId}) {
  const [ slideInfo, setSlideInfo ] = useState({
    city:'',
    country:'',
    date:'',
    note:''
  })
  const { city, country, date, note } = slideInfo
  
  const [ errors, setErrors ] = useState([])
  const history = useHistory()


  function handleSubmit(e) {
    e.preventDefault()
    const slideshow = {city, country, date, note, user_id: currentUser.id, isReleased: false}
    handlePost(slideshow, `/postphotos`)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setSlideInfo({ ...slideInfo, [name]: value })
  }
  
  function handlePost(item, address) {
    fetch('/slideshows',{
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(item)
    }).then(res => {
      if (res.ok) {
          res.json().then(slide => {
            updateSlideshows(slide)
            getSlideId(slide.id)
            history.push(address)
          })
      } else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
      }
    })
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
          type='text'
          name='city'
          placeholder='City' 
          value={city}
          onChange={handleChange}
        />
        <input 
          type='text'
          name='country'
          placeholder='Country' 
          value={country}
          onChange={handleChange}
        />
        <input 
          type='text'
          name='date'
          placeholder='year.month.date' 
          value={date}
          onChange={handleChange}
        />
        <input 
          type='text'
          name='note'
          placeholder='Note' 
          value={note}
          onChange={handleChange}
        />
        <button type='submit'>Next</button>
      </form>
      {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
    </div>
  )
}

export default NewFilm