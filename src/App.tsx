import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Bar from "./pages/Bar/Bar";
import Cocktails from "./pages/Cocktails/Cocktails";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <nav className="app__nav">
          <Link to="/">Home</Link>
          <Link to="/bar">Bar</Link>
          <Link to="/cocktails">Cocktails</Link>
        </nav>
        <div className="app__content">
          <Switch>
            <Route path="/bar">
              <Bar />
            </Route>
            <Route path="/cocktails">
              <Cocktails />
            </Route>
            <Route path="/">
              <div>index</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
