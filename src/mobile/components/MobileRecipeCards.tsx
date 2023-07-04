import { memo } from "react";
import { Recipe, RecipeCardsProps } from "../../utils/constants";
import "../styles/MobileComponentStyles.css";

interface MobileRecipeCardsProps extends RecipeCardsProps {
  flippedRecipeId: number | null;
  setFlippedRecipeId: (recipeId: number | null) => void;
  handleCardFlip: (recipeId: number) => void;
}

const MobileRecipeCards = memo(
  ({
    recipes,
    flippedRecipeId,
    setFlippedRecipeId,
    handleCardFlip,
  }: MobileRecipeCardsProps) => {
    return (
      <div className="mobile-recipe-card-container">
        {recipes.map((recipe: Recipe) => (
          <div
            className={`mobile-recipe-card ${
              flippedRecipeId === recipe.id ? "flipped" : ""
            }`}
            key={recipe.id}
            onClick={() => handleCardFlip(recipe.id)}
            style={{ margin: 0 }}
          >
            <div
              className="mobile-recipe-card"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "#d5d5d5",
                margin: "10px",
                padding: 0,
                height: "100px",
                width: "150px",
              }}
            >
              <div className="mobile-recipe-image-container">
                {recipe.foodImage}
              </div>
              <div
                style={{
                  border: "1px solid black",
                  width: "1px",
                  height: "25px",
                  margin: "5px",
                }}
              ></div>
              <div
                className="mobile-recipe-card-info-container"
                style={{ width: "75px" }}
              >
                <ul style={{ listStyle: "none" }}>
                  <li id="mobile-recipe-card-name">{recipe.mainRecipeName}</li>
                  <li id="mobile-recipe-card-group">
                    {recipe.recipeTypeSelectedValue}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

export default MobileRecipeCards;
