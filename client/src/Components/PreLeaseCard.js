// @ts-nocheck
import React from 'react'
import { useHistory } from 'react-router-dom'
import Click_2 from '../Sounds/Click_2.mp3'
// Styling
import { CardStyle } from '../Styles/UserPage.style'

function PreLeaseCard({id, city, country, date, deleteRendered}) {

  const history = useHistory()

  function handleClick() {
    const audio = new Audio(Click_2)
    audio.volume = 0.5
    audio.play()
    history.push(`/prereleased-editfilm/${id}`)
  }

  function handleDelete() {
    fetch(`/slideshows/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
        deleteRendered(id)
      }
    })
  }

  return (
    <CardStyle>
      <div className='city-delete-container'>
        <h3>{city}</h3>
        <h5 onClick={handleDelete}>x</h5>
      </div>
      <h4>{country}</h4>
      <h5>{date}</h5>
      <h4 className='edit' onClick={handleClick}>Edit</h4>
    </CardStyle>
  )
}

export default PreLeaseCard