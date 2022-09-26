import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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



  return (
    <div>
      
    </div>
  )
}

export default Movie