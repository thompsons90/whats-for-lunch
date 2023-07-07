import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  // RouteComponentProps,
} from "react-router-dom";
// import { RouteComponentProps } from "react-router";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import CalendarPage from "./pages/Calendar";
// import { ContactPage } from "./pages/contact/Contact";
import { CookbookPage } from "./pages/CookbookPage";
import { LandingPage } from "./pages/LandingPage";
import { SearchPage } from "./pages/search/SearchPage";
import homeIcon from "../public/images/home.png";
import calendarIcon from "../public/images/calendar-pen.png";
import cookbookIcon from "../public/images/book-alt.png";
// import searchIcon from "../public/images/search.png";
import aboutIcon from "../public/images/comment-info.png";
import contactIcon from "../public/images/user.png";
import { NavItem } from "./utils/constants";
import { ViewportProvider } from "./hooks/useViewport";

export const navItems: NavItem[] = [
  { title: "Home", path: "/", icon: homeIcon, mobile: true },
  // { title: "Calendar", path: "/calendar", icon: calendarIcon, mobile: true },
  { title: "Cookbook", path: "/cookbook", icon: cookbookIcon, mobile: true },
  // { title: "Search", path: "/search", icon: searchIcon, mobile: true },
  { title: "About", path: "/about", icon: aboutIcon, mobile: true },
  // { title: "Contact", path: "/contact", icon: contactIcon, mobile: false },
];

const App = () => {
  // const [navigateToCalendar, setNavigateToCalendar] = useState(false);

  return (
    <ViewportProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/cookbook" element={<CookbookPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </Router>
    </ViewportProvider>
  );
};

export default App;
// todo: I am trying to incorporate the code below into the code above, do I need to?
// todo: Stop, think, is there a better way, why am I trying to do this?
// {
//   navigateToCalendar ? (
//     <CalendarPage />
//   ) : (
//     <LandingPage
//       navigateToCalendar={navigateToCalendar}
//       setNavigateToCalendar={setNavigateToCalendar}
//     />
//   );
// }
