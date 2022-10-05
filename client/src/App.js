// @ts-nocheck
import React, { useEffect, useLayoutEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import { useState } from 'react'
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";
import NewFilm from "./Components/NewFilm";
import NavBar from "./Components/NavBar";
import PostPhotos from './Components/PostPhotos';
import Movie from 'Components/Movie';
import EditFilm from './Components/EditFilm';
import LoginError from './Components/LoginError';
// Styling
import { AppContainer, SecondRow } from './Styles/App.style'


function App() {

  const [ currentUser, setCurrentUser ] = useState("")
  const [ slideshows, setSlideshows ] = useState([])
  const [ currentSlideId, setCurrentSlideId ] = useState(null)

  useEffect(() => {
    if (!currentUser) {
      fetch('/me').then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setCurrentUser(data)
          })
        }
      })
    }
  }, [currentUser])

  useLayoutEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => setSlideshows(data.slideshows))
      }
    })
  }, [ currentUser ])

  function updateUser(user) {
    setCurrentUser(user)
  }

  function deleteRendered(id) {
    setSlideshows(slideshows?.filter((item) => item.id != id))
  }

  function updateSlideshows(newMovie) {
    setSlideshows([...slideshows, newMovie])
  }

  function updatingIsReleased(updatedSlide) {
    const updated = slideshows.map((item) =>{
      if (item.id === updatedSlide.id) {
        return updatedSlide
      } else {return item} 
    })
    setSlideshows(updated)
  }

  function getSlideId(id) {
    setCurrentSlideId(id)
  }

  return (
    <div>
        <AppContainer>
          <NavBar currentUser={currentUser} updateUser={updateUser}/>
          <SecondRow>
            <Switch>
              <Route path='/user/:id'>
                <UserPage 
                  currentUser={currentUser} 
                  slideshows={slideshows}
                  deleteRendered={deleteRendered}
                />
              </Route>
              <Route path='/movie/:id'>
                <Movie currentUser={currentUser} deleteRendered={deleteRendered}/>
              </Route>
              <Route path='/newfilm'>
                <NewFilm
                  currentUser={currentUser}  
                  updateSlideshows={updateSlideshows}
                  getSlideId={getSlideId}  
                />
              </Route>
              <Route path='/editfilm/:id'>
                <EditFilm 
                  currentUser={currentUser}
                  updatingIsReleased={updatingIsReleased}
                  getSlideId={getSlideId}  
                />
              </Route>
              <Route path='/postphotos'>
                <PostPhotos
                  currentSlideId={currentSlideId}
                  currentUser={currentUser}
                  updatingIsReleased={updatingIsReleased}
                />
              </Route>
              <Route path='/loginerror'>
                <LoginError />
              </Route>
              <Route path="/signup">
                <Signup updateUser={updateUser} />
              </Route>
              <Route exact path="/">
                <Login updateUser={updateUser} />
              </Route>
            </Switch>
          </SecondRow>
        </AppContainer>
    </div>
  );
}


export default App;
