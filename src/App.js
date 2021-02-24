import "./App.css";
import {useState} from 'react'
import Err404 from "./screens/Err404";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setuser] = useState('Jose Alberto Santiago');

  function login(userfrom) {
    setuser(userfrom);
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard user={user}/>
          </Route>
          <Route>
            <Err404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
