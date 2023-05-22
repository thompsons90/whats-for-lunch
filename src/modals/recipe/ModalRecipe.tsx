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

import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalRecipe = ({ isOpen, setIsOpen }: ModalProps) => {
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

  const [toggleState, setToggleState] = useState<number>(0);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const getActiveClass = (index: number, className: string): string =>
    toggleState === index ? className : "";

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
    setModalRecipeData(modalRecipeDataCopy);
    setIsOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalRecipeData({
      ...modalRecipeData,
      [event.target.name]: event.target.value,
    });
  };
  console.log(modalRecipeData);
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <form id="recipeForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="container">
                <ul className="tab-list">
                  <li
                    className={`tabs ${getActiveClass(0, "active-tabs")}`}
                    onClick={() => toggleTab(0)}
                  >
                    {" "}
                    Details
                  </li>
                  <li
                    className={`tabs ${getActiveClass(1, "active-tabs")}`}
                    onClick={() => toggleTab(1)}
                  >
                    {" "}
                    Stats
                  </li>
                </ul>
                <div
                  className={`content ${getActiveClass(0, "active-content")}`}
                >
                  <label>Recipe Name:</label>
                  <input
                    {...register("mainRecipeName", { required: false })}
                    onChange={(e) => handleNameChange(e)}
                  />
                  {errors.mainRecipeName && <span>This field is required</span>}

                  <label>Directions:</label>
                  <textarea
                    {...register("recipeDirections", { required: false })}
                  />
                  {errors.recipeDirections && (
                    <span>This field is required</span>
                  )}

                  <label>Prerequisite Meal:</label>
                  <input {...register("prerequisiteMeal")} />

                  <label>Ingredients:</label>
                  <textarea
                    {...register("ingredientsArray", { required: false })}
                  />
                  {errors.ingredientsArray && (
                    <span>This field is required</span>
                  )}
                </div>
                <div
                  className={`content ${getActiveClass(1, "active-content")}`}
                >
                  <label>Type:</label>
                  <select
                    {...register("recipeTypeSelectedValue", {
                      required: false,
                    })}
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
                    {...register("totalTimeMinutes", {
                      required: false,
                      min: 1,
                    })}
                  />
                  {errors.totalTimeMinutes && (
                    <span>
                      This field is required and must be at least 1 minute
                    </span>
                  )}

                  <label>Status:</label>
                  <select {...register("recipeStatus", { required: false })}>
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
                      className="rating-input"
                    />
                    <output>{modalRecipeData?.recipeRatingValue}</output>
                  </div>
                </div>
              </div>

              <div className="form-buttons">
                <button className="btn-primary" type="submit">
                  Save
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => setIsOpen(false)}
                >
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
