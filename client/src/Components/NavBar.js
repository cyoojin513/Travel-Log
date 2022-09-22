import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function NavBar() {

  const history = useHistory()

  const handleLogOut = () => {
    fetch('/logout', {
        method: 'DELETE'
    })
    history.push('/')
  }

  return (
    <div>
       <NavLink exact to = "/user/:id">My Page</NavLink>
       <NavLink exact to = "/newfilm">New Film</NavLink>
       <a href="#" onClick={handleLogOut}>Sign Out</a>
    </div>
  )
}

export default NavBar