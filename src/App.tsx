import React from "react";

import Bar from "./pages/Bar/Bar";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>All ingredients</h1>
      </header>
      <Bar />
    </div>
  );
}

export default App;
