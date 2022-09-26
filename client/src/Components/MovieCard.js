import React from 'react'
import { useHistory } from 'react-router-dom'

function MovieCard({id, city, country, date}) {

  const history = useHistory()

  return (
    <div onClick={() => history.push(`/movie/${id}`)}>
      <h3>{city}</h3>
      <h5>{country}</h5>
      <h5>{date}</h5>
    </div>
  )
}

export default MovieCard