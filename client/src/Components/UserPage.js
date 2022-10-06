import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PreLeaseCard from './PreLeaseCard'
import MapCard from './MapCard'
import camera_icon from '../Images/camera_icon.png'
// Styling
import { MovieContainer, PreReleaseContainer, CardContainer, AlertStyling } from 'Styles/UserPage.style'
import { MapContainerStyle, Alert } from 'Styles/Map.style'

function UserPage({currentUser, slideshows, deleteRendered}) {

  const [ isClicked, setIsClicked ] = useState(true)
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

  const releasedMovie = slideshows.filter((item) => item.isReleased)

  return (
    <AlertStyling>
      <MovieContainer>
        <h1 className='my-movie-title'></h1>
        <MapContainerStyle>
          {isClicked
            ? <Alert onClick={() => setIsClicked(!isClicked)}>
                <img src={camera_icon} id='icon' alt='icon'/>
                <h3>Click New Film to create a movie</h3>
              </Alert>
            : null
          }
          <MapCard movie={releasedMovie}/>
        </MapContainerStyle>
      </MovieContainer>
      <PreReleaseContainer>
        <h1 className='pre-release-title'>🔴 Pre-release Films</h1>
        <CardContainer>
          <div className='card-grid'>
          {slideshows.map((slide) => slide.isReleased
            ? null
            : <PreLeaseCard
                key = {slide.id}
                id = {slide.id}
                city = {slide.city}
                country = {slide.country}
                date = {slide.date}
                deleteRendered = {deleteRendered}
              />
          )}
          </div>
        </CardContainer>
      </PreReleaseContainer>
    </AlertStyling>
  )
}

export default UserPage