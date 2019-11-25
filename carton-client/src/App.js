import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';

import jwtDecode from 'jwt-decode'; // jwt-decode package to decode FBIdToken

// Components 
import Navbar from './components/Navbar'; 
import AuthRoute from './util/AuthRoute';

// pages 
import home from './pages/home';
import chores from './pages/chores';
import addChores from './pages/addChores';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme(themeFile);

// check if user is logged in
// TODO: this will only run once, at beginning: 
// if 'authenticated' state changes, then will not update until page is refreshed
// need to implement Redux to get global state to fix this (somehow? in the tutorial)
// TODO: is there a way to make the login and signup buttons in the navbar disappear when someone is logged in?
let authenticated;
const token = localStorage.FBIdToken;
if(token) {
  const decodedToken = jwtDecode(token);
  // if token has expired, redirect to login page, set authenticated to false
  if(decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login';
    authenticated = false;
  }
  else { // user is logged in, set authenticated to true
    authenticated = true;
  }
}

class App extends Component {

  render(){
      return (
        <MuiThemeProvider theme={theme}>
          <div className="App">
              <Router>
                <Navbar authenticated={authenticated}/>
                <div className = "container">
                  <Switch>
                    <Route exact path = '/' component = {home} />
                    <Route exact path = '/chores' component = {chores} />
                    <Route exact path = '/addChores' component = {addChores} />

                    {/* if authenticated, login and signup will just redirect to homepage */}
                    {/* <AuthRoute exact path = '/login' component = {login} authenticated={authenticated}/>
                    <AuthRoute exact path = '/signup' component = {signup} authenticated={authenticated}/> */}

                    {/* without already-authenticated -> redirect check */}
                    <Route exact path = '/login' component = {login} />
                    <Route exact path = '/signup' component = {signup} />
                    
                  </Switch>
                </div>
              </Router>
          </div>
        </MuiThemeProvider> 
      );
  }
}


export default App;
