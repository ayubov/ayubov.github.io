import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
 } from 'react-router-dom';
import Header from './components/Header';
import Apps from './apps/Apps';
import Contact from './components/Contact';
import Home from './components/Home';
import Gradient from './demo/containers/Gradient';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="app">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/apps" component={Apps} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/gradient" component={Gradient} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
