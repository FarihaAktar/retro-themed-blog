
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Screens/HomePage';
import Login from './Login/Login';
import PrivateRoute from './Login/PrivateRoute';
import AddBlog from './Components/Admin/AddBlog';
import ManageBlog from './Components/Admin/ManageBlog';
import SingleBlog from './Screens/SingleBlog';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/home' component={HomePage} />
          <Route path='/singleBlog/:id'>
            <SingleBlog/>
          </Route>
          <PrivateRoute path='/addBlog'>
            <AddBlog />
          </PrivateRoute>
          <PrivateRoute path='/manageBlog'>
            <ManageBlog />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
