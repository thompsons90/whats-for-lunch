import React from "react";
import { navItems } from "../App";
import Navbar from "../navbar/Navbar";

export const ContactPage = () => {
  return (
    <div className="pageContainer">
      <div>
        <Navbar navItems={navItems} />
      </div>
      <div className="page-container">
        <h1>Contact Page</h1>
      </div>
    </div>
  );
};
