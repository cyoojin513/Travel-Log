// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function EditFilm({updatingIsReleased, getSlideId}) {
  const [ address, setAddress ] = useState("")
  const [ date, setDate ] = useState("")
  const [ note, setNote ] = useState("")

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
      setDate(res.date)
      setNote(res.note)
    })
  },[])

  // function handleChange(e) {
  //   const value = e.target.value
  //   setSlideInfo({ ...slideInfo,
  //     [e.target.address]: value,
  //     encodedAddress: encodeURIComponent(e.target.address.value),
  //     [e.target.date]: value,
  //     [e.target.note]: value
  //   })
  // }

  function handleSubmit(e){
    e.preventDefault()

    const codedAddress = encodeURIComponent(address)
    const slideshow = {
      address: address,
      encodedAddress: codedAddress, 
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