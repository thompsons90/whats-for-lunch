import React from "react";
import HamburgerNav from "../../navbar/Navbar";
import { navItems } from "../../App";
import Navbar from "../../navbar/Navbar";

export const CookBookPage = () => {
  return (
    <div className="pageContainer">
      <div>
        <Navbar navItems={navItems} />
      </div>
      <div className="page-container">
        <h1>Cookbook Page</h1>
      </div>
    </div>
  );
};
