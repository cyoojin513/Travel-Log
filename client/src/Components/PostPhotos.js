/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PostPhotoContainer } from '../Styles/PostPhotos.style'

function PostPhotos({currentSlideId, currentUser, updatingIsLeased}) {
  
  const [selectedImages, setSelectedImages] = useState([])

  const history = useHistory()

  function imageHandleChange(e) {
    if(e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      
      setSelectedImages((images) => images.concat(fileArray))
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file)
      )
    }
  }

  function renderPhotos(source) {
    return source.map((photo) => {
      return <img 
        src={photo} 
        key={photo} 
        className='renderedPhotos' 
        onClick={() => renderDelete(photo)}
      />
    })
  }

  function renderDelete(source) {
    const updatedList = [...selectedImages]
    updatedList.splice(selectedImages.indexOf(source), 1)
    setSelectedImages(updatedList)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData()
    const uploadingImages = e.target.image.files

    for (let i = 0; i < uploadingImages.length; i++) {
      data.append("image", e.target.image.files[i])
      data.append("slideshow_id", currentSlideId)
      submitToAPI(data)
    }

    setTimeout(() => {updateIsReleased()}, '500')

  }

  function submitToAPI(data) {
    fetch('/photos', {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .catch((error) => console.error(error))
  }

  function updateIsReleased() {
    fetch(`/slideshows/${currentSlideId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        isReleased: true
      })
    })
      .then(res => res.json())
      .then(res => {
        updatingIsLeased(res)
        history.push(`/user/${currentUser.id}`)
      })
  }

  return (
    <PostPhotoContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
          type='file' 
          multiple 
          name='image' 
          id='image'
          onChange={imageHandleChange}
        />
        <button type='submit'>Submit Film</button>
      </form>
      {renderPhotos(selectedImages)}
    </PostPhotoContainer>
  )
}

export default PostPhotos