import React, { useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import { createContext, useState } from 'react'
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";
import NewFilm from "./Components/NewFilm";
import NavBar from "./Components/NavBar";
import PostPhotos from 'Components/PostPhotos';

export const AppContext = createContext(null);

function App() {

  const [ currentUser, setCurrentUser ] = useState("")
  const [ slideshows, setSlideshows ] = useState([])
  const [ image, setimage ] = useState(AppContext)

  useEffect(() => {
    fetch('/slideshows')
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => setSlideshows(data))
      }
    })
  }, [ currentUser ])

  function updateUser(user) {
    setCurrentUser(user)
  }

  function updateSlideshows(newMovie) {
    setSlideshows([...slideshows, newMovie])
  }

  console.log(currentUser)

  return (
    <div>
      <NavBar currentUser={currentUser} updateUser={updateUser}/>
      <Switch>
        <Route path='/user/:id'>
          <UserPage slideshows={slideshows}/>
        </Route>
        <Route path='/newfilm'>
          <NewFilm currentUser={currentUser} updateSlideshows={updateSlideshows}/>
        </Route>
        <Route path='/postphotos'>
          <PostPhotos />
        </Route>
        <Route path="/signup">
          <Signup updateUser={updateUser} />
        </Route>
        <Route exact path="/">
          <Login updateUser={updateUser} />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
