import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Bar from "./pages/Bar/Bar";
import AllCocktails from "./pages/Cocktails/AllCocktails";
import MyCocktails from "./pages/Cocktails/MyCocktails";
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
              <ul>
                <li>
                  <Link to="/cocktails/my">My Cocktails</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="app__content">
          <Switch>
            <Route path="/bar" component={Bar} />
            <Route path="/cocktail/:name" component={Cocktail} />
            <Route path="/cocktails" component={AllCocktails} exact />
            <Route path="/cocktails/my" component={MyCocktails} />
            <Route path="/">
              <div>Home page</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
