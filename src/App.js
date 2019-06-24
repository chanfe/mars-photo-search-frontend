import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main';
import { Responsive, Button } from 'semantic-ui-react'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component  {
  render() {
    return (
      <Router>
        <React.Fragment>    
          <Switch>
            <Route path="/" render={(props) => <Main />} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
