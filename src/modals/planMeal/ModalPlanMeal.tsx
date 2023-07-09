import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { FormValues, ModalProps } from "../../utils/constants";
import ReactDatePicker from "react-datepicker";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  // const onSubmit = (data: FormValues) => console.log(data);

  const onSubmit = (data: FormValues) => {
    // console.log(data);
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

  // const handleDateSelect = (date: Date) => {
  //   setSelectedDate(date);
  //   setIsOpen(true);
  //   console.log("clicked calendar");
  // };

  // const handleAddEvent = () => {
  //   if (newEvent.title && newEvent.start && newEvent.end) {
  //     const updatedEvents = [...allEvents, newEvent] as Event[];
  //     setAllEvents(updatedEvents);
  //     setNewEvent({ title: "", allDay: true, start: null, end: null });
  //   }
  // };

  // console.log(modalPlanMeal);
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* <div>
              <h2>Add New Meal</h2>
              <input
                type="text"
                placeholder="Add Meal"
                style={{ width: "20%", marginRight: "10px" }}
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
              <ReactDatePicker
                placeholderText="Start Date"
                // style={{ marginRight: "10px" }}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
              <ReactDatePicker
                placeholderText="End Date"
                // style={{ marginRight: "10px" }}
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
              <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                Add Meal
              </button>
            </div> */}

            <h2>Plan a Meal</h2>
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
                <div></div>
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
