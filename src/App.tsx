import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  // RouteComponentProps,
} from "react-router-dom";

import "./App.css";
import { AboutPage } from "./pages/about/AboutPage";
import { CalendarPage } from "./pages/calendar/Calendar";
import { ContactPage } from "./pages/contact/Contact";
import { CookBookPage } from "./pages/cookbook/CookbookPage";
import { LandingPage } from "./pages/landing/LandingPage";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Calender</Link>
          </li>
          <li>
            <Link to="/cookbook">Cookbook</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/calendar" Component={CalendarPage} />
        <Route path="/cookbook" Component={CookBookPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
    </Router>
  );
};

export default App;
