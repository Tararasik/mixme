import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Bar from "./pages/Bar/Bar";
import AllCocktails from "./pages/Cocktails/AllCocktails";
import MyCocktails from "./pages/Cocktails/MyCocktails";
import Cocktail from "./pages/Cocktail/Cocktail";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
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
