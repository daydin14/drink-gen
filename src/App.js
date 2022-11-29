import React from "react";
import { Route } from "react-router-dom";

// Styling
import "./App.css";

// Components
import Title from "./components/Title";
import Footer from "./components/Footer";

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

      <Footer />
    </div>
  );
}

export default App;
