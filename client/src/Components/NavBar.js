import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
// Styling
import { NavContainer } from '../Styles/Nav.style'

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
      <p>Logo</p>
      {currentUser ? <NavLink exact to = {`/user/${currentUser.id}`}>My Page</NavLink> : null}
      {currentUser ? <NavLink exact to = "/newfilm">New Film</NavLink> : null}
      <div></div>
      {currentUser ? <p className="sign-out" onClick={handleLogOut}>Sign Out</p> : null}
  </NavContainer>
  )
}

export default NavBar