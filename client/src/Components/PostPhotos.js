import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function PostPhotos({currentSlideId}) {
  const [image, setImage] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData()
    data.append("post[image]", e.target.image.files[0])
    data.append("post[slideshow_id]", currentSlideId)
    submitToAPI(data)
  }

  console.log(currentSlideId)

  function submitToAPI(data) {
    fetch('/photos', {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then((data) => {
        setImage(data.image_url)
        console.log(data)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='file'
          multiple
          name='image'
          id='image'
        />
        <button type='submit'>Submit Film</button>
      </form>
    </div>
  )
}

export default PostPhotos