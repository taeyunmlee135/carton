import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Components 
import Navbar from './components/Navbar'

// pages 
import home from './pages/home';
import chores from './pages/chores';
import addChores from './pages/addChores';
import login from './pages/login';
import signup from './pages/signup';
import groceries from './pages/groceries';
import addGroceries from './pages/addGroceries';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b8d9fd',
    },
    secondary: {
      main: '#ffb74d',
    }
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {

  render(){
      return (
        <MuiThemeProvider theme={theme}>
          <div className="App">
              <Router>
                <Navbar/>
                <div className = "container">
                  <Switch>
                    <Route exact path = '/' component = {home} />
                    <Route exact path = '/chores' component = {chores} />
                    <Route exact path = '/addChores' component = {addChores} />
                    <Route exact path = '/login' component = {login} />
                    <Route exact path = '/signup' component = {signup} />
                    <Route exact path = '/groceries' component = {groceries} />
                    <Route exact path = '/addGroceries' component = {addGroceries} />
                    
                  </Switch>
                </div>
              </Router>
          </div>
        </MuiThemeProvider> 
      );
  }
}


export default App;
