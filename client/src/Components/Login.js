import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MainContainer } from '../Styles/Login.style'

function Login({updateUser}) {

  const history = useHistory()

  const [ formData, setFormData ] = useState({
      email:'',
      password:''
  })
  const [ errors, setErrors ] = useState([])
  const { email, password } = formData

  function onSubmit(e){
    e.preventDefault()
    const user = {
        email,
        password
    }
    fetch(`/login`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
          console.log("Login successfully!")
          history.push(`/user/${user.id}`)
        })
      }else {
        res.json().then(json => setErrors(Object.entries(json.error)))
      }
    })
  }

  function handleChange(e) {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
    }

  return (
    <div>
      <MainContainer>
        <div className='card-grid'>
          <div className='login-form'>
            <h2>Log In</h2>
            <form onSubmit={onSubmit}>
              <input 
                type='text' 
                name='email' 
                placeholder='Email' 
                value={email} 
                onChange={handleChange}
              />
              <input 
                type='password' 
                name='password' 
                placeholder='Password'
                value={password} 
                onChange={handleChange} 
              />
              <input type='submit' value='Log in'/>
            </form>
            <Link to={'/signup'} className='signup-link'>Sign up</Link>
          </div>
          {errors? <div className='error'>{errors.map(error => error[1])}</div>:null}
        </div>
      </MainContainer>
    </div>
  )
}

export default Login