import React from "react";
import { Route } from "react-router-dom";

// Styling
import './App.css';

// Components
import Title from "./components/Title"

// Pages
import Home from "./pages/Home";
import Random from "./pages/Random";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Title />

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/random">
        <Random />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

    </div>
  );
}

export default App;
