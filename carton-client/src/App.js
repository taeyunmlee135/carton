import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// pages 
import chores from './pages/chores';
import addChores from './pages/addChores';

class App extends Component {

  render(){
      return (
          <div className="App">
              <Router>
                <Switch>
                  <Route exact path = '/' component = {chores } />
                  <Route exact path = '/' component = {addChores } />
                  
                </Switch>
              
              </Router>
          </div>
      )
  }


}


export default App;
