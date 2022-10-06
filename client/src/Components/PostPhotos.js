/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Error } from '../Styles/NewFilm.style'
// Styling
import { PostPhotoContainer } from '../Styles/PostPhotos.style'

function PostPhotos({currentSlideId, currentUser, updatingIsReleased, slideshows}) {
  
  const [ selectedImages, setSelectedImages ] = useState([])
  const [ error, setError ] = useState("")

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


  const slideshowPhotos = slideshows.filter((item) => item.id == currentSlideId)[0].photos

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData()
    const uploadingImages = e.target.image.files

    for (let i = 0; i < uploadingImages.length; i++) {
      data.append("image", e.target.image.files[i])
      data.append("slideshow_id", currentSlideId)

      setTimeout(() => {submitToAPI(data)}, 500)
      
      // if (slideshowPhotos.length === 0) {
      //   setTimeout(() => {submitToAPI(data)}, 500)
      // } else {setTimeout(() => {patchToAPI(data)}, 500)}
    }
    setTimeout(() => {handleUpdate(data)}, 500)
  }

  function submitToAPI(data) {
    fetch('/photos', {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .catch((error) => console.error(error))
  }

  // function patchToAPI(data) {
  //   fetch(`/photos/${slideshowPhotos.id}`, {
  //     method: 'DELETE'
  //   })
  //     .then(submitToAPI(data))
  // }

  function handleUpdate(data) {
    if (data) {
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
    } else {setError("Please submit photos")}
  }

  return (
    <PostPhotoContainer>
      {error ? <Error><div className='error-text'>{error}</div></Error> : null}
      <div className='center-grid'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='first-column'>
            <div className='first-row'>
              <h2>Choose the most epic photo</h2>
              <h2>from your travel</h2>
              <input 
                type='file' 
                // multiple 
                name='image' 
                id='image'
                onChange={imageHandleChange}
              />
            </div>
          </div>
          <div className='image-container'>
            {renderPhotos(selectedImages)}
          </div>
          <div className='button-grid'>
              <button className='back' onClick={() => history.push(`/editfilm/${currentSlideId}`)}>Back</button>
              <button type='submit' className='submit'>Submit Film</button>
          </div>
        </form>
      </div>
    </PostPhotoContainer>
  )
}

export default PostPhotos