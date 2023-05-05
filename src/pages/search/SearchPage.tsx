import React from "react";
import { navItems } from "../../App";
import Navbar from "../../navbar/Navbar";

export const SearchPage = () => {
  return (
    <div className="pageContainer">
      <div>
        <Navbar navItems={navItems} />
      </div>
      <h1>Search Page</h1>
    </div>
  );
};
