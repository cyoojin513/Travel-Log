import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function PostPhotos({currentSlideId}) {
  const [image, setImage] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData()
    const uploadingImages = [e.target.image.files]

    uploadingImages.map((image) => 
      data.append("post[images]", images),
      data.append("slideshow_id", currentSlideId)
    )

    submitToAPI(data)
    // data.forEach(uploadingData => submitToAPI(uploadingData))
  }

  function submitToAPI(data) {
    fetch('/photos', {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        setImage(data.image_url)
        console.log("Post successfully!", data)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='file' multiple name='image' id='image'/>
        <button type='submit'>Submit Film</button>
      </form>
    </div>
  )
}

export default PostPhotos