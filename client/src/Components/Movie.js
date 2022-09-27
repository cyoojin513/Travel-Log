import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContainer } from '../Styles/Movie.style'

function Movie() {

  const [ slideshow, setSlideshow ] = useState([])

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
        return <img src={photoObject[0].image_url} className='slideshow' alt='slide'/>
      } else if (photoObject.length == 0) {
          return null
      } else { 
          return photoObject.map((i) => 
            <img src={i.image_url} className='slideshow' alt='slide'/>
          )
      }
  }

  function handleEmptyObject() {
    return photoObject ? photoUrls() : null 
  }

  return (
    <MovieContainer>
      {handleEmptyObject()}
    </MovieContainer>
  )
}

export default Movie