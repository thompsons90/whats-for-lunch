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
// import MasterPage from "../MasterPage";
import FooterSection from "../../footer/Footer";
import { Nullable } from "vitest";
import { EventItems } from "../../utils/constants";
import MasterPage from "../../pages/MasterPage";

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

const DesktopCalendarPage: FC = () => {
  const [newEvent, setNewEvent] = useState<Nullable<EventItems>>({
    title: "",
    allDay: true,
    start: null,
    end: null,
  });

  const [allEvents, setAllEvents] = useState<Event[]>(initialEvents);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [modalPlanMeal, setModalPlanMeal] = useState<{
    mainRecipeName: string;
    recipeTypeSelectedValue: string;
    mealCategory: string;
    mealCategoryOptions: string[];
    startDate: Date;
    endDate: Date;
  }>({
    mainRecipeName: "",
    recipeTypeSelectedValue: "",
    mealCategory: "",
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
              setSelectedDate={setSelectedDate}
              modalPlanMeal={modalPlanMeal}
              setModalPlanMeal={setModalPlanMeal}
            />

            <Calendar
              className="calendar-component"
              localizer={localizer}
              events={allEvents}
              startAccessor={(event) => event.start || new Date()}
              endAccessor={(event) => event.end || new Date()}
              // style={{ height: 700, margin: "50px" }}
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

export default DesktopCalendarPage;

// todo: initial add meal logic
