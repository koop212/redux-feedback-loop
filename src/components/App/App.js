import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <br />
        <Router>
          <Route exact path = '/' component = {Feeling} />
          <Route exact path='/understanding' component={Understanding} />
        </Router>
      </div>
    );
  }
}

export default App;
