import React from 'react'

function MovieCard({id, city, country, date}) {
  return (
    <div>
      <h3>{city}</h3>
      <h5>{country}</h5>
      <h5>{date}</h5>
    </div>
  )
}

export default MovieCard