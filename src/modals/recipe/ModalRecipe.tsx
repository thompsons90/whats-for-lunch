import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  id: number;
  mainRecipeName: string;
  recipeTypeSelectedValue: string[];
  totalTimeMinutes: number;
  prerequisiteMeal: string;
  ingredientsArray: string[];
  recipeStatus: string;
  recipeRatingValue: number;
  recipeDirections: string;
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalRecipe = ({ isOpen, onClose }: ModalProps) => {
  const [modalRecipeData, setModalRecipeData] = useState({
    mainRecipeName: null,
    recipeTypeSelectedValue: null,
    recipeTypeOptions: [
      "Beef",
      "Breakfast - Savory",
      "Breakfast - Sweet",
      "Chicken",
      "Dessert",
      "Hamburger/Sandwich",
      "Hotdog",
      "Italian",
      "Mexican",
      "Pork",
      "Seafood",
      "Soup",
      "Side",
    ],
    totalTimeMinutes: null,
    prerequisiteMeal: null,
    ingredientsArray: [],
    recipeStatus: null,
    recipeRank: null,
    recipeRatingValue: 3,
    recipeDirections: null,
  });

  const [modalRecipeDataCopy, setModalRecipeDataCopy] = useState({
    ...modalRecipeData,
  });

  const handleRatingValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalRecipeData({
      ...modalRecipeData,
      recipeRatingValue: e.target.valueAsNumber,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  // const onSubmit = (data: FormValues) => console.log(data);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setModalRecipeDataCopy(modalRecipeData);
    onClose();
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalRecipeData({
      ...modalRecipeData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <form id="recipeForm" onSubmit={handleSubmit(onSubmit)}>
              <label>Main Recipe Name:</label>
              <input
                {...register("mainRecipeName", { required: true })}
                onChange={(e) => handleNameChange(e)}
              />
              {errors.mainRecipeName && <span>This field is required</span>}

              <label>Type:</label>
              <select
                {...register("recipeTypeSelectedValue", { required: true })}
              >
                <option value="">--Please choose an option--</option>
                {modalRecipeData.recipeTypeOptions.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.recipeTypeSelectedValue && (
                <span>This field is required</span>
              )}

              <label>Total Time (in minutes):</label>
              <input
                type="number"
                {...register("totalTimeMinutes", { required: true, min: 1 })}
              />
              {errors.totalTimeMinutes && (
                <span>
                  This field is required and must be at least 1 minute
                </span>
              )}

              <label>Prerequisite Meal:</label>
              <input {...register("prerequisiteMeal")} />

              <label>Ingredients:</label>
              <textarea {...register("ingredientsArray", { required: true })} />
              {errors.ingredientsArray && <span>This field is required</span>}

              <label>Status:</label>
              <select {...register("recipeStatus", { required: true })}>
                <option value="">--Please choose an option--</option>
                <option value="classic">classic</option>
                <option value="trial-run">trial-run</option>
                <option value="new">new</option>
              </select>
              {errors.recipeStatus && <span>This field is required</span>}

              <label>Rating:</label>
              <div>
                <input
                  type="range"
                  name="rating"
                  min={1}
                  max={5}
                  step={1}
                  value={modalRecipeData?.recipeRatingValue}
                  onChange={(e) => handleRatingValueChange(e)}
                />
                <output>{modalRecipeData?.recipeRatingValue}</output>
              </div>

              <label>Directions:</label>
              <textarea {...register("recipeDirections", { required: true })} />
              {errors.recipeDirections && <span>This field is required</span>}

              <div className="form-buttons">
                <button className="btn-primary" type="submit">
                  Save
                </button>
                <button className="btn-secondary" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalRecipe;
