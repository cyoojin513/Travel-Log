// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { MovieContainer } from '../Styles/Movie.style'

function Movie({currentUser, deleteRendered}) {

  const [ slideshow, setSlideshow ] = useState([])
  const [ errors, setErrors ] = useState(false)

  const history = useHistory()
  const params = useParams()
  const slideshowId = params.id

  useEffect(() => {
    fetch(`/slideshows/${slideshowId}`)
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => setSlideshow(data))
      }
    })
  }, [])

  const photoObject = slideshow.photos

  function photoUrls() {
      if (photoObject.length == 1) {
        return <img src={photoObject[0].image_url} className='slideshow' alt='slide' key={0}/>
      } else if (photoObject.length == 0) {
          return null
      } else { 
          return photoObject.map((i) => 
            <img src={i.image_url} className='slideshow' alt='slide' key={i.index}/>
          )
      }
  }

  function handleEmptyObject() {
    return photoObject ? photoUrls() : null 
  }

  function handleDelete() {
    fetch(`/slideshows/${slideshowId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
        deleteRendered(slideshowId)
        setTimeout(() => {history.push(`/user/${currentUser.id}`)}, '500')
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }

  if(errors) return <h1>{errors}</h1>

  return (
    <MovieContainer>
      <h3>{slideshow.city}</h3>
      <h5>{slideshow.country}</h5>
      <h5>{slideshow.date}</h5>
      <h5>{slideshow.note}</h5>
      {handleEmptyObject()}
      <button onClick={() => history.push(`/editfilm/${slideshowId}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </MovieContainer>
  )
}

export default Movie