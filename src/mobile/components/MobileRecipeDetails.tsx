import { memo, useState } from "react";
import { Recipe } from "../../utils/constants";

interface MobileRecipeDetailsProps {
  recipe: Recipe | undefined;
  flippedRecipeId: number | null;
  setFlippedRecipeId: (recipeId: number | null) => void;
}

const MobileRecipeDetails = memo(
  ({
    recipe,
    flippedRecipeId,
    setFlippedRecipeId,
  }: MobileRecipeDetailsProps) => {
    const [directionsOpen, setDirectionsOpen] = useState<boolean>(false);
    const handleRecipeDirections = () => {
      setDirectionsOpen(!directionsOpen);
    };

    if (flippedRecipeId !== recipe?.id) {
      return null; // Don't render the component if it's not the selected recipe
    }

    const handleBackButton = () => {
      setFlippedRecipeId(null);
    };

    return (
      <div className="mobile-recipe-card-details">
        <div style={{ width: "100%" }}>
          <button
            onClick={() => handleBackButton()}
            className="global-back-button"
          ></button>
        </div>
        <div className="mobile-recipe-card-details-info">
          <div>
            {recipe.foodImage}
            <h2>{recipe.mainRecipeName}</h2>
            <p>Rating: {recipe.recipeRating} Stars</p>
            <div className="mobile-recipe-card-details-ingredients">
              <ul>
                Ingredients:
                {recipe.ingredientsArray.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div
              className="mobile-recipe-card-details-directions"
              style={{ display: directionsOpen ? "flex" : "none" }}
            >
              <ul>
                {recipe.recipeDirections.map((direction, index) => (
                  <li key={index}>{direction}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => handleRecipeDirections()}
              className="mobile-recipe-directions-button"
            >
              {directionsOpen ? "Minimize" : "Directions"}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default MobileRecipeDetails;
