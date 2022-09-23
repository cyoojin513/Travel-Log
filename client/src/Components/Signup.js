import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer } from '../Styles/Login.style'

function Signup({updateUser}) {

  const [ formData, setFormData ] = useState({
    name:'',
    email:'',
    password:''
  })

  const [ errors, setErrors ] = useState([])
  const history = useHistory()

  const { name, email, password } = formData

  function onSubmit(e){
    e.preventDefault()
    const user = {
        name,
        email,
        password
    }
   
    fetch(`/users`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                updateUser(user)
                console.log("Signup successfully!")
                history.push(`/user/${user.id}`)
            })
        }else {
            res.json().then(json => setErrors(Object.entries(json.errors)))
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
        {/* <label id="toggle-label" for="toggle-1">I'm a toggle</label>
        <input type="checkbox" id="toggle-1"/> */}
        <div className='thecard'>
          <div className='signup-form'>
            <form onSubmit={onSubmit}> 
              <input 
                type='text'
                name='name'
                placeholder='Name' 
                value={name} onChange={handleChange}
              />
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
              <input type='submit' value='Sign up' />
            </form>
            {errors? <div>{errors.map(error => <div>{error[0]+': '+ error[1]}</div>)}</div>:null}
          </div>
        </div>
      </MainContainer>
    </div>
  )
}

export default Signup