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
import { SearchPage } from "./pages/search/SearchPage";
import homeIcon from "../public/images/home.png";
import calendarIcon from "../public/images/calendar-pen.png";
import cookbookIcon from "../public/images/book-alt.png";
import searchIcon from "../public/images/search.png";
import aboutIcon from "../public/images/comment-info.png";
import contactIcon from "../public/images/user.png";

export const navItems: NavItem[] = [
  { title: "Home", path: "/", icon: homeIcon, mobile: true },
  { title: "Calendar", path: "/calendar", icon: calendarIcon, mobile: true },
  { title: "Cookbook", path: "/cookbook", icon: cookbookIcon, mobile: true },
  { title: "Search", path: "/search", icon: searchIcon, mobile: true },
  { title: "About", path: "/about", icon: aboutIcon, mobile: false },
  { title: "Contact", path: "/contact", icon: contactIcon, mobile: false },
];

interface NavItem {
  title: string;
  path: string;
  icon: string;
  mobile: boolean;
}

interface Props {
  navItems: NavItem[];
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/calendar" Component={CalendarPage} />
        <Route path="/cookbook" Component={CookBookPage} />
        <Route path="/search" Component={SearchPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
    </Router>
  );
};

export default App;
