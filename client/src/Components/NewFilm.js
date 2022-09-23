import { AppContext } from 'App'
import React from 'react'
import { useContext, useState } from 'react'

function NewFilm({currentUser, updateSlideshows}) {
  const [ slideInfo, setSlideInfo ] = useState({
    city:'',
    country:'',
    date:'',
    note:''
  })
  const { city, country, date, note } = slideInfo

  const [ errors, setErrors ] = useState([])
  // const [image, setimage] = useContext(AppContext)


  function handleSubmit(e) {
    e.preventDefault()
    const slideshow = {city, country, date, note, user_id: currentUser.id, isReleased: false}

    fetch('/slideshows',{
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(slideshow)
    }).then(res => {
      if (res.ok) {
          res.json().then(slide => {
            updateSlideshows(slide)
            console.log(slide.id)
          })
      } else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
      }
    })
  }

  function handleChange(e) {
    const { name, value } = e.target
    setSlideInfo({ ...slideInfo, [name]: value })
  }

  // function handleImage(e) {
  //   const data = new FormData()
  //   data.append("post[image]", e.target.image.files[0]);
  //   submitToAPI(data);
  // }

  // function submitToAPI(data) {

  // }

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
      {/* <form onSubmit={(e) => handleImage(e)}>
        <input
          type='file'
          name='image'
          id='image'
        />
      </form> */}
      {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
    </div>
  )
}

export default NewFilm