import React from "react";

// Styling
import "../assets/css/title.css";

// Components
import Gifs from "../components/Gifs";
import Navbar from "./Navbar";

function Title() {
  return (
    <div class="title" align="center">
      <h1 id="title">Dave's Drink Generator</h1>
      <Gifs />
      <br />
      <br />
      <Navbar />
      <br />
      <br />
    </div>
  );
}

export default Title;
