import React from "react";
import "../assets/css/random.css";

const randomURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function Random() {
    return(
        <div align="center">
            <h1>Are you adventurous?</h1>
            <h2>Willing to try something new at random?</h2>

            <button id="random-btn"><strong>Dare to try?</strong></button>
        </div>
    );
}

export default Random;