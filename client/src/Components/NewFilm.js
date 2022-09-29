import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function NewFilm({currentUser, updateSlideshows, getSlideId}) {
  const [ address, setAddress ] = useState("")
  const [ date, setDate ] = useState("")
  const [ note, setNote ] = useState("")
  // const [ slideInfo, setSlideInfo ] = useState(
  //   {
  //   address:'',
  //   date:'',
  //   note:''
  // })
  // const { address, date, note } = slideInfo
  
  const [ errors, setErrors ] = useState([])
  const history = useHistory()


  function handleSubmit(e) {
    e.preventDefault()

    const codedAddress = encodeURIComponent(address)
    const slideshow = {
      address: address,
      encodedAddress: codedAddress, 
      date: date, 
      note: note, 
      user_id: currentUser.id,
      isReleased: false
    }
    handlePost(slideshow, `/postphotos`)
  }


  // function handleChange(e) {
  //   const { name, value } = e.target
  //   setSlideInfo({ ...slideInfo, [name]: value })
  // }
  
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

export default NewFilm