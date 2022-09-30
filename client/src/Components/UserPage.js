import React from 'react'
import { MovieContainer, PreReleaseContainer , CardContainer } from 'Styles/UserPage.style'
import MovieCard from './MovieCard'
import PreLeaseCard from './PreLeaseCard'

function UserPage({slideshows}) {
  return (
    <div>
      <MovieContainer>
        <h1 className='my-movie-title'>My Movies</h1>
        <CardContainer>
          {slideshows.map((slide) => slide.isReleased
            ? <MovieCard
                key = {slide.id}
                id = {slide.id}
                city = {slide.city}
                country = {slide.country}
                date = {slide.date}
              />
            : null
          )}
        </CardContainer>
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