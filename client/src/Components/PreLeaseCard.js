// @ts-nocheck
import React from 'react'
import { useHistory } from 'react-router-dom'
import Click_2 from '../Sounds/Click_2.mp3'
// Styling
import { CardStyle } from '../Styles/UserPage.style'

function PreLeaseCard({id, city, country, date}) {

  const history = useHistory()

  function handleClick() {
    const audio = new Audio(Click_2)
    audio.volume = 0.5
    audio.play()
    history.push(`/editfilm/${id}`)
  }

  return (
    <CardStyle onClick={handleClick}>
      <h3>{city}</h3>
      <h4>{country}</h4>
      <h5>{date}</h5>
    </CardStyle>
  )
}

export default PreLeaseCard