import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import PreLeaseCard from './PreLeaseCard'
import MapCard from './MapCard'
// Styling
import { MovieContainer, PreReleaseContainer , CardContainer } from 'Styles/UserPage.style'

function UserPage({currentUser, slideshows}) {

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
    <div>
      <MovieContainer>
        <h1 className='my-movie-title'>My Movies</h1>
        <MapCard movie={releasedMovie}/>
      </MovieContainer>
      <PreReleaseContainer>
          <h1 className='pre-release-title'>Pre-release Films</h1>
          <CardContainer>
            {slideshows.map((slide) => slide.isReleased
              ? null
              : <PreLeaseCard
                  key = {slide.id}
                  id = {slide.id}
                  city = {slide.city}
                  country = {slide.country}
                  date = {slide.date}
                />
            )}
        </CardContainer>
      </PreReleaseContainer>
    </div>
  )
}

export default UserPage