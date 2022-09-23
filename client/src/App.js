import React from 'react'
import { Route, Switch } from "react-router-dom";
import { createContext, useState } from 'react'
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";
import NewFilm from "./Components/NewFilm";
import NavBar from "./Components/NavBar";

export const AppContext = createContext(null);

function App() {

  const [currentUser, setCurrentUser] = useState("")
  const [image, setimage] = useState(AppContext)

  function updateUser(user) {
    setCurrentUser(user)
  }

  console.log(currentUser)

  return (
    <div>
      <NavBar currentUser={currentUser} updateUser={updateUser}/>
      <Switch>
        <Route path='/user/:id'>
          <UserPage />
        </Route>
        <Route path='/newfilm'>
          <NewFilm currentUser={currentUser}/>
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
