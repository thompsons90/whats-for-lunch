import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { FormValues, ModalProps } from "../../utils/constants";

const ModalPlanMeal = ({ isOpen, setIsOpen, selectedDate }: ModalProps) => {
  const [modalPlanMeal, setModalPlanMeal] = useState({
    mainRecipeName: null,
    recipeTypeSelectedValue: null,
    mealCategory: null,
    mealCategoryOptions: [
      "Breakfast",
      "Brunch",
      "Lunch",
      "Snack",
      "Dinner",
      "Special",
    ],
    startDate: selectedDate || new Date(),
    endDate: new Date(),
  });

  const [modalPlanMealCopy, setModalPlanMealCopy] = useState({
    ...modalPlanMeal,
  });

  const [toggleState, setToggleState] = useState<number>(0);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const getActiveClass = (index: number, className: string): string =>
    toggleState === index ? className : "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  // const onSubmit = (data: FormValues) => console.log(data);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setModalPlanMeal({
      ...modalPlanMealCopy,
      startDate: selectedDate || new Date(),
    });
    setIsOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalPlanMeal({
      ...modalPlanMeal,
      [event.target.name]: event.target.value,
    });
  };
  console.log(modalPlanMeal);
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <form id="recipeForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="container">
                <div>
                  <label>Recipe Name:</label>
                  <input
                    {...register("mainRecipeName", { required: false })}
                    onChange={(e) => handleNameChange(e)}
                  />
                  {errors.mainRecipeName && <span>This field is required</span>}
                </div>
              </div>

              <div className="form-buttons">
                <button
                  className="btn-primary"
                  type="submit"
                  // onClick={(e) => handleForm(e)}
                >
                  Add
                </button>
                <button className="btn-primary" type="submit">
                  Update
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

export default ModalPlanMeal;
