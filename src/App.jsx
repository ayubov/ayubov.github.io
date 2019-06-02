import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import injectSheet from "react-jss";
import Home from "./components/Home";
import Gradient from "./gradient/containers/Gradient";

const styles = {
  app: {
    maxWidth: "700px",
    margin: "auto"
  }
};

const App = ({ classes }) => (
  <div className={classes.app}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/gradient" component={Gradient} />
    </Router>
  </div>
);

export default injectSheet(styles)(App);
