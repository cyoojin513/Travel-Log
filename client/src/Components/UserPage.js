import React from 'react'
import MovieCard from './MovieCard'
import PreLeaseCard from './PreLeaseCard'

function UserPage({slideshows}) {
  return (
    <div>
      <h1>My Movies</h1>
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
      <h1>Pre-release Films</h1>
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
    </div>
  )
}

export default UserPage