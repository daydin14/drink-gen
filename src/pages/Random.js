import React from "react";
import "../assets/css/random.css";

import { useState, useEffect } from "react";

const randomURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function Random() {

  const [random, setRandom] = useState("");
    
  useEffect(() => {
    const getDrink = async() => {
      try {
        const cocktail = await (await fetch(
          `${randomURL}`
        )).json();

        if(cocktail.drinks) {
          const {
            strDrink:name,
            strDrinkThumb:image,
            strInstructions:instructions,
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, 
            strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, 
            strIngredient11, strIngredient12, strIngredient14, strIngredient15,
          } = cocktail.random;

          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient14, strIngredient15].filter((element) => { return element != null; });

          const newCocktail = {name, image, instructions, ingredients};
          setRandom(newCocktail);
        } else {
          setRandom (null);
        } 
      }
      catch(error) {
        console.log("error: ", error);
      }
    }
    getDrink();
  });

  const {name, image, instructions, ingredients} = random;

  return (
    <div class="random" align="center">
      <h1>Are you adventurous?</h1>
      <h2>Willing to try something new at random?</h2>

      <button id="random-btn">
        <strong>Dare to try?</strong>
      </button>

      <br/>
      <p>Picture:</p>
      <img src={image} alt={name} width="300px" height="300px"/>
      <h1>Drink: {name}</h1>
      
    </div>
  );
}

export default Random;
