import React from "react";
import HamburgerNav from "../../navbar/Navbar";
import { navItems } from "../../App";

export const CookBookPage = () => {
  return (
    <div className="pageContainer">
      <div>
        <HamburgerNav navItems={navItems} />
      </div>
      <h1>Cookbook Page</h1>
    </div>
  );
};
