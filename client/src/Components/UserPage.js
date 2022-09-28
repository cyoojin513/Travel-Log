import React from 'react'
import { MyPageContainer, CardContainer } from 'Styles/UserPage.style'
import MovieCard from './MovieCard'
import PreLeaseCard from './PreLeaseCard'

function UserPage({slideshows}) {
  return (
    <MyPageContainer>
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
    </MyPageContainer>
  )
}

export default UserPage