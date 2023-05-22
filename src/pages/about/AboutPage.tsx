import React from "react";
import { navItems } from "../../App";
import Navbar from "../../navbar/Navbar";

export const AboutPage = () => {
  return (
    <div className="pageContainer">
      <div>
        <Navbar navItems={navItems} />
      </div>
      <div className="page-container">
        <h1>About Page</h1>
      </div>
    </div>
  );
};
