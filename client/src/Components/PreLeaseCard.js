import React from 'react'
import { useHistory } from 'react-router-dom'
// Styling
import { CardStyle } from '../Styles/UserPage.style'

function PreLeaseCard({id, city, country, date}) {

  const history = useHistory()

  return (
    <CardStyle onClick={() => history.push(`/editfilm/${id}`)}>
      <h3>{city}</h3>
      <h4>{country}</h4>
      <h5>{date}</h5>
    </CardStyle>
  )
}

export default PreLeaseCard