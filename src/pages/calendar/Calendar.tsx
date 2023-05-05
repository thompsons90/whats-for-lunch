import React from "react";
import HamburgerNav from "../../navbar/Navbar";
import { navItems } from "../../App";

export const CalendarPage = () => {
  return (
    <div className="pageContainer">
      <div>
        <HamburgerNav navItems={navItems} />
      </div>
      <h1>Calendar Page</h1>
    </div>
  );
};
