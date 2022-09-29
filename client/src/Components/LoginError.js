import React from 'react'
import { Link } from 'react-router-dom'
import paper_flight from '../Images/paper_flight.png'
// Styling
import { ErrorContainer } from '../Styles/LoginError.style'

function LoginError() {
  return (
    <ErrorContainer>
      <div className='card-grid'>
        <img src={paper_flight} className='paper-flight' alt='paper-flight'/>
        <h2>Please log in first</h2>
        <div className='login-link'>
          <Link to={'/'}>Log in</Link>
        </div>
      </div>
    </ErrorContainer>
  )
}

export default LoginError