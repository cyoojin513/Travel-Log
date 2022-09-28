import React from 'react'
import { MyPageContainer } from 'Styles/UserPage.style'
import MovieCard from './MovieCard'
import PreLeaseCard from './PreLeaseCard'

function UserPage({slideshows}) {
  return (
    <MyPageContainer>
      <h1 className='my-movie-title'>My Movies</h1>
      <div>
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
      </div>
      <h1 className='pre-release-title'>Pre-release Films</h1>
      <div>
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
      </div>
    </MyPageContainer>
  )
}

export default UserPage