import { memo } from "react";
import { Recipe, RecipeCardsProps } from "../../utils/constants";
import "../styles/MobileComponentStyles.css";

interface MobileRecipeCardsProps extends RecipeCardsProps {
  filteredRecipes: Recipe[];
  flippedRecipeId: number | null;
  setFlippedRecipeId: (recipeId: number | null) => void;
  handleCardFlip: (recipeId: number) => void;
}

const MobileRecipeCards = memo(
  ({
    recipes,
    filteredRecipes,
    flippedRecipeId,
    setFlippedRecipeId,
    handleCardFlip,
  }: MobileRecipeCardsProps) => {
    return (
      <div
        className="mobile-recipe-card-container"
        style={{ height: filteredRecipes.length >= 10 ? "100%" : "" }}
      >
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
                margin: "5px 0px",
                padding: 0,
                height: "100px",
                width: "175px",
              }}
            >
              <div
                className="mobile-recipe-image-container"
                style={{
                  // backgroundImage: `url(${chickenIcon})`,
                  backgroundImage: `url(${recipe.foodImage})`,
                  height: "60px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  marginLeft: "5px",
                }}
              >
                {/* {recipe.foodImage} */}
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
                // style={{ wordBreak: "break-word" }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    marginRight: "5px",
                  }}
                >
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
