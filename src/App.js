import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { FaireContainer, PageNotFound } from './containers';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={FaireContainer} />
          <Route path="/category/:actualCategory?" component={FaireContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
