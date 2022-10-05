// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
// Styling
import { MovieContainer } from '../Styles/Movie.style'

function Movie({currentUser, deleteRendered}) {

  const [ slideshow, setSlideshow ] = useState([])
  const [ errors, setErrors ] = useState(false)

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
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => setSlideshow(data))
      }
    })
  }, [])

  const photoObject = slideshow.photos

  function photoUrls() {
      if (photoObject.length == 1) {
        return <img src={photoObject[0].image_url} className='photo' alt='slide' key={0}/>
      } else if (photoObject.length == 0) {
          return <h5>Please add photos</h5> 
      } else { 
          return photoObject.map((i) => 
            <img src={i.image_url} className='photo' alt='slide' key={i.index}/>
          )

      }
  }

  function renderSlideshow() {
    return photoObject ? photoUrls() : <h5>Please add photos</h5> 
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
      <div className='center-grid'>
        <div className='first-column'>
          <div className='city-country-container'>
            <h1>{slideshow.city}</h1>
            <h5 id='country'>{slideshow.country}</h5>
          </div>
          <h5 id='note'>{slideshow.note}</h5>
        </div>
        <div className='second-column'>
          <button onClick={() => history.push(`/editfilm/${slideshowId}`)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        {renderSlideshow()}
        <h5>{slideshow.date}</h5>
      </div>
    </MovieContainer>
  )
}

export default Movie


// function hasDuplicates (array) {
//   for (let a = 0; a < array.length; a++) {
//     for (let b = 0; b < array.length; b++) {
//       if (a == b) continue;
//       if(array[a] == array[b]) {
//         return true
//       }
//     }
//   }
//   return false
// }

