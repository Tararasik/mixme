import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Bar from "./pages/Bar/Bar";
import Cocktails from "./pages/Cocktails/Cocktails";
import Cocktail from "./pages/Cocktail/Cocktail";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <nav className="app__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bar">Bar</Link>
            </li>
            <li>
              <Link to="/cocktails">Cocktails</Link>
            </li>
          </ul>
        </nav>
        <div className="app__content">
          <Switch>
            <Route path="/bar">
              <Bar />
            </Route>
            <Route path="/cocktail/:name">
              <Cocktail />
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
