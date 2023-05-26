import React, { FC, useState } from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../navbar/Navbar";
import { navItems } from "../../App";
import ModalPlanMeal from "../../modals/planMeal/ModalPlanMeal";
import MasterPage from "../MasterPage";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { "en-US": enUS },
});

const initialEvents: Event[] = [
  {
    title: "Park Day",

    start: new Date(2023, 4, 17),
    end: new Date(2023, 4, 17),
  },
  {
    title: "AHG Awards",

    start: new Date(2023, 4, 18),
    end: new Date(2023, 4, 18),
  },
  {
    title: "Field Day",

    start: new Date(2023, 4, 19),
    end: new Date(2023, 4, 19),
  },
];

const CalendarPage: FC = () => {
  const [newEvent, setNewEvent] = useState<{
    title: string;
    allDay: boolean;
    start: Date | null;
    end: Date | null;
  }>({
    title: "",
    allDay: true,
    start: null,
    end: null,
  });
  const [allEvents, setAllEvents] = useState<Event[]>(initialEvents);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
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

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsOpen(true);
    console.log("clicked calendar");
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      const updatedEvents = [...allEvents, newEvent] as Event[];
      setAllEvents(updatedEvents);
      setNewEvent({ title: "", allDay: true, start: null, end: null });
    }
  };

  const handleButtonClick = (): void => {
    setIsOpen(true);
  };

  return (
    <div>
      <MasterPage
        pageContent={
          <div className="page-content-container">
            <div className="modal-button-container">
              <button className="open-modal-button" onClick={handleButtonClick}>
                Add Meal
              </button>
            </div>
            <ModalPlanMeal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              selectedDate={selectedDate}
            />

            <Calendar
              localizer={localizer}
              events={allEvents}
              startAccessor={(event) => event.start || new Date()}
              endAccessor={(event) => event.end || new Date()}
              style={{ height: 500, margin: "50px" }}
              className="calendar-component"
              selectable
              onSelectSlot={(slotInfo) => {
                setSelectedDate(slotInfo.start);
                setIsOpen(true);
                console.log("clicked calendar");
              }}
            />
          </div>
        }
      />
    </div>
  );
};

export default CalendarPage;

// todo: initial add meal logic
{
  /* <h1>Calendar</h1>
      <h2>Add New Meal</h2>
      <div>
        <input
          type="text"
          placeholder="Add Meal"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          // style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          // style={{ marginRight: "10px" }}
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Meal
        </button>
      </div> */
}
