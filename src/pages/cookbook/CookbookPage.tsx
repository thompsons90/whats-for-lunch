import React from "react";
import HamburgerNav from "../../navbar/Navbar";
import { navItems } from "../../App";
import Navbar from "../../navbar/Navbar";
import MasterPage from "../MasterPage";

export const CookBookPage = () => {
  return (
    <div className="pageContainer">
      <MasterPage
        pageContent={
          <div className="page-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="cookbook-page-container">
                <h1>Cookbook Page</h1>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
