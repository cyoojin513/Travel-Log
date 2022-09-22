import { Route, Switch } from "react-router-dom";
import { useState } from 'react'
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";
import NewFilm from "./Components/NewFilm";

function App() {

  const [currentUser, setCurrentUser] = useState("")

  function updateUser(user) {
    setCurrentUser(user)
  }

  console.log(currentUser)

  return (
    <div>
      <Switch>
        <Route path='/user/:id'>
          <UserPage />
        </Route>
          <Route path='/newfilm'><NewFilm /></Route>
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
