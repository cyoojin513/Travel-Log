import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import travellog_logo_2 from '../Images/travellog_logo_2.png'
import travellog_logo from '../Images/travellog_logo.png'
// Styling
import { NavContainer, Logo } from '../Styles/Nav.style'

function NavBar({ currentUser, updateUser }) {

  const history = useHistory()

  const handleLogOut = () => {
    fetch('/logout', {
        method: 'DELETE'
    }).then(() => {
        updateUser("")
        history.push('/')
        }
      )
  }

  return (
    <NavContainer>
      {currentUser 
        ? <Logo as={NavLink} id='logo-container' exact to = {`/user/${currentUser.id}`}>
            <img src={travellog_logo_2} alt='logo'/>
          </Logo>
        : <img id='login-page-logo' src={travellog_logo} alt='logo'/>
      }
      {currentUser ? <NavLink exact to = {`/user/${currentUser.id}`}>My Page</NavLink> : null}
      {currentUser ? <NavLink exact to = "/newfilm">New Film</NavLink> : null}
      <div></div>
      {currentUser ? <p className="sign-out" onClick={handleLogOut}>Sign Out</p> : null}
  </NavContainer>
  )
}

export default NavBar