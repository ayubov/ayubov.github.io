import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
 } from "react-router-dom";
import Header from './components/Header';
import Works from './components/Works';
import Contact from './components/Contact';
import Home from './components/Home';

// const styles = {

// }

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div className="app">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/contact" component={Contact} />
      </div>
      </Router>
      {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
