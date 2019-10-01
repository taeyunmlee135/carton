import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components 
import Navbar from './components/Navbar'

// pages 
import home from './pages/home';
import chores from './pages/chores';
import addChores from './pages/addChores';


class App extends Component {

  render(){
      return (
          <div className="App">
              <Router>
                <div className = "container">
                  <Navbar/>
                  <Switch>
                    <Route exact path = '/' component = {home} />
                    <Route exact path = '/chores' component = {chores} />
                    <Route exact path = '/addChores' component = {addChores} />
                  </Switch>
                </div>
              
              </Router>
          </div>
      )
  }


}


export default App;
