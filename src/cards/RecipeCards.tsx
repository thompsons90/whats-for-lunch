import React, { useState } from "react";
import { recipeData } from "../utils/data";
import { Recipe, RecipeCardsProps } from "../utils/constants";
// import { fetchData } from "../api/FetchData";

const RecipeCards = ({ recipes }: RecipeCardsProps) => {
  const [flippedRecipeId, setFlippedRecipeId] = useState<number | null>(null);

  const handleCardFlip = (recipeId: number) => {
    if (flippedRecipeId === recipeId) {
      setFlippedRecipeId(null); // Flip the card back to the front if already flipped
    } else {
      setFlippedRecipeId(recipeId); // Flip the card to the back
    }
  };
  // fetchData();
  return (
    <div className="recipe-card-container">
      {recipes.map((recipe: Recipe) => (
        <div
          className={`recipe-card ${
            flippedRecipeId === recipe.id ? "flipped" : ""
          }`}
          key={recipe.id}
          onClick={() => handleCardFlip(recipe.id)}
        >
          <div className="recipe-card-front">
            <ul>
              <h2>{recipe.mainRecipeName}</h2>
              <li>{recipe.recipeStatus} Meal</li>
              <li>{recipe.recipeRating} Stars</li>
            </ul>
          </div>
          <div className="recipe-card-back">
            <ul>
              <li>
                <strong>Ingredients:</strong>{" "}
                {recipe.ingredientsArray.join(", ")}
              </li>
              <li>
                <strong>Directions:</strong> {recipe.recipeDirections}
              </li>
            </ul>
          </div>
        </div>
      ))}
      {/* {recipes.map((recipe: Recipe) => (
        <div
          className={`recipe-card ${
            flippedRecipeId === recipe.id ? "flipped" : ""
          }`}
          key={recipe.id}
          onClick={() => handleCardFlip(recipe.id)}
        >
          <div className="recipe-card-front">
            <ul>
              <h2>{recipe.mainRecipeName}</h2>
              <li>{recipe.recipeStatus} Meal</li>
              <li>{recipe.recipeRating} Stars</li>
            </ul>
          </div>
          <div className="recipe-card-back">
            <ul>
              <li>
                <strong>Ingredients:</strong>{" "}
                {recipe.ingredientsArray.join(", ")}
              </li>
              <li>
                <strong>Directions:</strong> {recipe.recipeDirections}
              </li>
            </ul>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default RecipeCards;
