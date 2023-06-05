import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { FormValues, ModalProps } from "../../utils/constants";
import ReactDatePicker from "react-datepicker";
import { Recipe, RecipeCardsProps } from "../../utils/constants";

interface ModalMobileRecipeProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  recipes: Recipe[];
}

const ModalMobileRecipe = ({
  isOpen,
  setIsOpen,
  recipes,
}: ModalMobileRecipeProps) => {
  const handleButtonClick = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {recipes.map((recipe: Recipe) => (
        <div className="mobile-recipe-modal-container">
          <div
            className="mobile-recipe-names"
            key={recipe.id}
            onClick={() => handleButtonClick()}
          >
            <h2>{recipe.mainRecipeName}</h2>
          </div>
        </div>
      ))}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {recipes.map((recipe: Recipe) => (
              <div
                className="mobile-recipe-details"
                onClick={() => handleButtonClick()}
              >
                <ul key={recipe.id}>
                  <li>
                    <strong>Ingredients:</strong>{" "}
                    {recipe.ingredientsArray.join(", ")}
                  </li>
                  <li>
                    <strong>Directions:</strong> {recipe.recipeDirections}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMobileRecipe;
