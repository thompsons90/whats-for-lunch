import React from "react";
import { navItems } from "../../App";
import Navbar from "../../navbar/Navbar";

export const AboutPage = () => {
  return (
    <div className="pageContainer">
      <div>
        <Navbar navItems={navItems} />
      </div>
      <h1>About Page</h1>
    </div>
  );
};
