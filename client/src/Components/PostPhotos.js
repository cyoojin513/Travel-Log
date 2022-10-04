/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { PostPhotoContainer } from '../Styles/PostPhotos.style'

function PostPhotos({currentSlideId, currentUser, updatingIsReleased}) {
  
  const [selectedImages, setSelectedImages] = useState([])

  const history = useHistory()

  useEffect(() => {
    if (!currentUser) {
      fetch('/me').then((res) => {
        if (!res.ok) {
            history.push('/loginerror')
        }
      })
    }
  }, [])

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
    setTimeout(() => {handleUpdate()}, '500')
  }

  function submitToAPI(data) {
    fetch('/photos', {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .catch((error) => console.error(error))
  }

  function handleUpdate() {
    fetch(`/slideshows/${currentSlideId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        isReleased: true
      })
    })
      .then(res => res.json())
      .then(res => {
        updatingIsReleased(res)
        history.push(`/user/${currentUser.id}`)
      })
  }

  return (
    <PostPhotoContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='first-row'>
          <h2>Select multiple photos</h2>
            <input 
              type='file' 
              multiple 
              name='image' 
              id='image'
              onChange={imageHandleChange}
            />
        </div>
        <div className='image-container-wrapper'>
          <div className='image-container'>
            {renderPhotos(selectedImages)}
          </div>
        </div>
        <div className='button-grid'>
          <button className='back' onClick={() => history.push(`/editfilm/${currentSlideId}`)}>Back</button>
          <button type='submit' className='submit'>Submit Film</button>
        </div>
      </form>
    </PostPhotoContainer>
  )
}

export default PostPhotos